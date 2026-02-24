'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface FilterGroupProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function FilterGroup({ title, children, defaultOpen = true }: FilterGroupProps) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-ink-400/20 pb-4 mb-4 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-ink-200 hover:text-white transition-colors"
            >
                {title}
                <ChevronDown
                    className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        open && 'rotate-180'
                    )}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-2 space-y-2">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
