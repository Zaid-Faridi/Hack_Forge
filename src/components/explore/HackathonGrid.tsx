'use client';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations/variants';
import { HackathonCard3D } from './HackathonCard3D';

const mockHackathons = [
    { id: '1', title: 'AI Innovation Summit 2026', tagline: 'Build the next AI breakthrough', status: 'Registration Open', mode: 'Hybrid', prize: '$50,000', participants: '2,400+', date: 'Mar 15-17, 2026', location: 'San Francisco', domains: ['AI / ML', 'Cloud'], gradient: 'from-cyan/20 to-blue-600/20' },
    { id: '2', title: 'Web3 Builders Hackathon', tagline: 'Decentralize everything', status: 'Upcoming', mode: 'Online', prize: '$30,000', participants: '1,800+', date: 'Apr 5-7, 2026', location: 'Virtual', domains: ['Web3', 'FinTech'], gradient: 'from-magenta/20 to-purple-600/20' },
    { id: '3', title: 'Green Tech Challenge', tagline: 'Code for a sustainable future', status: 'Registration Open', mode: 'In-Person', prize: '$25,000', participants: '900+', date: 'Apr 20-22, 2026', location: 'Berlin', domains: ['IoT', 'Cloud'], gradient: 'from-emerald-500/20 to-cyan/20' },
    { id: '4', title: 'CyberSec CTF 2026', tagline: 'Capture the flag', status: 'Upcoming', mode: 'Online', prize: '$15,000', participants: '3,200+', date: 'May 1-3, 2026', location: 'Virtual', domains: ['Cybersecurity'], gradient: 'from-volt/20 to-amber-500/20' },
    { id: '5', title: 'Mobile Dev Sprint', tagline: 'Ship an app in 48 hours', status: 'In Progress', mode: 'Online', prize: '$20,000', participants: '1,100+', date: 'Mar 22-24, 2026', location: 'Virtual', domains: ['Mobile'], gradient: 'from-purple-500/20 to-pink-500/20' },
    { id: '6', title: 'HealthTech Innovate', tagline: 'Tech for better health', status: 'Registration Open', mode: 'Hybrid', prize: '$40,000', participants: '750+', date: 'May 10-12, 2026', location: 'London', domains: ['HealthTech', 'AI / ML'], gradient: 'from-rose-500/20 to-red-500/20' },
];

export function HackathonGrid() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
            {mockHackathons.map((h) => (
                <HackathonCard3D key={h.id} {...h} />
            ))}
        </motion.div>
    );
}
