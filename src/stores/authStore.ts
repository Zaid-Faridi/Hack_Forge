import { create } from 'zustand';

type Role = 'PARTICIPANT' | 'ORGANIZER' | null;

interface AuthState {
    role: Role;
    orgId: string | null;
    setSession: (role: Role, orgId: string | null) => void;
    clear: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    role: null,
    orgId: null,
    setSession: (role, orgId) => set({ role, orgId }),
    clear: () => set({ role: null, orgId: null }),
}));
