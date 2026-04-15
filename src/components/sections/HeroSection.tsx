"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionContainer from '@/components/shared/SectionContainer';
import Button from '@/components/shared/Button';
import OptimizedImage from '@/components/shared/OptimizedImage';

function splitToChars(text: string) {
  return text.split('').map((char, i) => (
    <span key={i} className="hero-char inline-block" style={{ opacity: 0 }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Character stagger animation
        tl.fromTo(
          '.hero-char',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.6, delay: 0.2 }
        );

        // Eyebrow + Description fade in
        tl.fromTo(
          '.hero-eyebrow, .hero-desc',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.8
        );

        // CTAs fade up
        tl.fromTo(
          '.hero-ctas',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          1.1
        );

        // Right column fade in
        tl.fromTo(
          '.hero-visual',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          0.6
        );

        // Brand sub-row
        tl.fromTo(
          '.hero-brand-row',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          1.0
        );
      });

      // Fallback for reduced motion: Set end states immediately
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set('.hero-char, .hero-eyebrow, .hero-desc, .hero-ctas, .hero-visual, .hero-brand-row', {
          opacity: 1,
          y: 0,
          scale: 1
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <SectionContainer
      bgColor="bg-[#111111]"
      className="min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <OptimizedImage
          src="/images/hero bg.jpg"
          alt="Hero Background"
          fill
          priority
          objectFit="cover"
          className="opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#111111]" />
      </div>

      <div ref={containerRef} className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 py-12 md:py-20 lg:py-32 items-center">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <p className="hero-eyebrow text-xs uppercase tracking-[0.2em] text-[#999] mb-4" style={{ opacity: 0 }}>
              MERN Stack Digital Agency — Est. 2021
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none uppercase">
              <span className="block text-[#C2F026] italic mb-2">
                {splitToChars('Builds Fast.')}
              </span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>
                {splitToChars('Ranks Higher.')}
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-[#999] text-base lg:text-lg max-w-[420px] mt-6 leading-relaxed" style={{ opacity: 0 }}>
              We design and develop high-performance websites with built-in SEO
              that load fast, rank higher, and convert visitors into customers.
            </p>

            {/* Brand Sub-row */}
            <div className="hero-brand-row flex items-center gap-4 my-8" style={{ opacity: 0 }}>
              <span className="text-[10px] text-[#666] uppercase tracking-widest whitespace-nowrap">
                Registered in Pakistan &amp; UK
              </span>
              <div className="flex-1 h-px bg-[#2A2A2A]" />
              <span className="text-[10px] text-[#666] uppercase tracking-widest whitespace-nowrap">
                Since 2021
              </span>
            </div>

            {/* CTA Row */}
            <div className="hero-ctas flex flex-wrap gap-4 items-center" style={{ opacity: 0 }}>
              <Button
                label="View Our Work"
                variant="lime"
                href="/portfolio"
                showArrow
              />
              <Button
                label="Free SEO Audit"
                variant="ghost"
                href="/contact"
              />
            </div>
          </div>

          {/* Right Column — Visual */}
          <div className="hero-visual relative w-full aspect-square max-w-[440px] mx-auto hidden lg:flex items-center justify-center" style={{ opacity: 0 }}>
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(194,240,38,0.1)_0%,_transparent_70%)] rounded-full blur-2xl" />

            <OptimizedImage
              src="/images/hero-visual.png"
              alt="SafiDotTech Brand Visual"
              fill
              priority={true}
              objectFit="contain"
              className="drop-shadow-[0_20px_50px_rgba(194,240,38,0.15)] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
