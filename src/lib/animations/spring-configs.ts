// Spring configs for Framer Motion
export const springConfig = { stiffness: 200, damping: 20 };
export const bouncySpring = { stiffness: 400, damping: 15 };
export const smoothSpring = { stiffness: 150, damping: 25 };
export const snappySpring = { stiffness: 500, damping: 30 };

// Easing presets
export const easings = {
    smooth: [0.16, 1, 0.3, 1] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
    sharp: [0.4, 0, 0.2, 1] as const,
};
