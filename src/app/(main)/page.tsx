import { HeroSection } from '@/components/landing/HeroSection';
import { StatsBar } from '@/components/landing/StatsBar';
import { FeaturedHackathons } from '@/components/landing/FeaturedHackathons';
import { TechDomains } from '@/components/landing/TechDomains';
import { Testimonials } from '@/components/landing/Testimonials';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsBar />
            <FeaturedHackathons />
            <TechDomains />
            <Testimonials />
        </>
    );
}
