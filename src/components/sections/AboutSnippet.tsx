"use client";

import SectionContainer from '@/components/shared/SectionContainer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Button from '@/components/shared/Button';

export default function AboutSnippet() {
  const services = [
    { num: '01', label: 'Web Design & Development' },
    { num: '02', label: 'SEO & Speed Optimisation' },
    { num: '03', label: 'E-Commerce (Shopify · WooCommerce)' },
  ];

  return (
    <SectionContainer bgColor="bg-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 items-center">
        {/* Left Column: Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#1C1C1C] w-full">
          <OptimizedImage
            src="/images/About Visual.jpg"
            alt="About SafiDotTech"
            fill
            objectFit="cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <p className="text-[#C2F026] text-xs font-medium uppercase tracking-widest mb-4">
            <span className="mr-2">➚</span> About The Agency
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            We are the agency that ships clean, fast, search-ready websites.
          </h2>

          {/* Body */}
          <p className="text-[#999] text-base leading-relaxed mb-8">
            Founded in 2021 and registered in both Pakistan and the UK, we combine modern MERN stack engineering with deep SEO expertise. We don't just build sites that look good; we engineer platforms designed to dominate search rankings and convert traffic into revenue.
          </p>

          {/* Numbered List */}
          <div className="flex flex-col mb-10 w-full max-w-lg">
            {services.map((service) => (
              <div
                key={service.num}
                className="flex items-center gap-4 border-b border-[#2A2A2A] py-3 first:pt-0 last:border-0"
              >
                <span className="text-[#C2F026] font-bold text-sm">
                  {service.num}
                </span>
                <span className="text-white text-base">
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="self-start">
            <Button
              label="Learn About Us"
              href="/about"
              variant="ghost"
              showArrow
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
