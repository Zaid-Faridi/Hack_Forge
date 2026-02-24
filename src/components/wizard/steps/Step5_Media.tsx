'use client';
import { Input } from '@/components/ui/Input';
import { useWizardStore } from '@/stores/wizardStore';
import { Upload } from 'lucide-react';

export default function Step5Media() {
    const { formData, updateField } = useWizardStore();
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-heading-xl font-bold text-white mb-1">Media & Branding</h2>
                <p className="text-ink-300 text-sm">Add visuals for your hackathon listing.</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-ink-200 mb-1.5">Cover Image</label>
                <div className="border-2 border-dashed border-ink-400 rounded-2xl p-8 text-center hover:border-cyan/30 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-ink-400 mx-auto mb-3" />
                    <p className="text-ink-300 text-sm">Drag and drop or click to upload</p>
                    <p className="text-ink-400 text-xs mt-1">PNG, JPG up to 5MB. Recommended: 1200×630</p>
                </div>
            </div>
            <Input label="Website URL" placeholder="https://yourhackathon.com" value={formData.website || ''} onChange={e => updateField('website', e.target.value)} />
            <Input label="Logo URL (optional)" placeholder="https://..." value={formData.logoUrl || ''} onChange={e => updateField('logoUrl', e.target.value)} />
        </div>
    );
}
