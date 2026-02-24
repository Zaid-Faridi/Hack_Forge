// src/middleware.ts — Edge runtime route guards
import NextAuth from 'next-auth';
import { authConfig } from '@/lib/auth/auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const role = req.auth?.user?.role;

    // Organizer-only routes
    if (pathname.startsWith('/dashboard/organizer')) {
        if (!req.auth)
            return Response.redirect(
                new URL('/login?callbackUrl=' + pathname, req.url)
            );
        if (role !== 'ORGANIZER')
            return Response.redirect(new URL('/dashboard/participant', req.url));
    }

    // Participant-only routes
    if (pathname.startsWith('/dashboard/participant')) {
        if (!req.auth)
            return Response.redirect(
                new URL('/login?callbackUrl=' + pathname, req.url)
            );
        if (role !== 'PARTICIPANT')
            return Response.redirect(new URL('/dashboard/organizer', req.url));
    }

    // Redirect logged-in users away from auth pages
    if (
        req.auth &&
        (pathname.startsWith('/login') || pathname.startsWith('/register'))
    ) {
        const dest =
            role === 'ORGANIZER'
                ? '/dashboard/organizer'
                : '/dashboard/participant';
        return Response.redirect(new URL(dest, req.url));
    }
});

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register/:path*'],
};
