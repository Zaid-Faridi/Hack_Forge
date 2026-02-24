'use client';
import { FilterGroup } from './FilterGroup';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { useFilterStore } from '@/stores/filterStore';
import { HACKATHON_STATUSES, HACKATHON_MODES, TECH_DOMAINS } from '@/lib/utils/constants';
import { RotateCcw } from 'lucide-react';

export function FilterSidebar() {
    const {
        status, mode, domains, featured,
        toggleStatus, toggleMode, toggleDomain, toggleFeatured, reset,
    } = useFilterStore();

    const hasFilters = status.length > 0 || mode.length > 0 || domains.length > 0 || featured;

    return (
        <div className="glass-card p-6 sticky top-28">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-heading-md font-semibold text-ink-100">Filters</h3>
                {hasFilters && (
                    <Button variant="ghost" size="sm" onClick={reset}>
                        <RotateCcw className="h-3 w-3" />
                        Clear
                    </Button>
                )}
            </div>

            <FilterGroup title="Status">
                <div className="flex flex-wrap gap-2">
                    {HACKATHON_STATUSES.map((s) => (
                        <Tag
                            key={s}
                            label={s}
                            active={status.includes(s)}
                            onClick={() => toggleStatus(s)}
                        />
                    ))}
                </div>
            </FilterGroup>

            <FilterGroup title="Mode">
                <div className="flex flex-wrap gap-2">
                    {HACKATHON_MODES.map((m) => (
                        <Tag
                            key={m}
                            label={m}
                            active={mode.includes(m)}
                            onClick={() => toggleMode(m)}
                        />
                    ))}
                </div>
            </FilterGroup>

            <FilterGroup title="Tech Domain" defaultOpen={false}>
                <div className="flex flex-wrap gap-2">
                    {TECH_DOMAINS.map((d) => (
                        <Tag
                            key={d}
                            label={d}
                            active={domains.includes(d)}
                            onClick={() => toggleDomain(d)}
                        />
                    ))}
                </div>
            </FilterGroup>

            <FilterGroup title="Featured">
                <label className="flex items-center gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={featured}
                        onChange={toggleFeatured}
                        className="h-4 w-4 rounded-md accent-cyan bg-surface2 border-ink-400"
                    />
                    <span className="text-sm text-ink-200">Featured only</span>
                </label>
            </FilterGroup>
        </div>
    );
}
