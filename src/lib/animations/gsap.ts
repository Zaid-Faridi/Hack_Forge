'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once, guard against SSR
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Infinite horizontal prize marquee (Hall of Fame)
export function initPrizeMarquee(el: HTMLElement, speed = 30) {
    const totalWidth = el.scrollWidth / 2;
    return gsap.to(el, {
        x: -totalWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
        onRepeat() {
            gsap.set(el, { x: 0 });
        },
    });
}

// Scroll-triggered character reveal (HOF Hero heading)
export function initCharReveal(chars: HTMLElement[], trigger: HTMLElement) {
    return gsap.from(chars, {
        y: 120,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger, start: 'top 80%', once: true },
    });
}

// Generic scroll-reveal for any element
export function initScrollReveal(el: HTMLElement, delay = 0) {
    return gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
}
