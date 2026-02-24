'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/animations/gsap';

export function useGSAPTimeline() {
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline();
        return () => {
            tl.current?.kill();
        };
    }, []);

    return tl;
}
