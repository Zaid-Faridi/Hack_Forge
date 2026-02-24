'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    User,
    Trophy,
    Plus,
    Hexagon,
    Settings,
    LogOut,
    ChevronLeft,
    Layers,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useUIStore } from '@/stores/uiStore';

const participantLinks = [
    { href: '/dashboard/participant', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/participant/profile', label: 'Profile', icon: User },
    { href: '/dashboard/participant/my-hackathons', label: 'My Hackathons', icon: Trophy },
];

const organizerLinks = [
    { href: '/dashboard/organizer', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/organizer/create', label: 'Create Hackathon', icon: Plus },
    { href: '/dashboard/organizer/hackathons', label: 'My Events', icon: Layers },
];

interface DashboardSidebarProps {
    role?: 'PARTICIPANT' | 'ORGANIZER';
}

export function DashboardSidebar({ role = 'PARTICIPANT' }: DashboardSidebarProps) {
    const pathname = usePathname();
    const { sidebarOpen, toggleSidebar } = useUIStore();
    const links = role === 'ORGANIZER' ? organizerLinks : participantLinks;

    return (
        <motion.aside
            animate={{ width: sidebarOpen ? 260 : 72 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-0 h-screen bg-surface1 border-r border-ink-400/20 z-30 flex flex-col"
        >
            {/* Logo area */}
            <div className="h-16 flex items-center px-4 gap-3 border-b border-ink-400/20">
                <Hexagon className="h-7 w-7 text-cyan flex-shrink-0" />
                {sidebarOpen && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-display text-lg font-bold text-white whitespace-nowrap"
                    >
                        HackForge
                    </motion.span>
                )}
            </div>

            {/* Nav links */}
            <nav className="flex-1 py-4 px-3 space-y-1">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                                isActive
                                    ? 'bg-cyan/10 text-cyan'
                                    : 'text-ink-300 hover:text-white hover:bg-surface2'
                            )}
                        >
                            <link.icon className={cn('h-5 w-5 flex-shrink-0', isActive && 'text-cyan')} />
                            {sidebarOpen && <span className="whitespace-nowrap">{link.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom actions */}
            <div className="p-3 space-y-1 border-t border-ink-400/20">
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-ink-300 hover:text-white hover:bg-surface2 transition-all w-full">
                    <Settings className="h-5 w-5 flex-shrink-0" />
                    {sidebarOpen && <span>Settings</span>}
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-ink-300 hover:text-magenta hover:bg-magenta/5 transition-all w-full">
                    <LogOut className="h-5 w-5 flex-shrink-0" />
                    {sidebarOpen && <span>Sign Out</span>}
                </button>
            </div>

            {/* Collapse toggle */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-20 h-6 w-6 rounded-full bg-surface2 border border-ink-400/30 flex items-center justify-center text-ink-300 hover:text-white transition-colors"
            >
                <ChevronLeft className={cn('h-3 w-3 transition-transform', !sidebarOpen && 'rotate-180')} />
            </button>
        </motion.aside>
    );
}
