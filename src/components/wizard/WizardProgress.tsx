'use client';
import { motion } from 'framer-motion';
import { useWizardStore } from '@/stores/wizardStore';
import { WIZARD_STEPS } from '@/lib/utils/constants';
import { cn } from '@/lib/utils/cn';
import { Check } from 'lucide-react';

export function WizardProgress() {
    const step = useWizardStore((s) => s.step);

    return (
        <div className="flex items-center justify-between mb-8">
            {WIZARD_STEPS.map((s, i) => {
                const isActive = step === s.id;
                const isCompleted = step > s.id;
                return (
                    <div key={s.id} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    backgroundColor: isCompleted ? '#00E5FF' : isActive ? '#141B2D' : '#141B2D',
                                    borderColor: isActive ? '#00E5FF' : isCompleted ? '#00E5FF' : '#3A4560',
                                }}
                                className={cn(
                                    'h-10 w-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all',
                                    isActive && 'shadow-glow-cyan'
                                )}
                            >
                                {isCompleted ? (
                                    <Check className="h-5 w-5 text-bg" />
                                ) : (
                                    <span className={isActive ? 'text-cyan' : 'text-ink-400'}>
                                        {s.id}
                                    </span>
                                )}
                            </motion.div>
                            <span className={cn(
                                'text-[11px] mt-2 font-medium hidden sm:block',
                                isActive ? 'text-cyan' : isCompleted ? 'text-ink-200' : 'text-ink-400'
                            )}>
                                {s.label}
                            </span>
                        </div>
                        {i < WIZARD_STEPS.length - 1 && (
                            <div className={cn(
                                'h-0.5 w-8 sm:w-16 mx-1',
                                step > s.id ? 'bg-cyan' : 'bg-ink-400/30'
                            )} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
