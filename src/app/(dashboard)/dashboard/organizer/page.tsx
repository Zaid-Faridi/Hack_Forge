'use client';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import { GradientText } from '@/components/ui/GradientText';
import { Card } from '@/components/ui/Card';
import { CountUp } from '@/components/ui/CountUp';
import { Button } from '@/components/ui/Button';
import { Users, Layers, DollarSign, Eye, Plus } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { icon: Layers, label: 'Events Created', value: 4, color: 'text-cyan' },
    { icon: Users, label: 'Total Participants', value: 5200, color: 'text-magenta' },
    { icon: DollarSign, label: 'Prize Pool Managed', value: 125000, prefix: '$', color: 'text-volt' },
    { icon: Eye, label: 'Total Views', value: 42000, color: 'text-blue-400' },
];

export default function OrganizerDashboard() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={fadeUp} className="flex items-center justify-between">
                <div>
                    <h1 className="text-display-md font-display font-bold mb-1">
                        <GradientText from="magenta" to="cyan">Organizer Hub</GradientText>
                    </h1>
                    <p className="text-ink-300">Manage your hackathons and track performance.</p>
                </div>
                <Link href="/dashboard/organizer/create">
                    <Button variant="magenta">
                        <Plus className="h-4 w-4" /> Create Hackathon
                    </Button>
                </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map(s => (
                    <motion.div key={s.label} variants={fadeUp}>
                        <Card className="p-5 text-center">
                            <s.icon className={`h-6 w-6 mx-auto mb-3 ${s.color}`} />
                            <div className="text-heading-xl font-bold text-white mb-1">
                                <CountUp end={s.value} prefix={s.prefix || ''} />
                            </div>
                            <p className="text-ink-300 text-sm">{s.label}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp}>
                <Card className="p-6">
                    <h2 className="text-heading-lg font-semibold text-white mb-4">Your Events</h2>
                    <div className="space-y-3">
                        {[
                            { name: 'AI Innovation Summit 2026', status: 'Live', participants: 2400 },
                            { name: 'Web3 Builders Hackathon', status: 'Draft', participants: 0 },
                            { name: 'Internal Dev Sprint', status: 'Ended', participants: 350 },
                        ].map((e, i) => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-ink-400/20 last:border-0">
                                <div>
                                    <p className="text-sm text-ink-100 font-medium">{e.name}</p>
                                    <p className="text-xs text-ink-400">{e.participants} participants</p>
                                </div>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${e.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400' : e.status === 'Draft' ? 'bg-amber-500/10 text-amber-400' : 'bg-surface2 text-ink-300'}`}>
                                    {e.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
}
