import { create } from 'zustand';

interface UIState {
    sidebarOpen: boolean;
    cursorVariant: 'default' | 'hover' | 'click';
    isModalOpen: boolean;
    modalContent: React.ReactNode | null;
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
    setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
    openModal: (content: React.ReactNode) => void;
    closeModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    sidebarOpen: true,
    cursorVariant: 'default',
    isModalOpen: false,
    modalContent: null,
    toggleSidebar: () => set((st) => ({ sidebarOpen: !st.sidebarOpen })),
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
    setCursorVariant: (variant) => set({ cursorVariant: variant }),
    openModal: (content) => set({ isModalOpen: true, modalContent: content }),
    closeModal: () => set({ isModalOpen: false, modalContent: null }),
}));
