import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const participantRegisterSchema = loginSchema.extend({
    name: z.string().min(2, 'Name is required'),
    skills: z.array(z.string()).min(1, 'Select at least one skill'),
});

export const organizerRegisterSchema = loginSchema.extend({
    name: z.string().min(2, 'Contact name is required'),
    orgName: z.string().min(2, 'Organization name is required'),
    orgSlug: z
        .string()
        .min(2)
        .regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers and hyphens only'),
    website: z.string().url().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type ParticipantRegisterInput = z.infer<typeof participantRegisterSchema>;
export type OrganizerRegisterInput = z.infer<typeof organizerRegisterSchema>;
