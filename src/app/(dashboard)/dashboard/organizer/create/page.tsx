'use client';
import { WizardShell } from '@/components/wizard/WizardShell';
import { LiveCardPreview } from '@/components/wizard/preview/LiveCardPreview';

export default function CreateHackathonPage() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
            <WizardShell />
            <div className="hidden xl:block">
                <LiveCardPreview />
            </div>
        </div>
    );
}
