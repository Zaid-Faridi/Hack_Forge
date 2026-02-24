'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { loginSchema, type LoginInput } from '@/lib/validations/auth';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface LoginFormProps {
    role: 'participant' | 'organizer';
    mode: 'login' | 'register';
}

export function LoginForm({ role, mode }: LoginFormProps) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInput & { name?: string; orgName?: string }>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginInput) => {
        const res = await signIn('credentials', {
            ...data,
            role,
            redirect: false,
        });
        if (res?.ok) {
            router.push(
                role === 'organizer'
                    ? '/dashboard/organizer'
                    : '/dashboard/participant'
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
            {mode === 'register' && (
                <Input
                    label="Full Name"
                    placeholder="Your name"
                    {...register('name')}
                />
            )}
            {mode === 'register' && role === 'organizer' && (
                <Input
                    label="Organization Name"
                    placeholder="ACME Inc."
                    {...register('orgName')}
                />
            )}
            <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                error={errors.email?.message}
            />
            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                {...register('password')}
                error={errors.password?.message}
            />
            <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                variant={role === 'organizer' ? 'magenta' : 'cyan'}
            >
                {mode === 'login' ? 'Sign in' : 'Create account'}
            </Button>
        </form>
    );
}
