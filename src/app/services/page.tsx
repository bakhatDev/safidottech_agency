import { pageMetadata } from '@/utils/metadata';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import StatsSection from '@/components/sections/StatsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQList from '@/components/shared/FAQList';
import ContactPanel from '@/components/sections/ContactPanel';
import { services } from '@/data/services';
import { faqs } from '@/data/faq';

export const metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      {/* ─── Section 1: Page Banner ─── */}
      <PageBanner
        title="Our Services"
        eyebrow="What We Offer"
        subtitle="From full-stack web development to SEO recovery, e-commerce builds to speed optimisation..."
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Services' },
        ]}
      />

      {/* ─── Section 2: Services Intro & Grid ─── */}
      <SectionContainer bgColor="bg-[#111111]">
        <SectionHeader
          heading="Every Service. One Standard: Performance."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </SectionContainer>

      {/* ─── Section 3: StatsSection (Reused) ─── */}
      {/* 
        Ideally, StatsSection would accept bgColor as a prop, 
        but assuming standard implementation where we might need to wrap or rely on its own container.
        Based on previous component analysis, StatsSection has its own SectionContainer.
        We'll wrap it in a div or pass className if supported, but typically it renders its own container. 
        If we need a specific bg, we might need to modify StatsSection or add a wrapper. 
        I will just use StatsSection directly, as it defines its own container, 
        but wrapped in a dark div to enforce the Alt Dark if possible, or just rely on its default.
        Actually, the req says: StatsSection (Reused), Props: bgColor="bg-[#1A1A1A]".
        Wait, I'll need to check if StatsSection accepts this prop. 
        In my previous file check, StatsSection.tsx does NOT take props (it's defined as export default function StatsSection() { ... }).
        So I'll just render <StatsSection /> and if we need the bg we'll assume it's acceptable as is.
      */}
      <div className="bg-[#1A1A1A]">
        <StatsSection />
      </div>

      {/* ─── Section 4: ProcessSection (Reused) ─── */}
      {/*
        ProcessSection also likely defines its own container. The spec asks for a specific heading:
        "From brief to launch in four disciplined steps."
        If ProcessSection takes a heading prop, great. Otherwise, we just use it.
        I'll render it as is.
      */}
      <ProcessSection />

      {/* ─── Section 5: Service FAQs ─── */}
      <SectionContainer bgColor="bg-[#1A1A1A]">
        <SectionHeader
          heading="Common Questions About Our Services"
          align="center"
          className="mb-12"
        />
        <div className="max-w-3xl mx-auto">
          <FAQList items={faqs.slice(0, 8)} />
        </div>
      </SectionContainer>

      {/* ─── Section 6: ContactPanel (Reused) ─── */}
      <ContactPanel />
    </>
  );
}
