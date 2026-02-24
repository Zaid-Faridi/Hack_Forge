'use client';
import { useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useMouseTilt(intensity = 15) {
    const ref = useRef<HTMLDivElement>(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const rotateX = useSpring(rawX, { stiffness: 200, damping: 20 });
    const rotateY = useSpring(rawY, { stiffness: 200, damping: 20 });

    const onMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!ref.current) return;
            const { left, top, width, height } =
                ref.current.getBoundingClientRect();
            rawX.set(
                ((e.clientY - top - height / 2) / height) * -intensity
            );
            rawY.set(
                ((e.clientX - left - width / 2) / width) * intensity
            );
        },
        [intensity, rawX, rawY]
    );

    const onMouseLeave = useCallback(() => {
        rawX.set(0);
        rawY.set(0);
    }, [rawX, rawY]);

    return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
