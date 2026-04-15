import type { BlogPost, PortfolioItem, RawBlogPost, RawPortfolioItem, Service, ServiceDetail } from '@/types';

/**
 * CMSAdapter Interface
 * Defines the contract that all CMS adapters (mock or real) must implement.
 */
export interface ICMSAdapter {
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | null>;
  getRecentBlogPosts(count: number): Promise<BlogPost[]>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(slug: string): Promise<PortfolioItem | null>;
  getServices(): Promise<Service[]>;
  getService(slug: string): Promise<ServiceDetail | null>;
}

/**
 * Transformer types for mapping raw CMS data to application types.
 */
export type BlogTransformer = (raw: RawBlogPost) => BlogPost;
export type PortfolioTransformer = (raw: RawPortfolioItem) => PortfolioItem;
