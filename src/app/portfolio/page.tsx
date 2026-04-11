import { pageMetadata } from '@/utils/metadata';
import { portfolioItems } from '@/data/portfolio';
import PageBanner from '@/components/sections/PageBanner';
import PortfolioClient from '@/components/portfolio/PortfolioClient';

export const metadata = pageMetadata.portfolio;

export default function PortfolioPage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      <PageBanner 
        title="Our Work" 
        eyebrow="Case Studies" 
        breadcrumbs={[{label: 'Home', href: '/'}, {label: 'Portfolio'}]} 
      />
      <PortfolioClient items={portfolioItems} />
    </main>
  );
}
