'use client';
import { useEffect, useRef } from 'react';
import { initScrollReveal } from '@/lib/animations/gsap';

export function useScrollReveal(delay = 0) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const anim = initScrollReveal(ref.current, delay);
        return () => {
            anim.kill();
        };
    }, [delay]);

    return ref;
}
