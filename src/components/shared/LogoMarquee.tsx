"use client";

import { cn } from '@/lib/cn';

interface MarqueeItem {
  label: string;
  icon?: string;
}

interface LogoMarqueeProps {
  items: (string | MarqueeItem)[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function LogoMarquee({
  items,
  speed = 25,
  direction = 'left',
  className,
}: LogoMarqueeProps) {
  const animationDirection = direction === 'right' ? 'reverse' : 'normal';

  return (
    <div className={cn('w-full overflow-hidden whitespace-nowrap py-8', className)}>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div
        className="inline-flex gap-16 lg:gap-24 items-center hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, index) => {
          const isObject = typeof item !== 'string';
          const label = isObject ? (item as MarqueeItem).label : (item as string);
          const icon = isObject ? (item as MarqueeItem).icon : null;

          return (
            <div
              key={`${label}-${index}`}
              className="flex items-center gap-4 text-[#999] transition-colors hover:text-[#C2F026] group shrink-0"
            >
              {icon && (
                <i className={cn(icon, "text-3xl lg:text-5xl transition-transform group-hover:scale-110")} />
              )}
              <span className="text-sm lg:text-lg font-bold uppercase tracking-[0.2em]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
