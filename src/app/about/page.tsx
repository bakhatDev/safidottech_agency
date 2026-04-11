import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import SectionHeader from '@/components/shared/SectionHeader';
import StatsSection from '@/components/sections/StatsSection';
import TeamPreview from '@/components/sections/TeamPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQList from '@/components/shared/FAQList';
import ContactPanel from '@/components/sections/ContactPanel';
import LogoMarquee from '@/components/shared/LogoMarquee';
import Button from '@/components/shared/Button';
import { faqs } from '@/data/faq';

export const metadata = pageMetadata.about;

const agencyServices = [
  { num: '01', label: 'Web Design & Full-Stack Development' },
  { num: '02', label: 'SEO Strategy & Speed Optimisation' },
  { num: '03', label: 'E-Commerce Solutions (Shopify · WooCommerce)' },
  { num: '04', label: 'Custom Web Applications & SaaS Platforms' },
];

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Honesty',
    description:
      'Clean code, transparent invoices, and no surprise fees. We say what we do, and do what we say — every single time.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Speed',
    description:
      'Fast websites, fast replies, fast turnaround. We build for sub-5-second loads and promise 24-hour response times.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    title: 'Results',
    description:
      "Outcomes you can measure — higher rankings, faster pages, more conversions. We don't celebrate effort; we celebrate impact.",
  },
];

const partnerNames = [
  'Starter Pack',
  'Urban Elegance',
  'FreshMart',
  'TechVault',
  'GreenLeaf Co',
  'NovaBuild',
  'Pixel & Grain',
  'SwiftLogistics',
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Section 1: Page Banner ─── */}
      <PageBanner
        title="About Safi Dot Tech"
        eyebrow="Our Story"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* ─── Section 2: Agency Story ─── */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#1C1C1C] w-full">
            <OptimizedImage
              src="/assets/img/thumb/2.jpg"
              alt="Safi Dot Tech team working on a project"
              fill
              objectFit="cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <SectionHeader
              eyebrow="Our Story"
              heading="Built from Code. Driven by Results."
              align="left"
              className="mb-6"
            />

            <p className="text-[#999] text-base leading-relaxed mb-4">
              Safi Dot Tech started in 2021 with a simple frustration: too many agencies
              charge premium rates for cookie-cutter themes, poor SEO, and bloated code.
              We set out to prove there&apos;s a better way — hand-crafted development,
              baked-in performance, and honest pricing.
            </p>
            <p className="text-[#999] text-base leading-relaxed mb-4">
              Registered in both Pakistan and the United Kingdom, we operate as a lean,
              senior-only team. Every line of code is written by engineers who understand
              not just syntax, but search rankings, conversion funnels, and the business
              logic behind every pixel.
            </p>
            <p className="text-[#999] text-base leading-relaxed mb-8">
              Today we serve 30+ clients across three continents — from local startups in
              Lahore to established e-commerce brands in London. Whether it&apos;s a blazing-fast
              landing page or a full-scale SaaS platform, we deliver work that ranks, loads
              fast, and converts visitors into customers.
            </p>

            {/* Numbered Services List */}
            <div className="flex flex-col mb-10 w-full max-w-lg">
              {agencyServices.map((service) => (
                <div
                  key={service.num}
                  className="flex items-center gap-4 border-b border-[#2A2A2A] py-3 first:pt-0 last:border-0"
                >
                  <span className="text-[#C2F026] font-bold text-sm">
                    {service.num}
                  </span>
                  <span className="text-white text-base">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="self-start">
              <Button
                label="Explore Our Services"
                href="/services"
                variant="lime"
                showArrow
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ─── Section 3: Stats ─── */}
      <StatsSection />

      {/* ─── Section 4: Partners Marquee ─── */}
      <SectionContainer id="partners">
        <SectionHeader
          eyebrow="Our Partners"
          heading="Businesses That Trust Us"
          align="center"
          className="mb-12"
        />
        <LogoMarquee items={partnerNames} speed={30} />
      </SectionContainer>

      {/* ─── Section 5: Team Preview ─── */}
      <TeamPreview />

      {/* ─── Section 6: Values / Mission ─── */}
      <SectionContainer bgColor="bg-[#1A1A1A]">
        <SectionHeader
          eyebrow="What We Stand For"
          heading="Clean code, honest work, outcomes you can measure."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#C2F026]/30 hover:shadow-[0_0_32px_rgba(194,240,38,0.06)]"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C2F026]/10 text-[#C2F026] transition-colors duration-300 group-hover:bg-[#C2F026]/20">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[#999] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ─── Section 7: Testimonials ─── */}
      <TestimonialsSection />

      {/* ─── Section 8: General FAQ ─── */}
      <SectionContainer>
        <SectionHeader
          eyebrow="Common Questions"
          heading="Got questions? We've got answers."
          align="center"
          className="mb-12"
        />
        <div className="max-w-3xl mx-auto">
          <FAQList items={faqs.slice(0, 6)} />
        </div>
      </SectionContainer>

      {/* ─── Section 9: Contact Panel (About Variant) ─── */}
      <SectionContainer>
        <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 border border-[#2A2A2A] bg-gradient-to-br from-[#1A1A1A] to-[#111111]">
          {/* Concentric Circle SVG Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover"
            >
              <circle cx="400" cy="400" r="100" stroke="#C2F026" strokeWidth="1" fill="none" />
              <circle cx="400" cy="400" r="150" stroke="#C2F026" strokeWidth="1" fill="none" />
              <circle cx="400" cy="400" r="200" stroke="#C2F026" strokeWidth="1" fill="none" />
              <circle cx="400" cy="400" r="250" stroke="#C2F026" strokeWidth="1" fill="none" />
              <circle cx="400" cy="400" r="300" stroke="#C2F026" strokeWidth="1" fill="none" />
              <circle cx="400" cy="400" r="350" stroke="#C2F026" strokeWidth="1" fill="none" />
              <circle cx="400" cy="400" r="400" stroke="#C2F026" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Decorative Wordmark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-white opacity-[0.03] font-bold text-8xl lg:text-[12rem] tracking-tighter uppercase whitespace-nowrap">
              SAFIDOTTECH
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-[#C2F026] text-xs font-medium uppercase tracking-widest mb-4">
              <span className="mr-2">➚</span>Let&apos;s Talk
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              We&apos;re Easy to Reach.<br className="hidden md:block" /> Even Easier to Work With.
            </h2>
            <p className="text-[#999] text-lg max-w-2xl mx-auto mb-10">
              No jargon. No long proposals. Just a conversation about what you need, what it costs, and when it&apos;ll be done.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button label="Start a Project" variant="lime" href="/contact" showArrow />
              <Button label="Book a Free Call" variant="ghost" href="https://calendly.com/safidottech" />
            </div>

            <p className="text-[#666] text-xs mt-6 mb-8">
              No contracts. No hidden costs. Just results.
            </p>

            {/* Contact Details Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
              <a
                href="mailto:info@safidottech.com"
                className="text-[#999] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>📧</span> info@safidottech.com
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? 'Hello! I would like to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C2F026] hover:underline flex items-center gap-2 font-medium"
              >
                <span>📱</span> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
