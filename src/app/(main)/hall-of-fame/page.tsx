'use client';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { fadeUp, staggerContainer, cardReveal } from '@/lib/animations/variants';
import { Trophy, Medal, Award, Crown, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { NoiseBg } from '@/components/ui/NoiseBg';

const winners = [
    { rank: 1, team: 'Neural Nexus', project: 'DeepMedic AI', hackathon: 'AI Innovation Summit 2025', prize: '$25,000', members: 4, tech: ['Python', 'TensorFlow', 'React'], description: 'AI-powered diagnostic tool achieving 96% accuracy in early disease detection.' },
    { rank: 2, team: 'ChainCraft', project: 'DeFi Shield', hackathon: 'Web3 Builders 2025', prize: '$18,000', members: 3, tech: ['Solidity', 'React', 'Node.js'], description: 'Smart contract security auditor that prevents 99% of common DeFi exploits.' },
    { rank: 3, team: 'GreenBits', project: 'CarbonTrack', hackathon: 'Green Tech Challenge 2025', prize: '$12,000', members: 5, tech: ['Next.js', 'Python', 'IoT'], description: 'Real-time carbon footprint tracker with IoT sensor integration.' },
    { rank: 4, team: 'PixelForge', project: 'ARchitect', hackathon: 'XR Hackathon 2025', prize: '$10,000', members: 4, tech: ['Unity', 'C#', 'ARKit'], description: 'AR-powered interior design tool that lets you visualize furniture in real-time.' },
    { rank: 5, team: 'DataDrift', project: 'QuantumSort', hackathon: 'Algorithm Wars 2025', prize: '$8,000', members: 2, tech: ['Rust', 'WASM', 'React'], description: 'Novel sorting algorithm with O(n·√log n) average complexity.' },
    { rank: 6, team: 'EduFlow', project: 'LearnPath AI', hackathon: 'EdTech Innovate 2025', prize: '$7,500', members: 3, tech: ['Next.js', 'GPT-4', 'PostgreSQL'], description: 'Personalized learning path generator using adaptive AI tutoring.' },
];

const rankIcons = [Crown, Trophy, Medal, Award];
const rankColors = ['text-amber-400', 'text-cyan', 'text-orange-400', 'text-ink-300'];
const rankBgs = ['bg-amber-400/10', 'bg-cyan/10', 'bg-orange-400/10', 'bg-surface2'];

export default function HallOfFamePage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative max-w-7xl mx-auto px-6 py-8"
        >
            <NoiseBg opacity={0.02} />

            <motion.div variants={fadeUp} className="text-center mb-16">
                <p className="text-label text-cyan mb-3">HALL OF FAME</p>
                <h1 className="text-display-xl font-display font-bold mb-4">
                    Where <GradientText>Legends</GradientText> Live
                </h1>
                <p className="text-ink-300 text-body-lg max-w-xl mx-auto">
                    Celebrating the most innovative and impactful projects built at hackathons worldwide.
                </p>
            </motion.div>

            {/* Featured Winner */}
            <motion.div variants={fadeUp} className="mb-12">
                <div className="glass-card overflow-hidden relative group">
                    <div className="h-2 bg-gradient-to-r from-amber-400 via-cyan to-magenta" />
                    <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="h-20 w-20 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                                <Crown className="h-10 w-10 text-amber-400" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3 flex-wrap">
                                <Badge variant="volt">🏆 Grand Champion</Badge>
                                <Badge variant="neutral">{winners[0].hackathon}</Badge>
                            </div>
                            <h2 className="text-display-md font-display font-bold text-white">
                                {winners[0].project}
                            </h2>
                            <p className="text-ink-200">
                                by <span className="text-cyan font-semibold">{winners[0].team}</span> · {winners[0].members} members
                            </p>
                            <p className="text-ink-300 text-body-md leading-relaxed">
                                {winners[0].description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {winners[0].tech.map(t => (
                                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-surface2 text-ink-200 font-mono">{t}</span>
                                ))}
                            </div>
                            <p className="text-volt font-mono font-bold text-xl">{winners[0].prize}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Grid of other winners */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {winners.slice(1).map((w, i) => {
                    const RankIcon = rankIcons[Math.min(i + 1, 3)];
                    return (
                        <motion.div key={w.team} variants={cardReveal} className="glass-card overflow-hidden group cursor-pointer">
                            <div className={`h-1.5 bg-gradient-to-r ${i === 0 ? 'from-cyan to-blue-500' : i === 1 ? 'from-orange-400 to-amber-500' : 'from-ink-400 to-ink-300'}`} />
                            <div className="p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className={`h-10 w-10 rounded-xl ${rankBgs[Math.min(i + 1, 3)]} flex items-center justify-center`}>
                                        <RankIcon className={`h-5 w-5 ${rankColors[Math.min(i + 1, 3)]}`} />
                                    </div>
                                    <span className="text-xs text-ink-400">{w.hackathon}</span>
                                </div>
                                <h3 className="text-heading-md font-semibold text-white group-hover:text-cyan transition-colors">
                                    {w.project}
                                </h3>
                                <p className="text-sm text-ink-300">
                                    by <span className="text-ink-200 font-medium">{w.team}</span>
                                </p>
                                <p className="text-ink-300 text-sm line-clamp-2">{w.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {w.tech.map(t => (
                                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-surface2 text-ink-300 font-mono">{t}</span>
                                    ))}
                                </div>
                                <p className="text-volt font-mono font-bold">{w.prize}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
