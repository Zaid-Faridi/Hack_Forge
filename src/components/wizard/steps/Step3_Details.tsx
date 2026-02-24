'use client';
import { Input } from '@/components/ui/Input';
import { useWizardStore } from '@/stores/wizardStore';

export default function Step3Details() {
    const { formData, updateField } = useWizardStore();
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-heading-xl font-bold text-white mb-1">Details</h2>
                <p className="text-ink-300 text-sm">Rules, format, and requirements.</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-ink-200 mb-1.5">Description</label>
                <textarea className="w-full rounded-xl bg-surface1 border border-ink-400 px-4 py-3 text-ink-100 text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/30 transition-all min-h-[120px] resize-y" placeholder="Describe your hackathon..." value={formData.description || ''} onChange={e => updateField('description', e.target.value)} />
            </div>
            <div>
                <label className="block text-sm font-medium text-ink-200 mb-1.5">Rules</label>
                <textarea className="w-full rounded-xl bg-surface1 border border-ink-400 px-4 py-3 text-ink-100 text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/30 transition-all min-h-[100px] resize-y" placeholder="Hackathon rules and guidelines..." value={formData.rules || ''} onChange={e => updateField('rules', e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Input label="Min Team Size" type="number" placeholder="1" value={formData.minTeam || ''} onChange={e => updateField('minTeam', e.target.value)} />
                <Input label="Max Team Size" type="number" placeholder="5" value={formData.maxTeam || ''} onChange={e => updateField('maxTeam', e.target.value)} />
            </div>
            <Input label="Eligibility" placeholder="Open to all / Students only / etc." value={formData.eligibility || ''} onChange={e => updateField('eligibility', e.target.value)} />
        </div>
    );
}
