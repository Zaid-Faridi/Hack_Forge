'use client';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { NoiseBg } from '@/components/ui/NoiseBg';
import { Calendar, MapPin, Trophy, Users, Clock, Globe, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

// Mock hackathon detail data
const hackathon = {
    title: 'AI Innovation Summit 2026',
    tagline: 'Build the next breakthrough in artificial intelligence',
    status: 'Registration Open',
    mode: 'Hybrid',
    prize: '$50,000',
    participants: '2,400+',
    date: 'Mar 15-17, 2026',
    location: 'San Francisco, CA',
    country: 'United States',
    domains: ['AI / ML', 'Cloud', 'Data Science'],
    description: 'Join the world\'s most ambitious AI hackathon. Over 48 hours, teams of 2-5 will build cutting-edge AI solutions to real-world problems. With $50,000 in prizes, mentorship from industry leaders, and the chance to change the world — this is your moment.',
    rules: ['Teams of 2-5 members', 'All code must be written during the event', 'Open source libraries allowed', 'Must use at least one AI/ML model'],
    timeline: [
        { time: 'Mar 15, 10AM', event: 'Opening Ceremony' },
        { time: 'Mar 15, 12PM', event: 'Hacking Begins' },
        { time: 'Mar 16, 6PM', event: 'Checkpoint & Mentoring' },
        { time: 'Mar 17, 12PM', event: 'Submissions Due' },
        { time: 'Mar 17, 3PM', event: 'Demo Day & Awards' },
    ],
    prizes: [
        { place: '1st Place', amount: '$25,000', extra: '+ Cloud Credits' },
        { place: '2nd Place', amount: '$15,000', extra: '' },
        { place: '3rd Place', amount: '$10,000', extra: '' },
    ],
};

export default function HackathonDetailPage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative max-w-5xl mx-auto px-6 py-8"
        >
            <NoiseBg opacity={0.02} />

            {/* Back link */}
            <motion.div variants={fadeUp} className="mb-6">
                <Link href="/explore" className="text-sm text-ink-300 hover:text-cyan transition-colors inline-flex items-center gap-1">
                    <ArrowLeft className="h-3.5 w-3.5" /> Back to Explore
                </Link>
            </motion.div>

            {/* Header */}
            <motion.div variants={fadeUp} className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge variant="cyan">{hackathon.status}</Badge>
                    <Badge variant="neutral">{hackathon.mode}</Badge>
                    <Badge variant="neutral"><Globe className="h-3 w-3" /> {hackathon.country}</Badge>
                </div>
                <h1 className="text-display-lg font-display font-bold text-white mb-3">
                    {hackathon.title}
                </h1>
                <p className="text-ink-200 text-body-lg">{hackathon.tagline}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
                {/* Main content */}
                <motion.div variants={fadeUp} className="space-y-8">
                    <Card className="p-6">
                        <h2 className="text-heading-lg font-semibold text-white mb-4">About</h2>
                        <p className="text-ink-300 text-body-md leading-relaxed">{hackathon.description}</p>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-heading-lg font-semibold text-white mb-4">Rules</h2>
                        <ul className="space-y-2">
                            {hackathon.rules.map((r, i) => (
                                <li key={i} className="flex items-start gap-2 text-ink-300 text-sm">
                                    <span className="text-cyan mt-0.5">•</span> {r}
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-heading-lg font-semibold text-white mb-4">Timeline</h2>
                        <div className="space-y-4">
                            {hackathon.timeline.map((t, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="h-3 w-3 rounded-full bg-cyan" />
                                        {i < hackathon.timeline.length - 1 && <div className="w-0.5 h-8 bg-ink-400/30" />}
                                    </div>
                                    <div>
                                        <p className="text-sm text-ink-100 font-medium">{t.event}</p>
                                        <p className="text-xs text-ink-400">{t.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-heading-lg font-semibold text-white mb-4">
                            <GradientText>Prizes</GradientText>
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            {hackathon.prizes.map((p, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-surface2">
                                    <Trophy className={`h-6 w-6 mx-auto mb-2 ${i === 0 ? 'text-amber-400' : i === 1 ? 'text-ink-200' : 'text-orange-400'}`} />
                                    <p className="text-xs text-ink-300 mb-1">{p.place}</p>
                                    <p className="text-volt font-mono font-bold text-lg">{p.amount}</p>
                                    {p.extra && <p className="text-[11px] text-ink-400 mt-1">{p.extra}</p>}
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* Sidebar */}
                <motion.div variants={fadeUp} className="space-y-6">
                    <Card className="p-6 sticky top-28">
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 text-sm text-ink-200">
                                <Calendar className="h-4 w-4 text-ink-400" /> {hackathon.date}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-ink-200">
                                <MapPin className="h-4 w-4 text-ink-400" /> {hackathon.location}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-ink-200">
                                <Users className="h-4 w-4 text-ink-400" /> {hackathon.participants} registered
                            </div>
                            <div className="flex items-center gap-3">
                                <Trophy className="h-4 w-4 text-volt" />
                                <span className="text-volt font-mono font-bold">{hackathon.prize}</span>
                            </div>
                        </div>
                        <Button variant="cyan" fullWidth>Register Now</Button>
                        <Button variant="ghost" fullWidth className="mt-2">
                            <Share2 className="h-4 w-4" /> Share
                        </Button>
                        <div className="mt-6">
                            <p className="text-xs text-ink-400 mb-2">Tech Domains</p>
                            <div className="flex flex-wrap gap-1.5">
                                {hackathon.domains.map(d => (
                                    <span key={d} className="text-xs px-2 py-0.5 rounded-full bg-surface2 text-ink-300">{d}</span>
                                ))}
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
