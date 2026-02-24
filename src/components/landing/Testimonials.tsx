'use client';
import { useEffect, useRef } from 'react';
import { GradientText } from '@/components/ui/GradientText';

const testimonials = [
    { quote: 'HackForge helped us find the perfect hackathon and our team won first place!', author: 'Priya S.', role: 'Full-stack Developer' },
    { quote: 'The organizer dashboard made running our 500-person hackathon incredibly smooth.', author: 'Marcus K.', role: 'CTO, DevNation' },
    { quote: 'Best platform for discovering hackathons. The filtering is insanely good.', author: 'Alex W.', role: 'CS Student, MIT' },
    { quote: 'We hosted 3 hackathons through HackForge and the experience has been seamless.', author: 'Lena C.', role: 'VP Eng, CloudScale' },
    { quote: 'From registration to judging, HackForge handles it all. Highly recommended!', author: 'Raj M.', role: 'Indie Developer' },
    { quote: 'The 3D card previews and animations make it a joy to browse hackathons.', author: 'Sophie L.', role: 'UX Designer' },
];

export function Testimonials() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let animId: number;
        let pos = 0;
        const speed = 0.5;

        const animate = () => {
            pos -= speed;
            const half = el.scrollWidth / 2;
            if (Math.abs(pos) >= half) pos = 0;
            el.style.transform = `translateX(${pos}px)`;
            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <section className="py-20 overflow-hidden">
            <div className="text-center mb-12 px-6">
                <p className="text-label text-cyan mb-3">TESTIMONIALS</p>
                <h2 className="text-display-lg font-display font-bold">
                    Loved by <GradientText>Builders</GradientText>
                </h2>
            </div>

            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg to-transparent" />

                <div ref={trackRef} className="flex gap-6 whitespace-nowrap will-change-transform">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="glass-card p-6 min-w-[350px] max-w-[350px] inline-block whitespace-normal"
                        >
                            <p className="text-ink-200 text-sm mb-4 italic leading-relaxed">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div>
                                <p className="text-white text-sm font-semibold">{t.author}</p>
                                <p className="text-ink-400 text-xs">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
