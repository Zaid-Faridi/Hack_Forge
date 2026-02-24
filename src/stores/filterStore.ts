import { create } from 'zustand';

interface FilterState {
    query: string;
    status: string[];
    mode: string[];
    domains: string[];
    prizeRange: [number, number];
    country: string;
    featured: boolean;
    setQuery: (q: string) => void;
    toggleStatus: (s: string) => void;
    toggleMode: (m: string) => void;
    toggleDomain: (d: string) => void;
    setPrizeRange: (r: [number, number]) => void;
    setCountry: (c: string) => void;
    toggleFeatured: () => void;
    reset: () => void;
}

const defaults = {
    query: '',
    status: [] as string[],
    mode: [] as string[],
    domains: [] as string[],
    prizeRange: [0, 100000] as [number, number],
    country: '',
    featured: false,
};

export const useFilterStore = create<FilterState>((set) => ({
    ...defaults,
    setQuery: (query) => set({ query }),
    toggleStatus: (s) =>
        set((st) => ({
            status: st.status.includes(s)
                ? st.status.filter((x) => x !== s)
                : [...st.status, s],
        })),
    toggleMode: (m) =>
        set((st) => ({
            mode: st.mode.includes(m)
                ? st.mode.filter((x) => x !== m)
                : [...st.mode, m],
        })),
    toggleDomain: (d) =>
        set((st) => ({
            domains: st.domains.includes(d)
                ? st.domains.filter((x) => x !== d)
                : [...st.domains, d],
        })),
    setPrizeRange: (prizeRange) => set({ prizeRange }),
    setCountry: (country) => set({ country }),
    toggleFeatured: () => set((st) => ({ featured: !st.featured })),
    reset: () => set(defaults),
}));
