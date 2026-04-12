"use client";

import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionContainer from '@/components/shared/SectionContainer';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/cn';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const leftColRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  // Autoplay Effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // GSAP Animation
  useGSAP(
    () => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: leftColRef }
  );

  return (
    <SectionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
        {/* Left Column: Rating Block */}
        <div ref={leftColRef} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Decorative Star Background */}
          <div className="absolute -top-10 -left-10 opacity-5 text-[#C2F026] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="240"
              height="240"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <span className="text-8xl font-bold text-white mb-4 relative z-10">4.9</span>
          
          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#C2F026"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <p className="text-[#999] text-sm font-medium uppercase tracking-widest mb-1">
            Based on verified client reviews
          </p>
          <p className="text-white font-bold text-xl uppercase tracking-tighter">
            30+ Happy Clients Globally
          </p>
        </div>

        {/* Right Column: Carousel */}
        <div 
          className="relative overflow-hidden" 
          ref={emblaRef}
          role="region"
          aria-label="Client testimonials carousel"
        >
          <div className="flex ml-[-24px]">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_50%] pl-[24px]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
