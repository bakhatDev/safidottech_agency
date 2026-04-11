import { cn } from '@/lib/cn';

const row1Items = [
  "Registered Agency — Pakistan & UK ★",
  "Sub-5s Load Speed Guarantee ★",
  "Built-in SEO on Every Project ★",
  "MERN Stack Specialists ★",
].join(' ');

const row2Items = [
  "Active Since 2021 ★",
  "Client Portal Included ★",
  "98 Avg. PageSpeed Score ★",
  "Pakistan & UK Registered ★",
].join(' ');

export default function AwardsMarquee() {
  const row1Repetition = Array(4).fill(row1Items);
  const row2Repetition = Array(4).fill(row2Items);

  return (
    <div className="w-full bg-[#1A1A1A] py-12 lg:py-16 overflow-hidden flex flex-col gap-4 lg:gap-8">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-awards {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee-awards-left {
            animation: marquee-awards 25s linear infinite;
          }
          .animate-marquee-awards-right {
            animation: marquee-awards 25s linear infinite reverse;
          }
        `
      }} />

      {/* Row 1 */}
      <div className="relative flex whitespace-nowrap animate-marquee-awards-left select-none">
        <span className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-white/10 shrink-0 flex gap-4">
          {row1Repetition.map((text, i) => (
            <span key={i} className="px-2">{text}</span>
          ))}
        </span>
      </div>

      {/* Row 2 */}
      <div className="relative flex whitespace-nowrap animate-marquee-awards-right select-none">
        <span className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-[#C2F026]/10 shrink-0 flex gap-4">
          {row2Repetition.map((text, i) => (
            <span key={i} className="px-2">{text}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
