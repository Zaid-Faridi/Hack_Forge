'use client';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import {
    Brain, Globe, Shield, Smartphone, Cloud, Cpu,
    Banknote, HeartPulse, GraduationCap, Gamepad2,
    Glasses, Lightbulb,
} from 'lucide-react';

const domains = [
    { icon: Brain, label: 'AI / ML', color: '#00E5FF' },
    { icon: Globe, label: 'Web3 / Blockchain', color: '#FF0090' },
    { icon: Cloud, label: 'Cloud / DevOps', color: '#0EA5E9' },
    { icon: Smartphone, label: 'Mobile', color: '#C026D3' },
    { icon: Shield, label: 'Cybersecurity', color: '#FAFF00' },
    { icon: Cpu, label: 'IoT / Hardware', color: '#10B981' },
    { icon: Banknote, label: 'FinTech', color: '#F59E0B' },
    { icon: HeartPulse, label: 'HealthTech', color: '#EF4444' },
    { icon: GraduationCap, label: 'EdTech', color: '#8B5CF6' },
    { icon: Gamepad2, label: 'Gaming', color: '#06B6D4' },
    { icon: Glasses, label: 'AR / VR', color: '#EC4899' },
    { icon: Lightbulb, label: 'Open Innovation', color: '#84CC16' },
];

export function TechDomains() {
    return (
        <section className="py-20 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-5xl mx-auto"
            >
                <motion.div variants={fadeUp} className="text-center mb-12">
                    <p className="text-label text-cyan mb-3">EXPLORE BY DOMAIN</p>
                    <h2 className="text-display-lg font-display font-bold">
                        Every <GradientText>Tech Stack</GradientText> Welcome
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {domains.map((d) => (
                        <motion.div
                            key={d.label}
                            variants={fadeUp}
                            whileHover={{ scale: 1.08, y: -4 }}
                            className="glass-card p-4 flex flex-col items-center gap-3 cursor-pointer group text-center"
                        >
                            <div
                                className="h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                                style={{ backgroundColor: `${d.color}15` }}
                            >
                                <d.icon className="h-6 w-6" style={{ color: d.color }} />
                            </div>
                            <span className="text-xs font-medium text-ink-200 group-hover:text-white transition-colors">
                                {d.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
