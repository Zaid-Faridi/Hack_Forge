'use client';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface TagProps {
    label: string;
    onRemove?: () => void;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export function Tag({ label, onRemove, active, onClick, className }: TagProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200',
                active
                    ? 'bg-cyan/20 text-cyan border border-cyan/30'
                    : 'bg-surface1 text-ink-300 border border-ink-400 hover:border-ink-300 hover:text-ink-200',
                className
            )}
        >
            {label}
            {onRemove && (
                <X
                    className="h-3 w-3 cursor-pointer hover:text-white"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                />
            )}
        </button>
    );
}
