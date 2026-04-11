import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import FAQList from '@/components/shared/FAQList';
import Button from '@/components/shared/Button';
import { whyUsItems } from '@/data/whyUs';
import type { FAQItem } from '@/types';

export default function WhyUsSection() {
  const faqItems: FAQItem[] = whyUsItems.map((item) => ({
    question: item.title,
    answer: item.body,
  }));

  return (
    <SectionContainer bgColor="bg-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: FAQ Accordion */}
        <FAQList items={faqItems} />

        {/* Right Column: Heading & CTA */}
        <div className="lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="Our Edge"
            heading="Why businesses choose us over every other agency."
            className="mb-6"
          />

          <p className="text-[#999] text-base leading-relaxed mb-4">
            We don&apos;t just build websites; we build business assets that rank and convert. Every decision we make — from stack selection to deployment — is driven by your bottom line.
          </p>
          <p className="text-[#999] text-base leading-relaxed mb-10">
            Our cross-registered UK and Pakistan operations give you the quality assurance of a Western agency with the delivery efficiency of a world-class Eastern engineering team.
          </p>

          <Button
            label="Explore Services →"
            href="/services"
            variant="lime"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
