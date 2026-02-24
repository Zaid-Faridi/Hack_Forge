'use client';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';
import { fadeUp, staggerContainer, cardReveal } from '@/lib/animations/variants';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

const hackathons = [
    {
        id: '1',
        title: 'AI Innovation Summit 2026',
        tagline: 'Build the next breakthrough in artificial intelligence',
        status: 'Registration Open',
        mode: 'Hybrid',
        prize: '$50,000',
        participants: '2,400+',
        date: 'Mar 15-17, 2026',
        location: 'San Francisco, CA',
        domains: ['AI / ML', 'Cloud'],
        gradient: 'from-cyan/20 to-blue-600/20',
    },
    {
        id: '2',
        title: 'Web3 Builders Hackathon',
        tagline: 'Decentralize everything',
        status: 'Upcoming',
        mode: 'Online',
        prize: '$30,000',
        participants: '1,800+',
        date: 'Apr 5-7, 2026',
        location: 'Virtual',
        domains: ['Web3 / Blockchain', 'FinTech'],
        gradient: 'from-magenta/20 to-purple-600/20',
    },
    {
        id: '3',
        title: 'Green Tech Challenge',
        tagline: 'Code for a sustainable future',
        status: 'Registration Open',
        mode: 'In-Person',
        prize: '$25,000',
        participants: '900+',
        date: 'Apr 20-22, 2026',
        location: 'Berlin, DE',
        domains: ['IoT / Hardware', 'Cloud'],
        gradient: 'from-emerald-500/20 to-cyan/20',
    },
    {
        id: '4',
        title: 'CyberSec CTF 2026',
        tagline: 'Capture the flag. Save the world.',
        status: 'Upcoming',
        mode: 'Online',
        prize: '$15,000',
        participants: '3,200+',
        date: 'May 1-3, 2026',
        location: 'Virtual',
        domains: ['Cybersecurity'],
        gradient: 'from-volt/20 to-amber-500/20',
    },
];

export function FeaturedHackathons() {
    return (
        <section className="py-20 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-7xl mx-auto"
            >
                <motion.div variants={fadeUp} className="text-center mb-12">
                    <p className="text-label text-cyan mb-3">FEATURED EVENTS</p>
                    <h2 className="text-display-lg font-display font-bold">
                        Trending <GradientText>Hackathons</GradientText>
                    </h2>
                </motion.div>

                <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                    {hackathons.map((h) => (
                        <motion.div
                            key={h.id}
                            variants={cardReveal}
                            className="glass-card min-w-[340px] max-w-[340px] snap-center flex-shrink-0 overflow-hidden group cursor-pointer"
                        >
                            {/* Top gradient strip */}
                            <div className={`h-2 bg-gradient-to-r ${h.gradient}`} />
                            <div className="p-6 space-y-4">
                                <div className="flex gap-2">
                                    <Badge variant={h.status === 'Registration Open' ? 'cyan' : 'neutral'}>
                                        {h.status}
                                    </Badge>
                                    <Badge variant="neutral">{h.mode}</Badge>
                                </div>
                                <h3 className="text-heading-md font-semibold text-white group-hover:text-cyan transition-colors">
                                    {h.title}
                                </h3>
                                <p className="text-ink-300 text-sm">{h.tagline}</p>
                                <div className="space-y-2 text-sm text-ink-300">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-ink-400" />
                                        {h.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-ink-400" />
                                        {h.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Trophy className="h-4 w-4 text-volt" />
                                        <span className="text-volt font-mono font-bold">{h.prize}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-ink-400" />
                                        {h.participants} registered
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {h.domains.map((d) => (
                                        <span
                                            key={d}
                                            className="text-xs px-2 py-0.5 rounded-full bg-surface2 text-ink-300"
                                        >
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
