import type { BlogPost, PortfolioItem, RawBlogPost, RawPortfolioItem, Service, ServiceDetail, RawService } from '@/types';

/**
 * transformBlogPost
 * Maps raw CMS blog data to the internal BlogPost type.
 */
export function transformBlogPost(raw: RawBlogPost): BlogPost {
  return {
    id: raw._id,
    slug: raw.slug.current,
    title: raw.title,
    excerpt: raw.excerpt ?? '',
    content: '', // Rich text content will be handled by a separate component
    author: raw.author?.name ?? 'SafiDotTech Team',
    authorSlug: raw.author?.slug?.current ?? 'safidottech',
    date: raw.publishedAt ?? new Date().toISOString(),
    category: raw.categories?.[0]?.title ?? 'General',
    categorySlug: raw.categories?.[0]?.slug?.current ?? 'general',
    image: raw.mainImage?.asset?.url ?? '/images/placeholder.svg',
    tags: raw.tags ?? [],
    readTime: raw.readTime ?? 5,
    metaTitle: raw.seo?.metaTitle ?? raw.title,
    metaDescription: raw.seo?.metaDescription ?? raw.excerpt ?? '',
  };
}

/**
 * transformPortfolioItem
 * Maps raw CMS portfolio data to the internal PortfolioItem type.
 */
export function transformPortfolioItem(raw: RawPortfolioItem): PortfolioItem {
  return {
    id: raw._id,
    slug: raw.slug.current,
    title: raw.title,
    category: raw.category ?? 'Web Development',
    year: raw.year ?? new Date().getFullYear().toString(),
    image: raw.mainImage?.asset?.url ?? '/images/placeholder.svg',
    description: raw.description ?? '',
    tags: raw.tags ?? [],
    metaTitle: raw.seo?.metaTitle ?? raw.title,
    metaDescription: raw.seo?.metaDescription ?? raw.description ?? '',
  };
}

/**
 * transformService
 * Maps raw CMS service data to the internal Service type.
 */
export function transformService(raw: RawService): Service {
  return {
    id: raw._id,
    slug: raw.slug.current,
    title: raw.title,
    description: raw.description ?? '',
    shortDesc: raw.shortDesc ?? '',
    icon: raw.icon ?? 'fas fa-cube',
    features: raw.features ?? [],
    metaTitle: raw.seo?.metaTitle ?? raw.title,
    metaDescription: raw.seo?.metaDescription ?? raw.description ?? '',
  };
}

/**
 * transformServiceDetail
 * Maps raw CMS service data to the internal ServiceDetail type (includes detail fields).
 */
export function transformServiceDetail(raw: RawService): ServiceDetail {
  return {
    ...transformService(raw),
    heroTitle: raw.heroTitle ?? `${raw.title} That Ranks.`,
    fullDescription: raw.fullDescription ?? raw.description ?? '',
    baseUSD: raw.baseUSD ?? 0,
    basePKR: raw.basePKR ?? 0,
    gallery: raw.gallery?.map(g => g.asset?.url) ?? [],
    process: raw.process ?? [],
    faqs: raw.faqs ?? [],
  };
}
