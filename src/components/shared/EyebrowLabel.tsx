import { cn } from '@/lib/cn';

interface EyebrowLabelProps {
  text: string;
  className?: string;
}

export default function EyebrowLabel({ text, className }: EyebrowLabelProps) {
  return (
    <p
      className={cn(
        'text-xs font-medium tracking-widest uppercase text-[#C2F026]',
        className
      )}
    >
      {text}
    </p>
  );
}
