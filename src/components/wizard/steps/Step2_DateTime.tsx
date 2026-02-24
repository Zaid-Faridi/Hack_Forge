'use client';
import { Input } from '@/components/ui/Input';
import { useWizardStore } from '@/stores/wizardStore';

export default function Step2DateTime() {
    const { formData, updateField } = useWizardStore();
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-heading-xl font-bold text-white mb-1">Date & Time</h2>
                <p className="text-ink-300 text-sm">Set the schedule for your hackathon.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Input label="Start Date" type="date" value={formData.startDate || ''} onChange={e => updateField('startDate', e.target.value)} />
                <Input label="End Date" type="date" value={formData.endDate || ''} onChange={e => updateField('endDate', e.target.value)} />
            </div>
            <Input label="Registration Deadline" type="date" value={formData.regDeadline || ''} onChange={e => updateField('regDeadline', e.target.value)} />
            <Input label="Location / Venue" placeholder="San Francisco, CA or Virtual" value={formData.location || ''} onChange={e => updateField('location', e.target.value)} />
            <Input label="Country" placeholder="United States" value={formData.country || ''} onChange={e => updateField('country', e.target.value)} />
        </div>
    );
}
