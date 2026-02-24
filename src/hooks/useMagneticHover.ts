'use client';
import { useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useMagneticHover(strength = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 15 });
    const springY = useSpring(y, { stiffness: 200, damping: 15 });

    const onMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            x.set(dx * strength);
            y.set(dy * strength);
        },
        [strength, x, y]
    );

    const onMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return { ref, springX, springY, onMouseMove, onMouseLeave };
}
