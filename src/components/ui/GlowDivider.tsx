'use client';
import { cn } from '@/lib/utils/cn';

interface GlowDividerProps {
    color?: 'cyan' | 'magenta' | 'volt';
    className?: string;
}

export function GlowDivider({ color = 'cyan', className }: GlowDividerProps) {
    const colors = {
        cyan: 'from-transparent via-cyan/40 to-transparent',
        magenta: 'from-transparent via-magenta/40 to-transparent',
        volt: 'from-transparent via-volt/40 to-transparent',
    };

    return (
        <div
            className={cn(
                'h-px w-full bg-gradient-to-r',
                colors[color],
                className
            )}
        />
    );
}
