'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Building2 } from 'lucide-react';

export function SplitCTA() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/explore">
                <motion.div
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,229,255,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card px-8 py-4 flex items-center gap-3 cursor-pointer group"
                >
                    <div className="h-10 w-10 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                        <Rocket className="h-5 w-5 text-cyan" />
                    </div>
                    <div className="text-left">
                        <p className="text-white font-semibold">Participate</p>
                        <p className="text-ink-300 text-sm">Find your next hackathon</p>
                    </div>
                </motion.div>
            </Link>

            <Link href="/login">
                <motion.div
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,0,144,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card glass-card-magenta px-8 py-4 flex items-center gap-3 cursor-pointer group"
                >
                    <div className="h-10 w-10 rounded-xl bg-magenta/10 flex items-center justify-center group-hover:bg-magenta/20 transition-colors">
                        <Building2 className="h-5 w-5 text-magenta" />
                    </div>
                    <div className="text-left">
                        <p className="text-white font-semibold">Host</p>
                        <p className="text-ink-300 text-sm">Create your hackathon</p>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
