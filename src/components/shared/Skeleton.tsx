import { cn } from '@/lib/cn';

interface SkeletonProps {
  className?: string;
  rounded?: boolean;
}

export function Skeleton({ className, rounded = true }: SkeletonProps) {
  return (
    <div
      className={cn(
        'bg-[#1C1C1C] animate-pulse',
        rounded ? 'rounded-lg' : '',
        className
      )}
    />
  );
}
