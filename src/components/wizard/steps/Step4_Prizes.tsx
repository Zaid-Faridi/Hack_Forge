'use client';
import { Input } from '@/components/ui/Input';
import { useWizardStore } from '@/stores/wizardStore';

export default function Step4Prizes() {
    const { formData, updateField } = useWizardStore();
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-heading-xl font-bold text-white mb-1">Prizes</h2>
                <p className="text-ink-300 text-sm">Define prizes and reward tracks.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Input label="Total Prize Pool" type="number" placeholder="50000" value={formData.prizePool || ''} onChange={e => updateField('prizePool', e.target.value)} />
                <Input label="Currency" placeholder="USD" value={formData.currency || 'USD'} onChange={e => updateField('currency', e.target.value)} />
            </div>
            <Input label="1st Place" placeholder="$25,000 + Mentorship" value={formData.prize1 || ''} onChange={e => updateField('prize1', e.target.value)} />
            <Input label="2nd Place" placeholder="$15,000" value={formData.prize2 || ''} onChange={e => updateField('prize2', e.target.value)} />
            <Input label="3rd Place" placeholder="$10,000" value={formData.prize3 || ''} onChange={e => updateField('prize3', e.target.value)} />
            <Input label="Special Tracks (optional)" placeholder="Best AI Use, Best Design, etc." value={formData.specialTracks || ''} onChange={e => updateField('specialTracks', e.target.value)} />
        </div>
    );
}
