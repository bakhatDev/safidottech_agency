"use client";

import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border border-[#2A2A2A] bg-[#1C1C1C] p-6 group cursor-pointer transition-all duration-300',
        'hover:border-[#C2F026]/30 hover:shadow-[0_20px_60px_rgba(194,240,38,0.08)]',
        className
      )}
    >
      {/* Icon Area */}
      <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#C2F026]/10 mb-4 relative overflow-visible">
        {/* Default (White) State Icon */}
        <i className={cn(
          service.icon,
          "text-4xl text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute"
        )} aria-hidden="true"></i>
        
        {/* Hover (Lime) State Icon */}
        <i className={cn(
          service.icon,
          "text-4xl text-[#C2F026] transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute"
        )} aria-hidden="true"></i>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#999] line-clamp-2 mb-6 flex-1">
        {service.shortDesc}
      </p>

      {/* CTA */}
      <Button
        label="Read More →"
        href={`/services/${service.slug}`}
        variant="ghost"
        size="sm"
      />
    </div>
  );
}
