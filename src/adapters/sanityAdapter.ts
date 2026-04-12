/**
 * Note: To activate this adapter, update /src/adapters/index.ts to export sanityAdapter instead of mockAdapter.
 */

import { CMSAdapter } from './cmsInterface';
import { 
  BlogPost, 
  PortfolioItem, 
  RawBlogPost, 
  RawPortfolioItem 
} from '@/types';
import { 
  transformBlogPost, 
  transformPortfolioItem 
} from './transformers';

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const SANITY_API_VERSION = '2021-10-21';

const SANITY_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

async function sanityFetch<T>(query: string): Promise<T[]> {
  if (!SANITY_PROJECT_ID) {
    console.warn('CMS Error: SANITY_PROJECT_ID is not defined. Returning empty results.');
    return [];
  }

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `${SANITY_URL}?query=${encodedQuery}`;

    const res = await fetch(url, {
      method: 'GET',
      cache: 'no-store', // Development stub uses no-store for fresh results
    });

    if (!res.ok) {
      throw new Error(`Sanity fetch failed with status: ${res.status}`);
    }

    const { result } = await res.json();
    return result as T[];
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return [];
  }
}

export const sanityAdapter: CMSAdapter = {
  getBlogPosts: async (): Promise<BlogPost[]> => {
    const query = '*[_type == "post"] | order(publishedAt desc)';
    const results = await sanityFetch<RawBlogPost>(query);
    return results.map(transformBlogPost);
  },

  getBlogPost: async (slug: string): Promise<BlogPost | null> => {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
    const result = await sanityFetch<RawBlogPost>(query);
    return result.length > 0 ? transformBlogPost(result[0] as unknown as RawBlogPost) : null;
  },

  getPortfolioItems: async (): Promise<PortfolioItem[]> => {
    const query = '*[_type == "project"] | order(year desc)';
    const results = await sanityFetch<RawPortfolioItem>(query);
    return results.map(transformPortfolioItem);
  },

  getPortfolioItem: async (slug: string): Promise<PortfolioItem | null> => {
    const query = `*[_type == "project" && slug.current == "${slug}"][0]`;
    const result = await sanityFetch<RawPortfolioItem>(query);
    return result.length > 0 ? transformPortfolioItem(result[0] as unknown as RawPortfolioItem) : null;
  },

  getServices: async (): Promise<any[]> => {
    const query = '*[_type == "service"] | order(orderRank asc)';
    const results = await sanityFetch<any>(query);
    return results; // Transformers for services can be added once schemas are final
  },

  getService: async (slug: string): Promise<any | null> => {
    const query = `*[_type == "service" && slug.current == "${slug}"][0]`;
    const result = await sanityFetch<any>(query);
    return result.length > 0 ? result[0] : null;
  },
};
