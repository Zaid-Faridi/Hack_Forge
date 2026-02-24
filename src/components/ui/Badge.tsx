'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const badgeVariants = cva(
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
    {
        variants: {
            variant: {
                cyan: 'bg-cyan/10 text-cyan border border-cyan/20',
                magenta: 'bg-magenta/10 text-magenta border border-magenta/20',
                volt: 'bg-volt/10 text-volt border border-volt/20',
                neutral: 'bg-surface2 text-ink-200 border border-ink-400',
                success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
            },
        },
        defaultVariants: {
            variant: 'neutral',
        },
    }
);

interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> { }

export function Badge({ className, variant, ...props }: BadgeProps) {
    return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
