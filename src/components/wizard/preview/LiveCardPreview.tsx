'use client';
import { motion } from 'framer-motion';
import { useWizardStore } from '@/stores/wizardStore';
import { Badge } from '@/components/ui/Badge';
import { Calendar, MapPin, Trophy } from 'lucide-react';

export function LiveCardPreview() {
    const { formData } = useWizardStore();

    return (
        <motion.div
            layout
            className="glass-card overflow-hidden sticky top-28"
        >
            <div className="h-2 bg-gradient-to-r from-cyan/40 to-magenta/40" />
            <div className="p-5 space-y-3">
                <p className="text-[10px] text-ink-400 uppercase tracking-widest">Live Preview</p>
                <div className="flex gap-2">
                    <Badge variant="cyan">{formData.mode || 'Mode'}</Badge>
                </div>
                <h3 className="text-heading-md font-semibold text-white">
                    {formData.title || 'Hackathon Title'}
                </h3>
                <p className="text-ink-300 text-sm">
                    {formData.tagline || 'Your tagline here...'}
                </p>
                <div className="space-y-1.5 text-sm text-ink-300">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-ink-400" />
                        {formData.startDate || 'Start date'}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-ink-400" />
                        {formData.location || 'Location'}
                    </div>
                    {formData.prizePool && (
                        <div className="flex items-center gap-2">
                            <Trophy className="h-3.5 w-3.5 text-volt" />
                            <span className="text-volt font-mono font-bold">
                                ${Number(formData.prizePool).toLocaleString()}
                            </span>
                        </div>
                    )}
                </div>
                {formData.domains?.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                        {formData.domains.map((d: string) => (
                            <span key={d} className="text-[11px] px-2 py-0.5 rounded-full bg-surface2 text-ink-300">
                                {d}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
