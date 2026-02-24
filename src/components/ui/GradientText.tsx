'use client';
import { cn } from '@/lib/utils/cn';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    from?: string;
    to?: string;
    animate?: boolean;
}

export function GradientText({
    className,
    from = '#00E5FF',
    to = '#FF0090',
    animate = true,
    children,
    ...props
}: GradientTextProps) {
    return (
        <span
            className={cn(
                'bg-clip-text text-transparent inline-block',
                animate && 'animate-gradient',
                className
            )}
            style={{
                backgroundImage: `linear-gradient(135deg, ${from}, ${to}, ${from})`,
                backgroundSize: animate ? '200% 200%' : '100% 100%',
            }}
            {...props}
        >
            {children}
        </span>
    );
}
