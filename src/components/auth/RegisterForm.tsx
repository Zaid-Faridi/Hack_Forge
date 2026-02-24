'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    participantRegisterSchema,
    organizerRegisterSchema,
    type ParticipantRegisterInput,
    type OrganizerRegisterInput,
} from '@/lib/validations/auth';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { useState } from 'react';
import { TECH_DOMAINS } from '@/lib/utils/constants';

interface RegisterFormProps {
    role: 'participant' | 'organizer';
}

export function RegisterForm({ role }: RegisterFormProps) {
    const router = useRouter();
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const isOrganizer = role === 'organizer';
    const schema = isOrganizer ? organizerRegisterSchema : participantRegisterSchema;

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const toggleSkill = (skill: string) => {
        const next = selectedSkills.includes(skill)
            ? selectedSkills.filter((s) => s !== skill)
            : [...selectedSkills, skill];
        setSelectedSkills(next);
        setValue('skills', next);
    };

    const onSubmit = async (data: any) => {
        // In production, this would call a register API first
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            role,
            redirect: false,
        });
        if (res?.ok) {
            router.push(
                isOrganizer ? '/dashboard/organizer' : '/dashboard/participant'
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
            <Input
                label="Full Name"
                placeholder="Your name"
                {...register('name')}
                error={(errors as any).name?.message}
            />
            {isOrganizer && (
                <>
                    <Input
                        label="Organization Name"
                        placeholder="ACME Inc."
                        {...register('orgName')}
                        error={(errors as any).orgName?.message}
                    />
                    <Input
                        label="Organization Slug"
                        placeholder="acme-inc"
                        {...register('orgSlug')}
                        error={(errors as any).orgSlug?.message}
                    />
                    <Input
                        label="Website (optional)"
                        placeholder="https://acme.com"
                        {...register('website')}
                        error={(errors as any).website?.message}
                    />
                </>
            )}
            {!isOrganizer && (
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-ink-200">
                        Skills & Interests
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {TECH_DOMAINS.slice(0, 8).map((domain) => (
                            <Tag
                                key={domain}
                                label={domain}
                                active={selectedSkills.includes(domain)}
                                onClick={() => toggleSkill(domain)}
                            />
                        ))}
                    </div>
                    {(errors as any).skills && (
                        <p className="text-xs text-magenta">{(errors as any).skills.message}</p>
                    )}
                </div>
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
                variant={isOrganizer ? 'magenta' : 'cyan'}
            >
                Create account
            </Button>
        </form>
    );
}
