'use client';
import { motion } from 'framer-motion';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { cn } from '@/lib/utils/cn';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    strength?: number;
}

export function MagneticButton({
    className,
    children,
    strength = 0.3,
    ...props
}: MagneticButtonProps) {
    const { ref, springX, springY, onMouseMove, onMouseLeave } = useMagneticHover(strength);

    // Disable on touch devices
    const isTouch = typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0;

    if (isTouch) {
        return (
            <button className={className} {...props}>
                {children}
            </button>
        );
    }

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="inline-block"
        >
            <button className={cn(className)} {...props}>
                {children}
            </button>
        </motion.div>
    );
}
