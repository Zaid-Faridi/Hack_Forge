'use client';
import { Tag } from '@/components/ui/Tag';
import { useFilterStore } from '@/stores/filterStore';

export function ActiveFilters() {
    const { status, mode, domains, toggleStatus, toggleMode, toggleDomain, reset } = useFilterStore();
    const all = [
        ...status.map((s) => ({ label: s, remove: () => toggleStatus(s) })),
        ...mode.map((m) => ({ label: m, remove: () => toggleMode(m) })),
        ...domains.map((d) => ({ label: d, remove: () => toggleDomain(d) })),
    ];

    if (all.length === 0) return null;

    return (
        <div className="flex items-center gap-2 flex-wrap mb-6">
            <span className="text-xs text-ink-400">Active:</span>
            {all.map((f) => (
                <Tag key={f.label} label={f.label} active onRemove={f.remove} />
            ))}
            {all.length > 2 && (
                <button
                    onClick={reset}
                    className="text-xs text-ink-300 hover:text-cyan transition-colors"
                >
                    Clear all
                </button>
            )}
        </div>
    );
}
