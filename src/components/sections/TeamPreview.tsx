"use client";

import { useState } from 'react';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import TeamCard from '@/components/shared/TeamCard';
import Button from '@/components/shared/Button';
import { teamMembers } from '@/data/team';
import { cn } from '@/lib/cn';

const categories = ['All', 'Management', 'Development', 'Design', 'SEO'];

export default function TeamPreview() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTeam = teamMembers
    .filter((member) => activeCategory === 'All' || member.category === activeCategory)
    .slice(0, 4);

  return (
    <SectionContainer>
      <SectionHeader
        eyebrow="The People Behind the Code"
        heading="Small team. Senior talent. Big results."
        align="left"
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 lg:gap-12">
        {/* Sidebar (Filters) */}
        <div className="flex flex-row overflow-x-auto lg:flex-col gap-3 pb-4 lg:pb-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'whitespace-nowrap text-left px-6 py-4 rounded-xl transition-all duration-300 border',
                activeCategory === category
                  ? 'bg-[#C2F026] text-[#111] font-bold border-[#C2F026]'
                  : 'bg-[#1C1C1C] text-[#999] border-[#2A2A2A] hover:border-[#3A3A3A] hover:text-white'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid (Right Side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredTeam.map((member) => (
            <TeamCard key={member.id} member={member} size="md" />
          ))}
          {filteredTeam.length === 0 && (
            <div className="col-span-full py-12 text-center text-[#666]">
              No team members found in this category.
            </div>
          )}
        </div>
      </div>

      {/* Section CTA */}
      <div className="flex justify-start mt-10 lg:mt-12 lg:ml-[25%]">
        <Button label="Meet The Full Team →" href="/team" variant="ghost" />
      </div>
    </SectionContainer>
  );
}
