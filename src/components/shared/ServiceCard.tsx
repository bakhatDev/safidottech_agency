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
        'hover:border-[#3A3A3A] hover:shadow-[0_20px_60px_rgba(194,240,38,0.08)]',
        className
      )}
    >
      {/* Icon Area */}
      <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C2F026]/10">
        <span className="text-xl">{service.icon}</span>
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
