'use client';
import { cn } from '@/lib/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'magenta';
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
    className,
    variant = 'default',
    hover = true,
    padding = 'md',
    children,
    ...props
}: CardProps) {
    const paddingClasses = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <div
            className={cn(
                'glass-card',
                variant === 'magenta' && 'glass-card-magenta',
                !hover && 'hover:border-transparent hover:shadow-glass',
                paddingClasses[padding],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
