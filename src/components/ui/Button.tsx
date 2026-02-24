'use client';
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    'relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                cyan: 'bg-cyan text-bg hover:shadow-glow-cyan focus:ring-cyan/50',
                magenta: 'bg-magenta text-white hover:shadow-glow-magenta focus:ring-magenta/50',
                ghost: 'bg-transparent text-ink-200 hover:text-white hover:bg-surface1',
                outline:
                    'border border-ink-400 text-ink-200 hover:border-cyan hover:text-cyan bg-transparent',
                volt: 'bg-volt text-bg font-bold hover:shadow-glow-volt focus:ring-volt/50',
            },
            size: {
                sm: 'h-9 px-4 text-sm',
                md: 'h-11 px-6 text-sm',
                lg: 'h-13 px-8 text-base',
                icon: 'h-10 w-10',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            variant: 'cyan',
            size: 'md',
            fullWidth: false,
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, loading, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size, fullWidth, className }))}
                disabled={disabled || loading}
                {...props}
            >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
