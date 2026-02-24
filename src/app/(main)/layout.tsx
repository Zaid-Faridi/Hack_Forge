import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <main className="pt-24">{children}</main>
            <Footer />
        </>
    );
}
