export interface Winner {
    id: string;
    hackathonId: string;
    hackathonTitle: string;
    projectName: string;
    projectDescription: string;
    projectImage: string;
    demoUrl: string | null;
    repoUrl: string | null;
    teamName: string;
    teamMembers: {
        name: string;
        avatar: string;
        role: string;
    }[];
    prize: string;
    prizeAmount: number;
    track: string;
    techStack: string[];
    placement: number;
    year: number;
}
