'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { NAV_LINKS } from '@/lib/utils/constants';

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40">
            <div className="glass-card mx-4 mt-4 rounded-2xl border-ink-400/30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Hexagon className="h-7 w-7 text-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-all" />
                        <span className="font-display text-xl font-bold text-white">
                            HackForge
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                                    pathname === link.href
                                        ? 'text-cyan bg-cyan/10'
                                        : 'text-ink-200 hover:text-white hover:bg-surface2'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" size="sm">
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="cyan" size="sm">
                                Get Started <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-ink-200 hover:text-white transition-colors"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass-card mx-4 mt-2 p-4 rounded-2xl"
                    >
                        <div className="flex flex-col gap-2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                                        pathname === link.href
                                            ? 'text-cyan bg-cyan/10'
                                            : 'text-ink-200 hover:text-white hover:bg-surface2'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-ink-400/30 pt-3 mt-2 flex flex-col gap-2">
                                <Link href="/login" onClick={() => setMobileOpen(false)}>
                                    <Button variant="ghost" fullWidth>Sign in</Button>
                                </Link>
                                <Link href="/login" onClick={() => setMobileOpen(false)}>
                                    <Button variant="cyan" fullWidth>Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
