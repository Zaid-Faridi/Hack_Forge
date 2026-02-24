import { NextResponse } from 'next/server';

// Mock credential validation endpoint
// In production, this would validate against a real database
export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;

    // Demo users for testing
    const demoUsers: Record<string, any> = {
        'participant@hackforge.dev': {
            id: 'demo-participant-1',
            name: 'Alex Developer',
            email: 'participant@hackforge.dev',
            image: null,
            role: 'PARTICIPANT',
            organization: null,
        },
        'organizer@hackforge.dev': {
            id: 'demo-organizer-1',
            name: 'Sarah Organizer',
            email: 'organizer@hackforge.dev',
            image: null,
            role: 'ORGANIZER',
            organization: {
                id: 'org-1',
                name: 'TechCorp',
                slug: 'techcorp',
            },
        },
    };

    // Validate credentials
    if (!email || !password || password.length < 8) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const user = demoUsers[email];
    if (user) {
        return NextResponse.json(user);
    }

    // For any other email, create a participant user
    return NextResponse.json({
        id: `user-${Date.now()}`,
        name: email.split('@')[0],
        email,
        image: null,
        role: 'PARTICIPANT',
        organization: null,
    });
}
