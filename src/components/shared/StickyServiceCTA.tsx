"use client";

import { useCurrency } from '@/hooks/useCurrency';
import { formatCurrency } from '@/utils/formatters';
import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';

interface StickyServiceCTAProps {
  baseUSD: number;
  basePKR: number;
  isPopular?: boolean;
}

export default function StickyServiceCTA({ baseUSD, basePKR, isPopular = true }: StickyServiceCTAProps) {
  const { currency } = useCurrency();
  const price = currency === 'USD' ? baseUSD : basePKR;

  return (
    <div className={cn(
      "sticky top-32 flex flex-col rounded-2xl border p-8 transition-all duration-300",
      isPopular 
        ? "bg-[#1A1A1A] border-[#C2F026] shadow-[0_20px_60px_rgba(194,240,38,0.08)]" 
        : "bg-[#1C1C1C] border-[#2A2A2A]"
    )}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C2F026] text-[#111] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular Choice
        </div>
      )}

      <h3 className="text-white text-xl font-bold mb-4 mt-2">Ready to Start?</h3>
      
      <div className="mb-6">
        <p className="text-[#999] text-sm mb-1">Starting from</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">
            {formatCurrency(price, currency)}
          </span>
          {currency === 'USD' && (
            <span className="text-[#999] text-sm">/ project</span>
          )}
        </div>
        {currency === 'PKR' && (
          <p className="text-[#C2F026] text-xs mt-2 font-medium">
            Includes 20% regional discount
          </p>
        )}
      </div>

      <Button 
        label="Get a Free Quote →" 
        href="/contact?type=quote" 
        variant="lime" 
        className="w-full justify-center" 
      />
      
      <p className="text-center text-[#666] text-xs mt-4">
        No obligations. Proposal within 24 hours.
      </p>
    </div>
  );
}
