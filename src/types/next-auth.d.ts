// src/types/next-auth.d.ts — Augment session to include role + orgId
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            role: 'PARTICIPANT' | 'ORGANIZER' | 'ADMIN';
            orgId: string | null;
        } & DefaultSession['user'];
    }
    interface User {
        role: string;
        organization: { id: string } | null;
    }
}
declare module 'next-auth/jwt' {
    interface JWT {
        role: string;
        orgId: string | null;
    }
}
