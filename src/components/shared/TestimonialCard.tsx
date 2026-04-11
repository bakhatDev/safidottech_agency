"use client";

import type { Testimonial } from '@/types';
import { cn } from '@/lib/cn';
import OptimizedImage from '@/components/shared/OptimizedImage';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? '#C2F026' : '#2A2A2A'}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col bg-[#1C1C1C] rounded-2xl border border-[#2A2A2A] p-6 h-full hover:border-[#3A3A3A] transition-colors duration-300',
        className
      )}
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white text-base leading-relaxed mt-4 mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Row */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar */}
        {testimonial.avatar ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
            <OptimizedImage
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              objectFit="cover"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#C2F026] flex items-center justify-center text-[#111] font-bold text-xs shrink-0">
            {getInitials(testimonial.author)}
          </div>
        )}

        {/* Info */}
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.author}</p>
          <p className="text-[#999] text-xs">
            {testimonial.title} · {testimonial.country}
          </p>
        </div>
      </div>
    </div>
  );
}
