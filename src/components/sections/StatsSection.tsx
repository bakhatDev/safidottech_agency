import SectionContainer from '@/components/shared/SectionContainer';
import StatCounter from '@/components/shared/StatCounter';
import { stats } from '@/data/stats';
import { cn } from '@/lib/cn';

export default function StatsSection() {
  return (
    <SectionContainer className="border-y border-[#2A2A2A]/50 !py-12">
      <div className={cn(
        "grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8",
        "lg:[&>*:not(:last-child)]:border-r lg:[&>*:not(:last-child)]:border-[#2A2A2A]"
      )}>
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center text-center">
            <StatCounter stat={stat} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
