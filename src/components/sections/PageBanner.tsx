import SectionContainer from '@/components/shared/SectionContainer';
import EyebrowLabel from '@/components/shared/EyebrowLabel';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { cn } from '@/lib/cn';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
  icon?: 'house';
}

interface PageBannerProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  className?: string;
}

export default function PageBanner({
  title,
  eyebrow,
  subtitle,
  breadcrumbs,
  className,
}: PageBannerProps) {
  return (
    <section className={cn('relative overflow-hidden bg-[#111111] border-b border-[#C2F026]/10 py-16 md:py-24 lg:py-[120px]', className)}>
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none -translate-y-1/3 translate-x-1/3 xl:translate-x-1/4">
        <OptimizedImage
          src="/images/placeholder.svg"
          alt="Decorative pattern"
          fill
          objectFit="contain"
          className="opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-[#999] mb-4">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isFirst = index === 0;
            
            return (
              <div key={crumb.label} className="flex items-center gap-2">
                {!isFirst && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
                
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="flex items-center gap-1 hover:text-[#C2F026] transition-colors">
                    {crumb.icon === 'house' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C2F026] flex items-center gap-1">
                    {crumb.icon === 'house' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                    {crumb.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center">
          {eyebrow && <EyebrowLabel text={eyebrow} className="mb-4" />}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[#999] text-lg max-w-2xl mx-auto mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
