'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { glassModal } from '@/lib/animations/variants';
import { cn } from '@/lib/utils/cn';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm"
                    />
                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            variants={glassModal}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={cn('glass-card w-full max-w-lg p-6 relative', className)}
                        >
                            {/* Header */}
                            {title && (
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-heading-md font-semibold text-ink-100">
                                        {title}
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        className="p-1 rounded-lg text-ink-300 hover:text-white hover:bg-surface2 transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                            {!title && (
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-1 rounded-lg text-ink-300 hover:text-white hover:bg-surface2 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            )}
                            {children}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
