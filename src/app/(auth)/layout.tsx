'use client';
import { NoiseBg } from '@/components/ui/NoiseBg';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden">
            <NoiseBg />
            {children}
        </div>
    );
}
