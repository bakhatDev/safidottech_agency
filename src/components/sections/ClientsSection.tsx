import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import LogoMarquee from '@/components/shared/LogoMarquee';
import Button from '@/components/shared/Button';
import OptimizedImage from '@/components/shared/OptimizedImage';

export default function ClientsSection() {
  return (
    <SectionContainer bgColor="bg-[#111111]" className="flex flex-col items-center">
      {/* Header */}
      <SectionHeader
        eyebrow="Trusted By"
        heading="Growing businesses. Global partnerships. Real results."
        align="center"
        className="mb-10"
      />

      {/* Avatar Stack Area */}
      <div className="flex flex-col items-center justify-center gap-4 mb-16">
        <div className="flex">
          {/* Default to 3 placeholders for the stack */}
          {[1, 2, 3].map((num, idx) => (
            <div
              key={num}
              className={`relative w-10 h-10 rounded-full border-2 border-[#111111] overflow-hidden ${
                idx > 0 ? '-ml-3' : ''
              }`}
            >
              <OptimizedImage
                src="/images/placeholder.svg"
                alt={`Client avatar ${num}`}
                fill
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <p className="text-white font-medium text-sm">30+ Active Clients</p>
      </div>

      {/* Marquee */}
      <LogoMarquee
        items={[
          { label: 'Vercel', icon: 'fab fa-vercel' },
          { label: 'Shopify', icon: 'fab fa-shopify' },
          { label: 'WordPress', icon: 'fab fa-wordpress' },
          { label: 'Google', icon: 'fab fa-google' },
          { label: 'Cloudflare', icon: 'fab fa-cloudflare' },
          { label: 'GitHub', icon: 'fab fa-github' },
        ]}
        speed={30}
      />

      {/* Section CTA */}
      <div className="mt-12">
        <Button
          label="View All Clients →"
          href="/about#partners"
          variant="ghost"
          size="sm"
        />
      </div>
    </SectionContainer>
  );
}
