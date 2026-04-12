import { notFound } from 'next/navigation';
import { portfolioItems } from '@/data/portfolio';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import SectionHeader from '@/components/shared/SectionHeader';
import PortfolioCard from '@/components/shared/PortfolioCard';
import ContactPanel from '@/components/sections/ContactPanel';
import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  
  if (!item) return {};

  return {
    title: item.metaTitle || `${item.title} | SafiDotTech Portfolio`,
    description: item.metaDescription || item.description,
  };
}

export default function PortfolioDetailsPage({ params }: PageProps) {
  const item = portfolioItems.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  // Safely casting to any to handle optional fields not strictly defined in PortfolioItem type yet
  const anyItem = item as any;
  const client = anyItem.client || 'Confidential Client';
  const services = anyItem.services || item.tags || [];
  const liveUrl = anyItem.liveUrl;
  const summary = anyItem.summary || item.description;
  const challenge = anyItem.challenge || 'Our client needed to scale their platform to handle increased traffic and improve user engagement. The legacy systems were creating bottlenecks and negative user experiences.';
  const solution = anyItem.solution || 'We implemented a modern, component-driven architecture using Next.js to significantly boost performance. We integrated advanced caching strategies and optimized database queries.';
  const gallery = anyItem.gallery || [];
  const results = anyItem.results || [];
  const testimonial = anyItem.testimonial;

  // Filter out current project
  const relatedProjects = portfolioItems.filter(p => p.id !== item.id).slice(0, 2);

  return (
    <>
      {/* Section 1: PageBanner */}
      <PageBanner
        title={item.title}
        eyebrow={item.category}
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: item.title }
        ]}
      />

      {/* Section 2: Project Hero Image */}
      <SectionContainer className="py-0">
        <div className="w-full h-auto aspect-video rounded-2xl overflow-hidden relative">
          <OptimizedImage
             src={item.image || '/images/placeholder.svg'}
             alt={item.title}
             fill
             priority={true}
             className="object-cover"
          />
        </div>
      </SectionContainer>

      {/* Section 3: Project Overview (Conversion Grid) */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mt-12 items-start">
          {/* Left Column (Details Table) */}
          <div className="bg-[#1C1C1C] p-8 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl font-semibold text-white mb-6">Project Details</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-[#999] text-sm">Client</span>
                <span className="text-white font-medium">{client}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[#999] text-sm">Year</span>
                <span className="text-white font-medium">{item.year}</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[#999] text-sm">Services</span>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-[#2A2A2A] text-white text-xs rounded-full border border-[#3A3A3A]">
                      {svc}
                    </span>
                  ))}
                </div>
              </li>
              {liveUrl && (
                <li className="pt-4 border-t border-[#2A2A2A] mt-4">
                  <Button variant="ghost" className="w-full border-none px-0 flex justify-between" href={liveUrl} label="Visit Live Site" showArrow={true} />
                </li>
              )}
            </ul>
          </div>

          {/* Right Column (Summary) */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <div className="text-[#999] text-lg leading-relaxed prose prose-invert max-w-none">
                <p>{summary}</p>
              </div>
            </div>

            {/* Section 4: Challenge & Solution */}
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <p className="text-[#999] text-lg leading-relaxed">{challenge}</p>
              </div>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                <p className="text-[#999] text-lg leading-relaxed">{solution}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Section 5: Project Gallery */}
      {gallery.length > 0 && (
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.map((img: string, i: number) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A]">
                <OptimizedImage
                  src={img}
                  alt={`${item.title} gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Section 6: Results & Metrics */}
      {results.length > 0 && (
        <SectionContainer>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {results.map((res: any, idx: number) => (
               <div key={idx} className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A] text-center">
                 <div className="text-3xl font-bold text-lime-400 mb-2">{res.value}</div>
                 <div className="text-[#999] text-sm uppercase tracking-wider">{res.label}</div>
               </div>
             ))}
          </div>
        </SectionContainer>
      )}

      {/* Section 7: Client Testimonial (Conditional) */}
      {testimonial && (
        <SectionContainer>
          <div className="max-w-4xl mx-auto bg-[#1C1C1C] p-10 md:p-14 rounded-2xl border border-[#2A2A2A] relative">
            <div className="absolute top-6 left-6 text-6xl text-lime-400 opacity-20">"</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <div className="w-14 h-14 relative rounded-full overflow-hidden border border-[#2A2A2A]">
                    <OptimizedImage src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-lime-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      )}

      {/* Section 8: Related Projects */}
      {relatedProjects.length > 0 && (
        <SectionContainer className="bg-[#0A0A0A]">
          <SectionHeader
            heading="More Success Stories"
            subheading="Explore our other recent projects"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {relatedProjects.map((project) => (
              <PortfolioCard key={project.id} item={project} />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Section 9: ContactPanel */}
      <ContactPanel />
    </>
  );
}
