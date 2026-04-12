// ── Navigation ──────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ── Services ────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}
export interface ServiceDetail extends Service {
  heroTitle: string;
  fullDescription: string;
  baseUSD: number;
  basePKR: number;
  gallery: string[];
  process: ProcessStep[];
  faqs: FAQItem[];
}

// ── Portfolio ────────────────────────────────────────────
export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  // Detail fields
  client?: string;
  services?: string[];
  liveUrl?: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  gallery?: string[];
  results?: Array<{ label: string; value: string }>;
  testimonial?: {
    quote: string;
    author?: string;
    role?: string;
    name?: string;
    avatar?: string;
  };
}

// ── Team ─────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  category: 'Management' | 'Development' | 'Design' | 'SEO' | 'Marketing';
  image: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  metaTitle: string;
  metaDescription: string;
}

// ── Blog ──────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorSlug: string;
  date: string;
  category: string;
  categorySlug: string;
  image: string;
  tags: string[];
  readTime: number;
  metaTitle: string;
  metaDescription: string;
}

// ── Testimonials ──────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  country: string;
  rating: number;
  avatar?: string;
}

// ── Pricing ───────────────────────────────────────────────
export interface PricingTier {
  id: string;
  name: string;
  priceUSD: number;
  pricePKR: number;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
  ctaHref: string;
}

// ── Stats ─────────────────────────────────────────────────
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// ── Process ───────────────────────────────────────────────
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// ── FAQ ───────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

// ── Why Us ────────────────────────────────────────────────
export interface WhyUsItem {
  title: string;
  body: string;
}

// ── Forms ─────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message: string;
  serviceInterest?: string;
}
export interface NewsletterFormData {
  email: string;
}

// ── CMS Raw Types (for adapter layer) ─────────────────────
export interface RawBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  body?: unknown;
  author?: { name: string; slug?: { current: string } };
  publishedAt?: string;
  mainImage?: { asset: { url: string } };
  categories?: Array<{ title: string; slug: { current: string } }>;
  tags?: string[];
  readTime?: number;
  seo?: { metaTitle?: string; metaDescription?: string };
}
export interface RawPortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  year?: string;
  mainImage?: { asset: { url: string } };
  description?: string;
  tags?: string[];
  seo?: { metaTitle?: string; metaDescription?: string };
  // Raw detail fields
  client?: string;
  services?: string[];
  liveUrl?: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  gallery?: string[];
  results?: Array<{ label: string; value: string }>;
  testimonial?: {
    quote: string;
    author?: string;
    role?: string;
    name?: string;
    avatar?: string;
  };
}

// ── Currency ──────────────────────────────────────────────
export type Currency = 'USD' | 'PKR';
export interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}
