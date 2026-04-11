import type { BlogPost, PortfolioItem, RawBlogPost, RawPortfolioItem } from '@/types';

/**
 * CMSAdapter Interface
 * Defines the contract that all CMS adapters (mock or real) must implement.
 */
export interface CMSAdapter {
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | null>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(slug: string): Promise<PortfolioItem | null>;
}

/**
 * Transformer types for mapping raw CMS data to application types.
 */
export type BlogTransformer = (raw: RawBlogPost) => BlogPost;
export type PortfolioTransformer = (raw: RawPortfolioItem) => PortfolioItem;
