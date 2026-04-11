"use client";

import { useCurrency } from '@/hooks/useCurrency';
import { formatCurrency } from '@/utils/formatters';
import type { PricingTier } from '@/types';
import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';

interface PricingCardProps {
  tier: PricingTier;
  className?: string;
}

export default function PricingCard({ tier, className }: PricingCardProps) {
  const { currency } = useCurrency();
  const price = currency === 'USD' ? tier.priceUSD : tier.pricePKR;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-8 transition-all duration-300',
        tier.isPopular
          ? 'bg-[#1A1A1A] border-[#C2F026] scale-[1.02] shadow-[0_20px_60px_rgba(194,240,38,0.08)]'
          : 'bg-[#1C1C1C] border-[#2A2A2A]',
        className
      )}
    >
      {/* Popular Badge */}
      {tier.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#C2F026] text-[#111] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name & Description */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-xl mb-2">{tier.name}</h3>
        <p className="text-[#999] text-sm leading-relaxed">{tier.description}</p>
      </div>

      {/* Price Area */}
      <div className="mb-2">
        <span className="text-5xl font-bold text-white">
          {formatCurrency(price, currency)}
        </span>
      </div>
      <p className="text-[#999] text-sm mt-1">/ one-time</p>

      {/* Feature List */}
      <ul className="mt-8 mb-8 space-y-4 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            {/* Lime Checkmark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C2F026"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 mt-0.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-sm lg:text-base text-[#999] leading-tight">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        label={tier.ctaLabel}
        href={tier.ctaHref}
        variant={tier.isPopular ? 'lime' : 'ghost'}
        className="w-full"
      />
    </div>
  );
}
