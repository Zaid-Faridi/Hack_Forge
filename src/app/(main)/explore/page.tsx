'use client';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import { GradientText } from '@/components/ui/GradientText';
import { SearchBar } from '@/components/explore/SearchBar';
import { FilterSidebar } from '@/components/explore/FilterSidebar';
import { HackathonGrid } from '@/components/explore/HackathonGrid';
import { ActiveFilters } from '@/components/explore/ActiveFilters';
import { useSearch } from '@/hooks/useSearch';
import { useFilterStore } from '@/stores/filterStore';

export default function ExplorePage() {
    const { query, setQuery, clearQuery } = useSearch();
    const setStoreQuery = useFilterStore((s) => s.setQuery);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-6 py-8"
        >
            {/* Header */}
            <motion.div variants={fadeUp} className="mb-8">
                <h1 className="text-display-lg font-display font-bold mb-2">
                    Explore <GradientText>Hackathons</GradientText>
                </h1>
                <p className="text-ink-300 text-body-lg">
                    Discover events that match your skills and interests.
                </p>
            </motion.div>

            {/* Search */}
            <motion.div variants={fadeUp} className="mb-8">
                <SearchBar
                    value={query}
                    onChange={(v) => {
                        setQuery(v);
                        setStoreQuery(v);
                    }}
                    onClear={clearQuery}
                />
            </motion.div>

            {/* Active Filters */}
            <ActiveFilters />

            {/* Grid + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                <motion.div variants={fadeUp} className="hidden lg:block">
                    <FilterSidebar />
                </motion.div>
                <motion.div variants={fadeUp}>
                    <HackathonGrid />
                </motion.div>
            </div>
        </motion.div>
    );
}
