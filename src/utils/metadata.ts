import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://safidottech.com';
const SITE_NAME = 'Safi Dot Tech';

export function generatePageMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = opts.title.includes(SITE_NAME) ? opts.title : `${opts.title} | ${SITE_NAME}`;
  const url = opts.path ? `${SITE_URL}${opts.path}` : SITE_URL;
  const image = opts.image ?? `${SITE_URL}/images/og-image.jpg`;

  return {
    title: fullTitle,
    description: opts.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: opts.description,
      images: [image],
    },
  };
}

export const pageMetadata = {
  home: generatePageMetadata({ 
    title: 'Web Design & SEO Agency | Safi Dot Tech', 
    description: 'MERN Stack web development with built-in SEO and sub-5s load speeds. Registered in Pakistan & UK. Free SEO audit. Serving clients globally.', 
    path: '/' 
  }),
  about: generatePageMetadata({ 
    title: 'About Safi Dot Tech | Registered Digital Agency', 
    description: 'Founded in 2021, registered in Pakistan & UK. We build fast, SEO-ready websites for businesses worldwide. Learn our story and meet the team.', 
    path: '/about' 
  }),
  services: generatePageMetadata({ 
    title: 'Web Design, SEO & Dev Services | Safi Dot Tech', 
    description: 'Web design, MERN development, SEO, e-commerce, and speed optimisation. Transparent pricing. Sub-5s guarantee. Registered agency since 2021.', 
    path: '/services' 
  }),
  portfolio: generatePageMetadata({ 
    title: 'Portfolio | Web Design & Dev Case Studies', 
    description: 'Real projects. Real results. Explore Safi Dot Tech\'s portfolio of fast-loading, SEO-optimised websites and web applications.', 
    path: '/portfolio' 
  }),
  pricing: generatePageMetadata({ 
    title: 'Pricing | Web Design & SEO Packages from $499', 
    description: 'Honest, transparent pricing. Fixed packages from $499. Custom quotes available. PKR pricing for Pakistani clients. No hidden fees.', 
    path: '/pricing' 
  }),
  blog: generatePageMetadata({ 
    title: 'Blog | Web Dev, SEO & E-Commerce Guides', 
    description: 'Expert guides on web development, SEO, and digital growth. Written by the Safi Dot Tech team. No fluff — only actionable insights.', 
    path: '/blog' 
  }),
  team: generatePageMetadata({ 
    title: 'Our Team | MERN & SEO Specialists | Safi Dot Tech', 
    description: 'Meet the specialists behind Safi Dot Tech. MERN Stack developers, SEO experts, and designers delivering performance websites worldwide.', 
    path: '/team' 
  }),
  contact: generatePageMetadata({ 
    title: 'Contact Safi Dot Tech | Start Your Project Today', 
    description: 'Get a free quote, SEO audit, or consultation. Web development, SEO, and e-commerce. Registered in Pakistan & UK. We respond within 24h.', 
    path: '/contact' 
  }),
};

