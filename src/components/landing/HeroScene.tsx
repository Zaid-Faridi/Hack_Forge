'use client';
import { useEffect, useRef } from 'react';

export default function HeroScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let time = 0;

        const stars: { x: number; y: number; r: number; speed: number; alpha: number }[] = [];
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * 2000,
                y: Math.random() * 2000,
                r: Math.random() * 1.5 + 0.3,
                speed: Math.random() * 0.3 + 0.05,
                alpha: Math.random() * 0.8 + 0.2,
            });
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const animate = () => {
            time += 0.005;
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            // Draw stars
            stars.forEach((s) => {
                const twinkle = Math.sin(time * 2 + s.x) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(s.x % w, s.y % h, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * twinkle})`;
                ctx.fill();
                s.y -= s.speed;
                if (s.y < 0) s.y = h;
            });

            // Orb 1 — Cyan
            const cx1 = w * 0.65 + Math.sin(time * 0.7) * 80;
            const cy1 = h * 0.4 + Math.cos(time * 0.5) * 60;
            const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, 280);
            grad1.addColorStop(0, 'rgba(0, 229, 255, 0.15)');
            grad1.addColorStop(0.5, 'rgba(0, 229, 255, 0.05)');
            grad1.addColorStop(1, 'rgba(0, 229, 255, 0)');
            ctx.fillStyle = grad1;
            ctx.fillRect(0, 0, w, h);

            // Orb 2 — Magenta
            const cx2 = w * 0.3 + Math.cos(time * 0.6) * 60;
            const cy2 = h * 0.6 + Math.sin(time * 0.8) * 50;
            const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, 220);
            grad2.addColorStop(0, 'rgba(255, 0, 144, 0.12)');
            grad2.addColorStop(0.5, 'rgba(255, 0, 144, 0.04)');
            grad2.addColorStop(1, 'rgba(255, 0, 144, 0)');
            ctx.fillStyle = grad2;
            ctx.fillRect(0, 0, w, h);

            // Wireframe icosahedron-like shape (cyan)
            const segments = 12;
            const radius = 120 + Math.sin(time) * 10;
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
            ctx.lineWidth = 1;
            for (let i = 0; i < segments; i++) {
                const a1 = (i / segments) * Math.PI * 2 + time * 0.3;
                const a2 = ((i + 4) / segments) * Math.PI * 2 + time * 0.3;
                const distort = Math.sin(time * 2 + i) * 15;
                ctx.beginPath();
                ctx.moveTo(
                    cx1 + Math.cos(a1) * (radius + distort),
                    cy1 + Math.sin(a1) * (radius + distort)
                );
                ctx.lineTo(
                    cx1 + Math.cos(a2) * (radius - distort * 0.5),
                    cy1 + Math.sin(a2) * (radius - distort * 0.5)
                );
                ctx.stroke();
            }

            // Wireframe shape (magenta)
            ctx.strokeStyle = 'rgba(255, 0, 144, 0.10)';
            const radius2 = 90 + Math.cos(time * 1.2) * 8;
            for (let i = 0; i < 10; i++) {
                const a1 = (i / 10) * Math.PI * 2 - time * 0.25;
                const a2 = ((i + 3) / 10) * Math.PI * 2 - time * 0.25;
                const distort = Math.cos(time * 1.5 + i) * 12;
                ctx.beginPath();
                ctx.moveTo(
                    cx2 + Math.cos(a1) * (radius2 + distort),
                    cy2 + Math.sin(a1) * (radius2 + distort)
                );
                ctx.lineTo(
                    cx2 + Math.cos(a2) * (radius2 - distort * 0.5),
                    cy2 + Math.sin(a2) * (radius2 - distort * 0.5)
                );
                ctx.stroke();
            }

            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
        />
    );
}
