'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { fadeUp, staggerContainer } from '@/lib/animations/variants';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-bg px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-center"
            >
                <motion.div variants={fadeUp} className="mb-6">
                    <span className="text-[120px] font-display font-black leading-none">
                        <GradientText>404</GradientText>
                    </span>
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-heading-xl font-bold text-white mb-3">
                    Page Not Found
                </motion.h1>
                <motion.p variants={fadeUp} className="text-ink-300 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </motion.p>
                <motion.div variants={fadeUp} className="flex gap-3 justify-center">
                    <Link href="/">
                        <Button variant="cyan">
                            <Home className="h-4 w-4" /> Go Home
                        </Button>
                    </Link>
                    <Link href="/explore">
                        <Button variant="ghost">
                            Explore Hackathons
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
