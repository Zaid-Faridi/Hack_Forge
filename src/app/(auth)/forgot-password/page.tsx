'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GradientText } from '@/components/ui/GradientText';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
    const [sent, setSent] = useState(false);

    return (
        <Card className="w-full max-w-md p-8 mx-4">
            <h1 className="text-heading-xl font-bold mb-2 text-center">
                Reset <GradientText>Password</GradientText>
            </h1>
            <p className="text-ink-300 text-sm text-center mb-6">
                {sent
                    ? 'Check your email for a password reset link.'
                    : 'Enter your email and we\'ll send you a reset link.'}
            </p>
            {!sent ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                    }}
                    className="space-y-4"
                >
                    <Input label="Email" type="email" placeholder="you@example.com" />
                    <Button type="submit" variant="cyan" fullWidth>
                        Send reset link
                    </Button>
                </form>
            ) : (
                <div className="text-center">
                    <Button variant="ghost" onClick={() => setSent(false)}>
                        Try another email
                    </Button>
                </div>
            )}
            <div className="mt-6 text-center">
                <Link
                    href="/login"
                    className="text-sm text-ink-300 hover:text-cyan transition-colors inline-flex items-center gap-1"
                >
                    <ArrowLeft className="h-3 w-3" />
                    Back to login
                </Link>
            </div>
        </Card>
    );
}
