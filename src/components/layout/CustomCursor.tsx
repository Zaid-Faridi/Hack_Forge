'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [isTouch, setIsTouch] = useState(true);

    useEffect(() => {
        // Only show on non-touch devices
        if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
            setIsTouch(true);
            return;
        }
        setIsTouch(false);

        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };
        const leave = () => setVisible(false);

        window.addEventListener('mousemove', move);
        document.addEventListener('mouseleave', leave);
        return () => {
            window.removeEventListener('mousemove', move);
            document.removeEventListener('mouseleave', leave);
        };
    }, []);

    if (isTouch) return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
            animate={{
                x: pos.x - 16,
                y: pos.y - 16,
                opacity: visible ? 1 : 0,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        >
            <div className="h-8 w-8 rounded-full border-2 border-cyan" />
        </motion.div>
    );
}
