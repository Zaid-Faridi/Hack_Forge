import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import { loginSchema } from '@/lib/validations/auth';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.orgId = user.organization?.id ?? null;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.role = token.role as 'PARTICIPANT' | 'ORGANIZER' | 'ADMIN';
            session.user.orgId = token.orgId as string | null;
            return session;
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isDashboard) return isLoggedIn;
            return true;
        },
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        Credentials({
            async authorize(credentials) {
                const parsed = loginSchema.safeParse(credentials);
                if (!parsed.success) return null;

                const res = await fetch(
                    `${process.env.NEXTAUTH_URL}/api/auth/validate`,
                    {
                        method: 'POST',
                        body: JSON.stringify(parsed.data),
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                if (!res.ok) return null;
                return res.json();
            },
        }),
    ],
};
