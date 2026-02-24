'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RoleToggle } from './RoleToggle';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { SocialAuthButtons } from './SocialAuthButtons';
import { AuthBackground } from './AuthBackground';
import { Hexagon } from 'lucide-react';

type Role = 'participant' | 'organizer';

export function DualLoginPortal() {
    const [role, setRole] = useState<Role>('participant');
    const [mode, setMode] = useState<'login' | 'register'>('login');

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <AuthBackground activeRole={role} />

            <motion.div
                className="glass-card w-full max-w-md p-8 mx-4"
                layout
                transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            >
                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Hexagon className="h-7 w-7 text-cyan" />
                    <p className="text-cyan text-center font-display text-2xl font-bold">
                        HackForge
                    </p>
                </div>

                {/* Animated role toggle */}
                <RoleToggle value={role} onChange={setRole} />

                {/* Form swaps on role or mode change */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={role + mode}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                    >
                        {mode === 'login' ? (
                            <LoginForm role={role} mode={mode} />
                        ) : (
                            <RegisterForm role={role} />
                        )}
                    </motion.div>
                </AnimatePresence>

                <SocialAuthButtons role={role} />

                {/* Mode toggle link */}
                <p className="text-center text-ink-300 text-sm mt-6">
                    {mode === 'login'
                        ? "Don't have an account? "
                        : 'Already have an account? '}
                    <button
                        onClick={() =>
                            setMode((m) => (m === 'login' ? 'register' : 'login'))
                        }
                        className="text-cyan hover:text-white transition-colors font-medium"
                    >
                        {mode === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </motion.div>
        </div>
    );
}
