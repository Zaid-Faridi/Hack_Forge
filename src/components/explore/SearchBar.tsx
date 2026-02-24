'use client';
import { motion } from 'framer-motion';
import { Search, Loader2, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface SearchBarProps {
    value: string;
    onChange: (v: string) => void;
    onClear: () => void;
    isSearching?: boolean;
}

export function SearchBar({ value, onChange, onClear, isSearching }: SearchBarProps) {
    return (
        <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/20 to-magenta/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center">
                <div className="absolute left-4 text-ink-300">
                    {isSearching ? (
                        <Loader2 className="h-5 w-5 animate-spin text-cyan" />
                    ) : (
                        <Search className="h-5 w-5" />
                    )}
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search hackathons by name, tech, or domain..."
                    className={cn(
                        'w-full rounded-2xl bg-surface1 border border-ink-400 pl-12 pr-12 py-4 text-ink-100',
                        'placeholder:text-ink-300 text-sm',
                        'focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/30',
                        'transition-all duration-300'
                    )}
                />
                {value && (
                    <button
                        onClick={onClear}
                        className="absolute right-4 p-1 rounded-lg text-ink-300 hover:text-white transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
