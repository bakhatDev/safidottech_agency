import { pageMetadata } from '@/utils/metadata';
import { faqs } from '@/data/faq';
import PageBanner from '@/components/sections/PageBanner';
import PricingPreview from '@/components/sections/PricingPreview';
import SectionContainer from '@/components/shared/SectionContainer';
import FAQList from '@/components/shared/FAQList';
import ContactPanel from '@/components/sections/ContactPanel';
import PricingClientSection from './_components/PricingClientSection';

export const metadata = pageMetadata.pricing;

// Feature comparison data
const comparisonFeatures = [
  { label: 'Pages Included',     starter: '5 Pages',    growth: '10 Pages',     enterprise: 'Unlimited' },
  { label: 'Built-in SEO',       starter: 'Basic',      growth: 'Advanced',     enterprise: 'Enterprise-Grade' },
  { label: 'Speed Guarantee',    starter: '< 3s',       growth: '< 2s',         enterprise: 'Sub-1s' },
  { label: 'Client Portal',      starter: '✗',          growth: '✓',            enterprise: '✓' },
  { label: 'Revision Rounds',    starter: '2 Rounds',   growth: '5 Rounds',     enterprise: 'Unlimited' },
  { label: 'Support Duration',   starter: '1 Month',    growth: '3 Months',     enterprise: '12 Months' },
];

export default function PricingPage() {
  return (
    <main className="bg-[#111111] min-h-screen">
      {/* Section 1: Banner */}
      <PageBanner
        title="Transparent Pricing"
        eyebrow="Our Packages"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pricing' },
        ]}
      />

      {/* Section 2: Currency Switcher + Trust Statement (Client Component) */}
      <PricingClientSection />

      {/* Section 3: Packages (PricingPreview reuses intro + 3 cards + custom quote teaser) */}
      <PricingPreview />

      {/* Section 4: Feature Comparison Table */}
      <SectionContainer bgColor="bg-[#0D0D0D]">
        <div className="text-center mb-12">
          <span className="text-[#C2F026] uppercase text-xs tracking-widest font-semibold">Side by Side</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            What's Included in Each Plan
          </h2>
          <p className="text-[#999] text-lg mt-4 max-w-2xl mx-auto">
            Cut through the noise. Here's exactly what you get at every tier.
          </p>
        </div>

        {/* Responsive table wrapper */}
        <div className="overflow-x-auto rounded-xl border border-[#2A2A2A]">
          <table className="w-full min-w-[600px] bg-[#1C1C1C] text-sm">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                <th className="text-left p-5 text-[#C2F026] uppercase text-xs tracking-widest font-semibold w-1/4">
                  Feature
                </th>
                <th className="text-center p-5 text-[#C2F026] uppercase text-xs tracking-widest font-semibold">
                  Starter
                </th>
                <th className="text-center p-5 text-[#C2F026] uppercase text-xs tracking-widest font-semibold bg-[#C2F026]/5 border-x border-[#C2F026]/20">
                  Growth ⭐
                </th>
                <th className="text-center p-5 text-[#C2F026] uppercase text-xs tracking-widest font-semibold">
                  Enterprise
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-[#2A2A2A] transition-colors hover:bg-white/[0.02] ${
                    i === comparisonFeatures.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="p-5 text-white font-medium">{row.label}</td>
                  <td className="p-5 text-center text-[#999]">
                    {row.starter === '✗' ? (
                      <span className="text-[#444] text-base">✗</span>
                    ) : row.starter === '✓' ? (
                      <span className="text-[#C2F026] text-base">✓</span>
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td className="p-5 text-center text-[#999] bg-[#C2F026]/5 border-x border-[#C2F026]/20">
                    {row.growth === '✗' ? (
                      <span className="text-[#444] text-base">✗</span>
                    ) : row.growth === '✓' ? (
                      <span className="text-[#C2F026] text-base">✓</span>
                    ) : (
                      <span className="text-white font-medium">{row.growth}</span>
                    )}
                  </td>
                  <td className="p-5 text-center text-[#999]">
                    {row.enterprise === '✗' ? (
                      <span className="text-[#444] text-base">✗</span>
                    ) : row.enterprise === '✓' ? (
                      <span className="text-[#C2F026] text-base">✓</span>
                    ) : (
                      row.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[#666] text-xs mt-5">
          All packages include hosting setup, SSL certificate, and Google Analytics integration.
        </p>
      </SectionContainer>

      {/* Section 5: Retainer Cards — rendered inside PricingClientSection above */}

      {/* Section 6: FAQ */}
      <SectionContainer bgColor="bg-[#111111]">
        <div className="text-center mb-12">
          <span className="text-[#C2F026] uppercase text-xs tracking-widest font-semibold">FAQs</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Pricing Questions Answered
          </h2>
          <p className="text-[#999] text-lg mt-4 max-w-xl mx-auto">
            Everything you need to know before committing to a package.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQList items={faqs.slice(0, 6)} />
        </div>
      </SectionContainer>

      {/* Section 7: Contact CTA */}
      <SectionContainer bgColor="bg-[#0D0D0D]">
        <div className="text-center mb-6">
          <p className="text-[#999] text-base italic">
            Not sure which package fits? Let&#39;s talk first — no commitment required.
          </p>
        </div>
        <ContactPanel />
      </SectionContainer>
    </main>
  );
}
