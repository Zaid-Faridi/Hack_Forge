'use client';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { useUIStore } from '@/stores/uiStore';
import { cn } from '@/lib/utils/cn';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const sidebarOpen = useUIStore((s) => s.sidebarOpen);

    return (
        <div className="min-h-screen bg-bg">
            <DashboardSidebar />
            <main
                className={cn(
                    'transition-all duration-300 min-h-screen',
                    sidebarOpen ? 'ml-[260px]' : 'ml-[72px]'
                )}
            >
                {/* Top header bar */}
                <header className="h-16 border-b border-ink-400/20 flex items-center px-8">
                    <h2 className="text-heading-lg font-semibold text-ink-100">Dashboard</h2>
                </header>
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}
