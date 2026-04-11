"use client";

import OptimizedImage from '@/components/shared/OptimizedImage';
import Link from 'next/link';
import type { TeamMember } from '@/types';
import { cn } from '@/lib/cn';

interface TeamCardProps {
  member: TeamMember;
  size?: 'sm' | 'md';
  className?: string;
}

export default function TeamCard({ member, size = 'md', className }: TeamCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl bg-[#1C1C1C] border border-[#2A2A2A] overflow-hidden hover:border-[#3A3A3A] transition-all duration-300 group',
        className
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          'relative overflow-hidden w-full',
          size === 'md' ? 'aspect-[3/4]' : 'aspect-square'
        )}
      >
        <OptimizedImage
          src={member.image}
          alt={member.name}
          fill
          objectFit="cover"
          className="grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />

        {/* Floating Button */}
        <Link
          href={`/team/${member.slug}`}
          className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full border border-white/20 bg-[#111]/80 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#C2F026] group-hover:border-[#C2F026] group-hover:text-[#111]"
          aria-label={`View ${member.name}'s profile`}
        >
          <span className="text-lg font-light group-hover:rotate-45 transition-transform duration-300 inline-block">
            +
          </span>
        </Link>
      </div>

      {/* Content Area */}
      <div className="px-5 py-5">
        <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-[#C2F026] transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-[#999] uppercase tracking-wider font-medium">
          {member.role}
        </p>
      </div>
    </div>
  );
}
