import React from 'react';
import { cn } from '@/lib/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

export default function SectionContainer({
  children,
  className,
  id,
  bgColor = 'bg-[#111111]',
}: SectionContainerProps) {
  return (
    <section id={id} className={cn(bgColor, 'w-full', className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-24">
        {children}
      </div>
    </section>
  );
}
