import type { CMSAdapter } from './cmsInterface';
import { blogPosts } from '@/data/blog';
import { portfolioItems } from '@/data/portfolio';

/**
 * mockAdapter
 * Uses static data from the /src/data directory.
 * Provides a seamless transition layer during development.
 */
export const mockAdapter: CMSAdapter = {
  getBlogPosts: async () => {
    return blogPosts;
  },
  
  getBlogPost: async (slug: string) => {
    return blogPosts.find((p) => p.slug === slug) ?? null;
  },
  
  getPortfolioItems: async () => {
    return portfolioItems;
  },
  
  getPortfolioItem: async (slug: string) => {
    return portfolioItems.find((p) => p.slug === slug) ?? null;
  },
};
