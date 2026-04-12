"use client";

import { useState, useMemo } from 'react';
import { TeamMember } from '@/types';
import SectionContainer from '@/components/shared/SectionContainer';
import TeamCard from '@/components/shared/TeamCard';
import { cn } from '@/lib/cn';

interface FilteredTeamGridProps {
  members: TeamMember[];
}

const CATEGORIES = ['All', 'Management', 'Development', 'Design', 'SEO & Marketing'] as const;
type Category = typeof CATEGORIES[number];

export default function FilteredTeamGrid({ members }: FilteredTeamGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredMembers = useMemo(() => {
    if (activeCategory === 'All') return members;
    
    return members.filter((member) => {
      // Logic: Ensure 'SEO & Marketing' matches members with the SEO category property
      if (activeCategory === 'SEO & Marketing') {
        return member.category === 'SEO' || member.category === 'Marketing';
      }
      return member.category === activeCategory;
    });
  }, [activeCategory, members]);

  return (
    <SectionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 lg:gap-16 items-start">
        
        {/* Sidebar: Role Filters */}
        <aside className="sticky top-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2 px-6">
              Filter by Role
            </h4>
            
            {/* Mobile: Horizontal scroll wrapper */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 lg:gap-4 pb-4 lg:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "whitespace-nowrap w-full text-left px-6 py-4 rounded-xl border transition-all duration-300",
                      isActive
                        ? "bg-[#C2F026] text-[#111111] font-bold border-[#C2F026] shadow-[0_4px_24px_rgba(194,240,38,0.25)]"
                        : "bg-[#1C1C1C] border-[#2A2A2A] text-[#999] hover:border-[#3A3A3A] hover:text-white"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {filteredMembers.map((member) => (
            <div 
              key={member.id} 
              className="animate-fade-in transition-all duration-500"
            >
              <TeamCard member={member} size="md" />
            </div>
          ))}
          
          {filteredMembers.length === 0 && (
            <div className="col-span-full py-20 text-center border border-dashed border-[#2A2A2A] rounded-2xl">
              <p className="text-[#666] italic">No team members found in this category.</p>
            </div>
          )}
        </div>

      </div>
    </SectionContainer>
  );
}
