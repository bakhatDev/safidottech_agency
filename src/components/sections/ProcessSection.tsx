"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';
import { processSteps } from '@/data/process';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          '.process-card',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set('.process-card', { opacity: 1, y: 0 });
      });
    },
    { scope: containerRef }
  );

  return (
    <SectionContainer bgColor="bg-[#111111]">
      <div ref={containerRef}>
        <SectionHeader
          align="center"
          eyebrow="How We Work"
          heading="From brief to launch in four disciplined steps."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="process-card relative flex flex-col bg-[#1C1C1C] rounded-xl p-6 border border-[#2A2A2A] overflow-hidden group opacity-0"
            >
              {/* Decorative Number */}
              <span className="absolute top-4 right-4 text-8xl font-bold text-white/10 leading-none select-none pointer-events-none">
                {step.number}
              </span>

              {/* Step Badge */}
              <div className="w-8 h-8 rounded-full bg-[#C2F026] text-[#111] font-bold text-sm flex items-center justify-center mb-6 relative z-10">
                {step.number}
              </div>

              {/* Text Content */}
              <h3 className="text-white font-semibold text-lg mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C2F026] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button
            label="Start Your Project →"
            href="/contact"
            variant="lime"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
