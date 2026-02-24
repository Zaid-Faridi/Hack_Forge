import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'HackForge — Discover, Host & Conquer Hackathons',
        template: '%s | HackForge',
    },
    description:
        'HackForge is the premier platform for discovering hackathons worldwide, hosting your own events, and showcasing winning projects.',
    keywords: ['hackathon', 'coding', 'competition', 'developer', 'innovation'],
    openGraph: {
        title: 'HackForge — Discover, Host & Conquer Hackathons',
        description:
            'The premier platform for hackathon discovery and hosting.',
        url: 'https://hackforge.dev',
        siteName: 'HackForge',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}
            suppressHydrationWarning
        >
            <body className="font-sans antialiased bg-bg text-ink-100 min-h-screen">
                {children}
            </body>
        </html>
    );
}
