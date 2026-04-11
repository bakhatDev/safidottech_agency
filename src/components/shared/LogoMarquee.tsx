"use client";

import { cn } from '@/lib/cn';

interface LogoMarqueeProps {
  items: string[];
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
    <div className={cn('w-full overflow-hidden whitespace-nowrap py-4', className)}>
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
        className="inline-flex gap-12 items-center hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[#999] text-sm lg:text-base font-medium uppercase tracking-widest px-4 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
