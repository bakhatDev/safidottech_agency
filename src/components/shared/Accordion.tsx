"use client";

import { useState } from 'react';
import { cn } from '@/lib/cn';

interface AccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  accentColor?: string;
  className?: string;
}

export default function Accordion({
  question,
  answer,
  defaultOpen = false,
  accentColor = 'text-[#C2F026]',
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('w-full border-b border-[#2A2A2A]', className)}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 cursor-pointer group text-left"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-lg group-hover:text-[#C2F026] transition-colors pr-4">
          {question}
        </span>
        <span
          className={cn(
            accentColor,
            'text-2xl transition-transform duration-300 shrink-0',
            isOpen ? 'rotate-45' : 'rotate-0'
          )}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <p className="text-[#999] text-sm lg:text-[15px] leading-relaxed py-4">
          {answer}
        </p>
      </div>
    </div>
  );
}
