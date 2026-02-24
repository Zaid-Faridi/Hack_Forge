import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: { DEFAULT: '#0A0F1E', surface1: '#141B2D', surface2: '#1E2840' },
                cyan: { DEFAULT: '#00E5FF', dim: '#00B8CC', glow: 'rgba(0,229,255,0.25)' },
                magenta: { DEFAULT: '#FF0090', dim: '#CC0073', glow: 'rgba(255,0,144,0.25)' },
                volt: { DEFAULT: '#FAFF00', dim: '#C8CC00' },
                ink: { 100: '#F0F4FF', 200: '#B8C4E0', 300: '#6B7A99', 400: '#3A4560' },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-syne)', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.1)',
                'glow-magenta': '0 0 20px rgba(255,0,144,0.4), 0 0 60px rgba(255,0,144,0.1)',
                'glow-volt': '0 0 20px rgba(250,255,0,0.35)',
                glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            },
            backgroundImage: {
                'hero-mesh':
                    'radial-gradient(ellipse at 20% 50%, #0D1F3C, #0A0F1E 60%), radial-gradient(ellipse at 80% 20%, #1A0A2E, transparent 60%)',
            },
            animation: {
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
            },
            keyframes: {
                glowPulse: {
                    '0%,100%': { boxShadow: '0 0 20px rgba(0,229,255,0.3)' },
                    '50%': { boxShadow: '0 0 50px rgba(0,229,255,0.7)' },
                },
                float: {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
} satisfies Config;
