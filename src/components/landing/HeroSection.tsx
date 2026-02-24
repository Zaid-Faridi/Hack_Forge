'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { SplitCTA } from './SplitCTA';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import { NoiseBg } from '@/components/ui/NoiseBg';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

export function HeroSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-hero-mesh">
            <HeroScene />
            <NoiseBg opacity={0.04} />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
            >
                <motion.p
                    variants={fadeUp}
                    className="text-label text-cyan mb-4 tracking-widest"
                >
                    THE HACKATHON PLATFORM
                </motion.p>
                <motion.h1
                    variants={fadeUp}
                    className="font-display text-display-xl text-white mb-6"
                >
                    Build the Future.
                    <br />
                    <GradientText>Host the Challenge.</GradientText>
                </motion.h1>
                <motion.p
                    variants={fadeUp}
                    className="text-ink-200 text-body-lg max-w-2xl mb-10"
                >
                    Discover world-class hackathons, assemble your dream team, and
                    build projects that change everything. Or host your own.
                </motion.p>
                <motion.div variants={fadeUp}>
                    <SplitCTA />
                </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-10" />
        </section>
    );
}
