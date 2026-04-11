import Accordion from '@/components/shared/Accordion';
import type { FAQItem } from '@/types';
import { cn } from '@/lib/cn';

interface FAQListProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQList({ items, className }: FAQListProps) {
  return (
    <div className={cn('w-full space-y-0', className)}>
      {items.map((item, index) => (
        <Accordion
          key={item.question}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
