'use client';
import { cn } from '@/lib/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'line' | 'circle' | 'card';
}

export function Skeleton({ className, variant = 'line', ...props }: SkeletonProps) {
    const variants = {
        line: 'h-4 rounded-md',
        circle: 'h-12 w-12 rounded-full',
        card: 'h-64 rounded-2xl',
    };

    return (
        <div
            className={cn(
                'animate-pulse bg-surface2',
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export function CardSkeleton() {
    return (
        <div className="glass-card p-6 space-y-4">
            <Skeleton variant="card" className="h-40" />
            <Skeleton className="w-3/4" />
            <Skeleton className="w-1/2" />
            <div className="flex gap-2">
                <Skeleton className="w-16 h-6 rounded-full" />
                <Skeleton className="w-20 h-6 rounded-full" />
            </div>
        </div>
    );
}
