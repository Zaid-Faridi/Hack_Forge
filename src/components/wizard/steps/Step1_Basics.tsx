'use client';
import { Input } from '@/components/ui/Input';
import { Tag } from '@/components/ui/Tag';
import { useWizardStore } from '@/stores/wizardStore';
import { TECH_DOMAINS, HACKATHON_MODES } from '@/lib/utils/constants';
import { useState } from 'react';

export default function Step1Basics() {
    const { formData, updateField } = useWizardStore();
    const [selectedDomains, setSelectedDomains] = useState<string[]>(formData.domains || []);

    const toggleDomain = (d: string) => {
        const next = selectedDomains.includes(d) ? selectedDomains.filter(x => x !== d) : [...selectedDomains, d];
        setSelectedDomains(next);
        updateField('domains', next);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-heading-xl font-bold text-white mb-1">Basic Information</h2>
                <p className="text-ink-300 text-sm">Give your hackathon a name and identity.</p>
            </div>
            <Input label="Hackathon Name" placeholder="AI Innovation Summit 2026" value={formData.title || ''} onChange={e => updateField('title', e.target.value)} />
            <Input label="Tagline" placeholder="Build the next AI breakthrough" value={formData.tagline || ''} onChange={e => updateField('tagline', e.target.value)} />
            <div>
                <label className="block text-sm font-medium text-ink-200 mb-2">Mode</label>
                <div className="flex gap-2">
                    {HACKATHON_MODES.map(m => (
                        <Tag key={m} label={m} active={formData.mode === m} onClick={() => updateField('mode', m)} />
                    ))}
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-ink-200 mb-2">Tech Domains</label>
                <div className="flex flex-wrap gap-2">
                    {TECH_DOMAINS.map(d => (
                        <Tag key={d} label={d} active={selectedDomains.includes(d)} onClick={() => toggleDomain(d)} />
                    ))}
                </div>
            </div>
        </div>
    );
}
