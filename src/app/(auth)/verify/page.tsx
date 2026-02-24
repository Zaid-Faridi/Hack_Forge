'use client';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GradientText } from '@/components/ui/GradientText';
import { Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function VerifyPage() {
    return (
        <Card className="w-full max-w-md p-8 mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-cyan" />
            </div>
            <h1 className="text-heading-xl font-bold mb-2">
                Check your <GradientText>email</GradientText>
            </h1>
            <p className="text-ink-300 text-sm mb-6">
                We&apos;ve sent a verification link to your email address.
                Click the link to verify your account.
            </p>
            <Link href="/login">
                <Button variant="ghost" fullWidth>
                    <ArrowLeft className="h-4 w-4" />
                    Back to login
                </Button>
            </Link>
        </Card>
    );
}
