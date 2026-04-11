"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { StatItem } from '@/types';
import { cn } from '@/lib/cn';

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  stat: StatItem;
  className?: string;
}

export default function StatCounter({ stat, className }: StatCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!numberRef.current) return;

      const counter = { value: 0 };

      gsap.to(counter, {
        value: stat.value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(counter.value).toString();
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn('flex flex-col items-center text-center py-8', className)}>
      <p className="text-6xl font-bold text-white leading-none">
        <span ref={numberRef}>0</span>
        {stat.suffix}
      </p>
      <p className="text-sm text-[#999] mt-2 font-medium">{stat.label}</p>
    </div>
  );
}
