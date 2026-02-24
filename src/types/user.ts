export interface User {
    id: string;
    name: string;
    email: string;
    image: string | null;
    role: 'PARTICIPANT' | 'ORGANIZER' | 'ADMIN';
    organization: {
        id: string;
        name: string;
        slug: string;
        logo: string | null;
        website: string | null;
    } | null;
    skills: string[];
    bio: string | null;
    github: string | null;
    linkedin: string | null;
    portfolio: string | null;
    createdAt: string;
}
