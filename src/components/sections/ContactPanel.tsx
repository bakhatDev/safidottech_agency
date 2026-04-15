import SectionContainer from '@/components/shared/SectionContainer';
import Button from '@/components/shared/Button';
import EyebrowLabel from '@/components/shared/EyebrowLabel';

export default function ContactPanel() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const whatsappMessage = encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? 'Hello! I would like to discuss a project.'
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <SectionContainer>
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-20 border border-[#2A2A2A] bg-gradient-to-br from-[#1A1A1A] to-[#111111]">
        {/* Concentric Circle SVG Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            <circle cx="400" cy="400" r="100" stroke="#C2F026" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="150" stroke="#C2F026" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="200" stroke="#C2F026" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="250" stroke="#C2F026" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="300" stroke="#C2F026" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="350" stroke="#C2F026" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="400" stroke="#C2F026" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Decorative Wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-white opacity-[0.03] font-bold text-6xl md:text-8xl lg:text-[12rem] tracking-tighter uppercase whitespace-nowrap">
            SAFIDOTTECH
          </span>
        </div>

        {/* Content Blocks (Centered) */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <EyebrowLabel text="Ready to start?" className="mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something That Ranks.
          </h2>
          <p className="text-[#999] text-base lg:text-lg max-w-2xl mx-auto mb-8">
            Get a free SEO audit, a no-pressure consultation, or a fixed project quote &mdash; whichever stage you&apos;re at.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button label="Start a Project →" variant="lime" href="/contact" />
            <Button label="Book a Free Call" variant="ghost" href="https://calendly.com/safidottech" />
          </div>

          <p className="text-[#666] text-xs mb-8">
            No contracts. No hidden costs. Just results.
          </p>

          {/* Contact Details Footer */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-sm">
            <a
              href="mailto:info@safidottech.com"
              className="text-[#999] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>📧</span> info@safidottech.com
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2F026] hover:underline flex items-center gap-2 font-medium"
            >
              <span>📱</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
