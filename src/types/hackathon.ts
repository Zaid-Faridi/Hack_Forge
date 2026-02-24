export interface Hackathon {
    id: string;
    title: string;
    tagline: string;
    description: string;
    coverImage: string;
    status: 'Upcoming' | 'Registration Open' | 'In Progress' | 'Judging' | 'Completed';
    mode: 'Online' | 'In-Person' | 'Hybrid';
    domains: string[];
    techStack: string[];
    startDate: string;
    endDate: string;
    registrationDeadline: string;
    location: string;
    country: string;
    prizePool: number;
    currency: string;
    maxTeamSize: number;
    minTeamSize: number;
    participantCount: number;
    organizerId: string;
    organizerName: string;
    organizerLogo: string;
    featured: boolean;
    website: string;
    rules: string;
    eligibility: string;
    createdAt: string;
    updatedAt: string;
}

export interface HackathonFilters {
    query: string;
    status: string[];
    mode: string[];
    domains: string[];
    prizeRange: [number, number];
    country: string;
    featured: boolean;
}
