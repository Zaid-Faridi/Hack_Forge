import Link from 'next/link';
import { Hexagon, Github, Twitter } from 'lucide-react';
import { GlowDivider } from '@/components/ui/GlowDivider';

export function Footer() {
    return (
        <footer className="relative mt-32">
            <GlowDivider />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Hexagon className="h-6 w-6 text-cyan" />
                            <span className="font-display text-lg font-bold text-white">
                                HackForge
                            </span>
                        </Link>
                        <p className="text-ink-300 text-sm leading-relaxed">
                            The premier platform for hackathon discovery, hosting, and
                            showcasing winning projects.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <a href="#" className="p-2 rounded-xl bg-surface1 text-ink-300 hover:text-cyan hover:bg-surface2 transition-all">
                                <Github className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 rounded-xl bg-surface1 text-ink-300 hover:text-cyan hover:bg-surface2 transition-all">
                                <Twitter className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-label text-ink-200 mb-4">Platform</h4>
                        <ul className="space-y-3">
                            {['Explore Hackathons', 'Hall of Fame', 'Host a Hackathon', 'For Participants'].map((item) => (
                                <li key={item}>
                                    <Link href="/explore" className="text-sm text-ink-300 hover:text-cyan transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-label text-ink-200 mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {['Documentation', 'API Reference', 'Blog', 'Community'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-ink-300 hover:text-cyan transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-label text-ink-200 mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-ink-300 hover:text-cyan transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-ink-400/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-ink-400">
                        © {new Date().getFullYear()} HackForge. All rights reserved.
                    </p>
                    <p className="text-xs text-ink-400">
                        Built with Next.js, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
