import { pageMetadata } from '@/utils/metadata';
import HeroSection from '@/components/sections/HeroSection';
import AboutSnippet from '@/components/sections/AboutSnippet';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import StatsSection from '@/components/sections/StatsSection';
import TeamPreview from '@/components/sections/TeamPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BlogPreview from '@/components/sections/BlogPreview';
import ContactPanel from '@/components/sections/ContactPanel';

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesOverview />
      <PortfolioPreview />
      <StatsSection />
      <TeamPreview />
      <TestimonialsSection />
      <ClientsSection />
      <AwardsMarquee />
      <WhyUsSection />
      <ProcessSection />
      <BlogPreview />
      <ContactPanel />
    </>
  );
}
