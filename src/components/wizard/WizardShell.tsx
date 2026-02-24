'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useWizardStore } from '@/stores/wizardStore';
import { WizardProgress } from './WizardProgress';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import Step1Basics from './steps/Step1_Basics';
import Step2DateTime from './steps/Step2_DateTime';
import Step3Details from './steps/Step3_Details';
import Step4Prizes from './steps/Step4_Prizes';
import Step5Media from './steps/Step5_Media';
import Step6Review from './steps/Step6_Review';

const stepComponents = [Step1Basics, Step2DateTime, Step3Details, Step4Prizes, Step5Media, Step6Review];

export function WizardShell() {
    const { step, next, back } = useWizardStore();
    const StepComponent = stepComponents[step - 1];

    return (
        <div className="max-w-3xl mx-auto">
            <WizardProgress />

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="glass-card p-8">
                        <StepComponent />
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-6">
                <Button
                    variant="ghost"
                    onClick={back}
                    disabled={step === 1}
                >
                    <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                {step < 6 ? (
                    <Button variant="cyan" onClick={next}>
                        Next <ArrowRight className="h-4 w-4" />
                    </Button>
                ) : (
                    <Button variant="volt">
                        <Send className="h-4 w-4" /> Publish Hackathon
                    </Button>
                )}
            </div>
        </div>
    );
}
