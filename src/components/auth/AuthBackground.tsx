'use client';
import { motion } from 'framer-motion';

export function AuthBackground({ activeRole }: { activeRole: string }) {
    const isCyan = activeRole === 'participant';
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-bg" />
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
                animate={{ background: isCyan ? '#00E5FF' : '#FF0090' }}
                transition={{ duration: 0.8 }}
            />
            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
                animate={{ background: isCyan ? '#0EA5E9' : '#C026D3' }}
                transition={{ duration: 0.8 }}
            />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '128px 128px',
                }}
            />
        </div>
    );
}
