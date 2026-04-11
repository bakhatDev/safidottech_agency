import { cn } from '@/lib/cn';
import EyebrowLabel from '@/components/shared/EyebrowLabel';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && <EyebrowLabel text={eyebrow} />}
      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="text-[#999] text-lg max-w-2xl">{subheading}</p>
      )}
    </div>
  );
}
