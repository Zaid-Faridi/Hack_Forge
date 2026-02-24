'use client';
import { useWizardStore } from '@/stores/wizardStore';
import { Badge } from '@/components/ui/Badge';
import { Check, AlertCircle } from 'lucide-react';

export default function Step6Review() {
    const { formData } = useWizardStore();
    const fields = [
        { label: 'Title', value: formData.title, required: true },
        { label: 'Tagline', value: formData.tagline, required: true },
        { label: 'Mode', value: formData.mode, required: true },
        { label: 'Domains', value: formData.domains?.join(', '), required: true },
        { label: 'Start Date', value: formData.startDate, required: true },
        { label: 'End Date', value: formData.endDate, required: true },
        { label: 'Location', value: formData.location, required: true },
        { label: 'Prize Pool', value: formData.prizePool ? `$${formData.prizePool}` : undefined, required: true },
        { label: 'Description', value: formData.description ? '✓ Provided' : undefined, required: true },
        { label: 'Website', value: formData.website, required: false },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-heading-xl font-bold text-white mb-1">Review & Publish</h2>
                <p className="text-ink-300 text-sm">Double-check everything before publishing.</p>
            </div>
            <div className="space-y-3">
                {fields.map(f => (
                    <div key={f.label} className="flex items-center justify-between py-2 border-b border-ink-400/20">
                        <span className="text-sm text-ink-300">{f.label}</span>
                        <div className="flex items-center gap-2">
                            {f.value ? (
                                <>
                                    <span className="text-sm text-ink-100 max-w-[200px] truncate">{f.value}</span>
                                    <Check className="h-4 w-4 text-emerald-400" />
                                </>
                            ) : (
                                <>
                                    <span className="text-sm text-ink-400">Not set</span>
                                    {f.required && <AlertCircle className="h-4 w-4 text-magenta" />}
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Badge variant="cyan" className="mx-auto block w-fit">
                {fields.filter(f => f.required && !f.value).length === 0 ? 'Ready to publish!' : `${fields.filter(f => f.required && !f.value).length} required fields missing`}
            </Badge>
        </div>
    );
}
