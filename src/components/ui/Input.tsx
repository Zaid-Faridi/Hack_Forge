'use client';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, type = 'text', ...props }, ref) => {
        return (
            <div className="space-y-1.5">
                {label && (
                    <label className="block text-sm font-medium text-ink-200">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    type={type}
                    className={cn(
                        'w-full rounded-xl bg-surface1 border border-ink-400 px-4 py-3 text-ink-100 text-sm',
                        'placeholder:text-ink-300',
                        'focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/30 focus:shadow-glow-cyan/20',
                        'transition-all duration-300',
                        error && 'border-magenta focus:border-magenta focus:ring-magenta/30',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-xs text-magenta mt-1">{error}</p>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';
