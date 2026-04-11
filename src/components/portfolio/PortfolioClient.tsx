"use client";

import { useState } from 'react';
import type { PortfolioItem } from '@/types';
import PortfolioCard from '@/components/shared/PortfolioCard';
import SectionContainer from '@/components/shared/SectionContainer';
import Button from '@/components/shared/Button';
import ContactPanel from '@/components/sections/ContactPanel';
import { cn } from '@/lib/cn';

const CATEGORIES = ['All', 'Web Design', 'E-Commerce', 'SEO', 'Redesign', 'Frontend', 'Backend'];

interface PortfolioClientProps {
  items: PortfolioItem[];
}

export default function PortfolioClient({ items }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  // We check if the item category matches the active category.
  // We use .includes locally to be permissive if 'Web Development' maps to 'Web Design' etc.
  const filtered = items.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
           item.tags?.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()));
  });

  const visibleItems = filtered.slice(0, visibleCount);

  // Split into two columns for masonry stagger
  const col1 = visibleItems.filter((_, i) => i % 2 === 0);
  const col2 = visibleItems.filter((_, i) => i % 2 !== 0);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      {/* Section 2: Filter Bar */}
      <SectionContainer className="py-12 bg-[#111111]">
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar scroll-smooth">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6);
              }}
              className={cn(
                "whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                activeCategory === category
                  ? "bg-[#C2F026] text-[#111]"
                  : "border border-[#2A2A2A] text-[#999] hover:border-[#C2F026]/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </SectionContainer>

      {/* Section 3: Staggered Portfolio Grid */}
      <SectionContainer className="pb-24 bg-[#111111]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8 w-full">
            {col1.map(item => (
              <div key={item.id} className="w-full">
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 lg:mt-12 w-full">
            {col2.map(item => (
              <div key={item.id} className="w-full">
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Load More */}
        {filtered.length > visibleCount && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="ghost"
              label="Load More Projects"
              onClick={handleLoadMore}
            />
          </div>
        )}
      </SectionContainer>

      {/* Section 5: ContactPanel */}
      <ContactPanel />
    </>
  );
}
