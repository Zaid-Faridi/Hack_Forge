'use client';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useFilterStore } from '@/stores/filterStore';
import { fadeUp } from '@/lib/animations/variants';

export function EmptyState() {
    const reset = useFilterStore((s) => s.reset);

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center py-20 text-center"
        >
            <div className="h-20 w-20 rounded-2xl bg-surface2 flex items-center justify-center mb-6">
                <SearchX className="h-10 w-10 text-ink-400" />
            </div>
            <h3 className="text-heading-lg font-semibold text-ink-200 mb-2">
                No hackathons found
            </h3>
            <p className="text-ink-300 text-sm mb-6 max-w-sm">
                Try adjusting your filters or search query to discover more events.
            </p>
            <Button variant="outline" onClick={reset}>
                Clear all filters
            </Button>
        </motion.div>
    );
}
