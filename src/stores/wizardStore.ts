import { create } from 'zustand';

interface WizardState {
    step: number;
    formData: Record<string, any>;
    setStep: (s: number) => void;
    updateField: (key: string, value: any) => void;
    next: () => void;
    back: () => void;
    reset: () => void;
}

export const useWizardStore = create<WizardState>((set, get) => ({
    step: 1,
    formData: {},
    setStep: (step) => set({ step }),
    updateField: (key, value) =>
        set((st) => ({ formData: { ...st.formData, [key]: value } })),
    next: () => set((st) => ({ step: Math.min(st.step + 1, 6) })),
    back: () => set((st) => ({ step: Math.max(st.step - 1, 1) })),
    reset: () => set({ step: 1, formData: {} }),
}));
