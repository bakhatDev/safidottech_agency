import { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'p1',
    name: 'Starter',
    priceUSD: 499,
    pricePKR: 139720,
    description: 'Perfect for small businesses looking to establish a basic online presence.',
    features: ['Responsive 5-page Website', 'Basic SEO Setup', 'Contact Form Integration', '1 Month Free Support'],
    isPopular: false,
    ctaLabel: 'Get Started',
    ctaHref: '/contact'
  },
  {
    id: 'p2',
    name: 'Growth',
    priceUSD: 999,
    pricePKR: 279440,
    description: 'Ideal for growing companies needing advanced features and optimizations.',
    features: ['Custom Web Application', 'Advanced SEO & Analytics', 'CMS Integration', 'E-commerce Capabilities', '3 Months Support'],
    isPopular: true,
    ctaLabel: 'Start Growing',
    ctaHref: '/contact'
  },
  {
    id: 'p3',
    name: 'Enterprise',
    priceUSD: 2499,
    pricePKR: 699320,
    description: 'Comprehensive digital solutions for large-scale operations.',
    features: ['Bespoke Enterprise Architecture', 'Full-stack Development', 'Performance Optimization', 'Dedicated Account Manager', '1 Year Priority Support'],
    isPopular: false,
    ctaLabel: 'Contact Sales',
    ctaHref: '/contact'
  }
];
