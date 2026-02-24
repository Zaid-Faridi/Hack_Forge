'use client';
import { motion } from 'framer-motion';
import { useMouseTilt } from '@/hooks/useMouseTilt';
import { Badge } from '@/components/ui/Badge';
import { cardReveal } from '@/lib/animations/variants';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';
import Link from 'next/link';

interface HackathonCard3DProps {
    id: string;
    title: string;
    tagline: string;
    status: string;
    mode: string;
    prize: string;
    participants: string;
    date: string;
    location: string;
    domains: string[];
    gradient: string;
}

export function HackathonCard3D(props: HackathonCard3DProps) {
    const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useMouseTilt(8);

    return (
        <motion.div
            variants={cardReveal}
            ref={ref}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="perspective-1000"
        >
            <Link href={`/hackathon/${props.id}`}>
                <div className="glass-card overflow-hidden cursor-pointer group">
                    <div className={`h-1.5 bg-gradient-to-r ${props.gradient}`} />
                    <div className="p-5 space-y-3">
                        <div className="flex gap-2">
                            <Badge variant={props.status === 'Registration Open' ? 'cyan' : 'neutral'}>
                                {props.status}
                            </Badge>
                            <Badge variant="neutral">{props.mode}</Badge>
                        </div>
                        <h3 className="text-heading-md font-semibold text-white group-hover:text-cyan transition-colors line-clamp-1">
                            {props.title}
                        </h3>
                        <p className="text-ink-300 text-sm line-clamp-2">{props.tagline}</p>
                        <div className="space-y-1.5 text-sm text-ink-300">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-3.5 w-3.5 text-ink-400" /> {props.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5 text-ink-400" /> {props.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Trophy className="h-3.5 w-3.5 text-volt" />
                                <span className="text-volt font-mono font-bold text-xs">{props.prize}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-3.5 w-3.5 text-ink-400" /> {props.participants}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-1">
                            {props.domains.map((d) => (
                                <span key={d} className="text-[11px] px-2 py-0.5 rounded-full bg-surface2 text-ink-300">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
