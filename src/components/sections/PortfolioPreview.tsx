"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import PortfolioCard from '@/components/shared/PortfolioCard';
import Button from '@/components/shared/Button';
import { portfolioItems } from '@/data/portfolio';
import { cn } from '@/lib/cn';

export default function PortfolioPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const displayItems = portfolioItems.slice(0, 4);

  return (
    <SectionContainer>
      <SectionHeader
        align="left"
        eyebrow="Our Recent Work"
        heading="Results you can see. Performance you can measure."
        className="mb-12"
      />

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-[-24px]">
            {displayItems.map((item) => (
              <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] pl-[24px]">
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-10 w-12 h-12 rounded-full border border-[#2A2A2A] bg-[#111111]/80 backdrop-blur-sm items-center justify-center text-white hover:border-[#C2F026] hover:text-[#C2F026] transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <button
          onClick={scrollNext}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-10 w-12 h-12 rounded-full border border-[#2A2A2A] bg-[#111111]/80 backdrop-blur-sm items-center justify-center text-white hover:border-[#C2F026] hover:text-[#C2F026] transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === selectedIndex ? 'bg-[#C2F026] w-6' : 'bg-[#2A2A2A] w-2'
            )}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          label="View All Work →"
          href="/portfolio"
          variant="ghost"
        />
      </div>
    </SectionContainer>
  );
}
