"use client";

import OptimizedImage from '@/components/shared/OptimizedImage';
import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';
import type { PortfolioItem } from '@/types';

interface PortfolioCardProps {
  item: PortfolioItem;
  showOverlay?: boolean;
  className?: string;
}

export default function PortfolioCard({
  item,
  showOverlay = true,
  className,
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl overflow-hidden group aspect-video bg-[#1C1C1C] cursor-pointer',
        className
      )}
    >
      {/* Image */}
      <OptimizedImage
        src={item.image}
        alt={item.title}
        fill
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          {/* Category */}
          <span className="text-[#C2F026] text-xs font-medium uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {item.category}
          </span>

          {/* Title */}
          <h3 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {item.title}
          </h3>

          {/* Year */}
          <p className="text-[#999] text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            {item.year}
          </p>

          {/* CTA */}
          <Button
            label="See Details →"
            href={`/portfolio/${item.slug}`}
            variant="ghost"
            size="sm"
          />
        </div>
      )}
    </div>
  );
}
