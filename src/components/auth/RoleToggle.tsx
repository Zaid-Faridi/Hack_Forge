'use client';
import { motion } from 'framer-motion';

type Role = 'participant' | 'organizer';

const roles = [
    { value: 'participant' as Role, label: '👤 Participant' },
    { value: 'organizer' as Role, label: '🏢 Organizer' },
] as const;

interface RoleToggleProps {
    value: Role;
    onChange: (role: Role) => void;
}

export function RoleToggle({ value, onChange }: RoleToggleProps) {
    return (
        <div className="relative flex bg-surface1 rounded-full p-1 mb-6">
            {roles.map((r) => (
                <button
                    key={r.value}
                    onClick={() => onChange(r.value)}
                    className="relative z-10 flex-1 py-2.5 text-sm font-medium transition-colors duration-200"
                    style={{
                        color: value === r.value ? '#0A0F1E' : '#6B7A99',
                    }}
                >
                    {r.label}
                    {value === r.value && (
                        <motion.div
                            layoutId="role-pill"
                            className="absolute inset-0 rounded-full -z-10"
                            style={{
                                background:
                                    value === 'participant'
                                        ? 'linear-gradient(135deg, #00E5FF, #0EA5E9)'
                                        : 'linear-gradient(135deg, #FF0090, #C026D3)',
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
