export const APP_NAME = 'HackForge';
export const APP_DESCRIPTION = 'Discover, host, and conquer hackathons worldwide.';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const ROLES = {
    PARTICIPANT: 'PARTICIPANT',
    ORGANIZER: 'ORGANIZER',
    ADMIN: 'ADMIN',
} as const;

export const HACKATHON_STATUSES = [
    'Upcoming',
    'Registration Open',
    'In Progress',
    'Judging',
    'Completed',
] as const;

export const HACKATHON_MODES = ['Online', 'In-Person', 'Hybrid'] as const;

export const TECH_DOMAINS = [
    'AI / ML',
    'Web3 / Blockchain',
    'Cloud / DevOps',
    'Mobile',
    'Cybersecurity',
    'IoT / Hardware',
    'FinTech',
    'HealthTech',
    'EdTech',
    'Gaming',
    'AR / VR',
    'Open Innovation',
] as const;

export const NAV_LINKS = [
    { label: 'Explore', href: '/explore' },
    { label: 'Hall of Fame', href: '/hall-of-fame' },
] as const;

export const WIZARD_STEPS = [
    { id: 1, label: 'Basics', description: 'Name, tagline & domain' },
    { id: 2, label: 'Date & Time', description: 'Schedule & timeline' },
    { id: 3, label: 'Details', description: 'Rules, format & requirements' },
    { id: 4, label: 'Prizes', description: 'Prize pool & tracks' },
    { id: 5, label: 'Media', description: 'Cover image & branding' },
    { id: 6, label: 'Review', description: 'Final check & publish' },
] as const;
