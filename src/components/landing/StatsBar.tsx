'use client';
import { motion } from 'framer-motion';
import { CountUp } from '@/components/ui/CountUp';
import { GlowDivider } from '@/components/ui/GlowDivider';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';

const stats = [
    { value: 2500, label: 'Hackathons Hosted', suffix: '+' },
    { value: 150000, label: 'Participants', suffix: '+' },
    { value: 12, label: 'Million in Prizes', prefix: '$', suffix: 'M+' },
    { value: 95, label: 'Countries', suffix: '+' },
];

export function StatsBar() {
    return (
        <section className="relative py-20">
            <GlowDivider className="mb-20" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
                {stats.map((stat) => (
                    <motion.div
                        key={stat.label}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <div className="text-display-lg font-display font-bold text-white mb-2">
                            <CountUp
                                end={stat.value}
                                prefix={stat.prefix || ''}
                                suffix={stat.suffix || ''}
                            />
                        </div>
                        <p className="text-ink-300 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
            <GlowDivider className="mt-20" />
        </section>
    );
}
