import type { CMSAdapter } from './cmsInterface';
import { blogPosts } from '@/data/blog';
import { portfolioItems } from '@/data/portfolio';
import { services, serviceDetails } from '@/data/services';
import type { BlogPost, PortfolioItem, Service, ServiceDetail } from '@/types';

/**
 * mockAdapter
 * Uses static data from the /src/data directory.
 * Provides a seamless transition layer during development.
 */
export const mockAdapter: CMSAdapter = {
  getBlogPosts: async (): Promise<BlogPost[]> => {
    return blogPosts;
  },
  
  getBlogPost: async (slug: string): Promise<BlogPost | null> => {
    return blogPosts.find((p) => p.slug === slug) ?? null;
  },
  
  getPortfolioItems: async (): Promise<PortfolioItem[]> => {
    return portfolioItems;
  },
  
  getPortfolioItem: async (slug: string): Promise<PortfolioItem | null> => {
    return portfolioItems.find((p) => p.slug === slug) ?? null;
  },

  getServices: async (): Promise<Service[]> => {
    return services;
  },

  getService: async (slug: string): Promise<ServiceDetail | null> => {
    return serviceDetails.find((s) => s.slug === slug) ?? null;
  },
};
