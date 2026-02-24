'use client';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import { GradientText } from '@/components/ui/GradientText';
import { Card } from '@/components/ui/Card';
import { CountUp } from '@/components/ui/CountUp';
import { Trophy, Calendar, Star, TrendingUp } from 'lucide-react';

const stats = [
    { icon: Trophy, label: 'Hackathons Joined', value: 7, color: 'text-volt' },
    { icon: Star, label: 'Wins', value: 2, color: 'text-amber-400' },
    { icon: Calendar, label: 'Upcoming', value: 3, color: 'text-cyan' },
    { icon: TrendingUp, label: 'Skills Added', value: 12, color: 'text-magenta' },
];

export default function ParticipantDashboard() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={fadeUp}>
                <h1 className="text-display-md font-display font-bold mb-1">
                    Welcome back, <GradientText>Hacker!</GradientText>
                </h1>
                <p className="text-ink-300">Here&apos;s what&apos;s happening with your hackathon journey.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map(s => (
                    <motion.div key={s.label} variants={fadeUp}>
                        <Card className="p-5 text-center">
                            <s.icon className={`h-6 w-6 mx-auto mb-3 ${s.color}`} />
                            <div className="text-heading-xl font-bold text-white mb-1">
                                <CountUp end={s.value} />
                            </div>
                            <p className="text-ink-300 text-sm">{s.label}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp}>
                <Card className="p-6">
                    <h2 className="text-heading-lg font-semibold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-3">
                        {[
                            { text: 'Registered for AI Innovation Summit 2026', time: '2 hours ago' },
                            { text: 'Submitted project for Web3 Builders', time: '3 days ago' },
                            { text: 'Joined team "Neural Nexus"', time: '1 week ago' },
                        ].map((a, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-ink-400/20 last:border-0">
                                <span className="text-sm text-ink-200">{a.text}</span>
                                <span className="text-xs text-ink-400">{a.time}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
}
