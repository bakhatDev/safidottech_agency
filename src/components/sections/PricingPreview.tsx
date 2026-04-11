import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import PricingCard from '@/components/shared/PricingCard';
import Button from '@/components/shared/Button';
import { pricingTiers } from '@/data/pricing';

export default function PricingPreview() {
  return (
    <SectionContainer bgColor="bg-[#111111]">
      <SectionHeader
        align="center"
        eyebrow="Transparent Pricing"
        heading="Value-First Pricing. No Hidden Costs."
        subheading="Prices shown in your selected currency. Pakistani clients receive a 20% discount automatically reflected in PKR."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-center">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-2">
        <p className="text-[#999] text-sm text-center">
          Need something custom?
        </p>
        <Button 
          label="Get Custom Quote →" 
          href="/contact?type=quote" 
          variant="ghost" 
          size="sm" 
        />
      </div>
    </SectionContainer>
  );
}
