"use client";

import { useCurrency } from '@/hooks/useCurrency';
import PricingCard from '@/components/shared/PricingCard';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import type { PricingTier } from '@/types';
import { cn } from '@/lib/cn';

const retainerTiers: PricingTier[] = [
  {
    id: 'r1',
    name: 'SEO Retainer',
    priceUSD: 299,
    pricePKR: 83720,
    description: 'Monthly SEO management — keyword targeting, backlink building, on-page optimisation and reporting.',
    features: [
      'Monthly Keyword Research',
      'On-Page SEO Optimisation',
      'Technical Audit & Fixes',
      'Google Analytics Reporting',
      'Backlink Outreach (5/mo)',
      'Dedicated SEO Strategist',
    ],
    isPopular: false,
    ctaLabel: 'Start SEO Plan',
    ctaHref: '/contact?package=seo-retainer',
  },
  {
    id: 'r2',
    name: 'Website Maintenance',
    priceUSD: 199,
    pricePKR: 55720,
    description: 'Keep your site secure, updated, and performing at full speed every month — hands-free.',
    features: [
      'Core & Plugin Updates',
      'Daily Uptime Monitoring',
      'Monthly Performance Report',
      'Security Scans & Malware Removal',
      '2 Content Change Requests/mo',
      'Priority Email Support',
    ],
    isPopular: false,
    ctaLabel: 'Get Maintenance',
    ctaHref: '/contact?package=maintenance',
  },
];

export default function PricingClientSection() {
  const { currency, setCurrency } = useCurrency();

  return (
    <>
      {/* Currency Switcher + Trust Statement */}
      <div className="bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 flex flex-col items-center gap-5">
          {/* Toggle Pill */}
          <div className="flex items-center gap-1 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full p-1">
            <button
              onClick={() => setCurrency('USD')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                currency === 'USD'
                  ? 'bg-[#C2F026] text-[#111111]'
                  : 'text-[#999] hover:text-white'
              )}
            >
              🇺🇸 USD
            </button>
            <button
              onClick={() => setCurrency('PKR')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                currency === 'PKR'
                  ? 'bg-[#C2F026] text-[#111111]'
                  : 'text-[#999] hover:text-white'
              )}
            >
              🇵🇰 PKR
            </button>
          </div>

          {/* PKR Discount Note */}
          {currency === 'PKR' && (
            <div className="flex items-center gap-2 bg-[#C2F026]/10 border border-[#C2F026]/30 rounded-full px-5 py-2 text-sm text-[#C2F026] font-medium animate-fade-in">
              <span>🎉</span>
              Pakistani clients receive a <strong>20% discount</strong> automatically reflected in PKR pricing.
            </div>
          )}

          {/* Trust Statement */}
          <p className="text-[#999] text-sm text-center max-w-md">
            <span className="text-white font-medium">Every price you see here is what you pay.</span>{' '}
            No surprise invoices. No hidden fees. Ever.
          </p>
        </div>
      </div>

      {/* Retainer Section */}
      <SectionContainer bgColor="bg-[#0D0D0D]">
        <SectionHeader
          eyebrow="Monthly Retainers"
          heading="Long-Term Growth & Maintenance"
          subheading="Predictable monthly costs. Consistent results. Cancel anytime."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {retainerTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
        <p className="text-center text-[#666] text-xs mt-6">
          Billed monthly. Prices shown in {currency}. No lock-in contracts.
        </p>
      </SectionContainer>
    </>
  );
}
