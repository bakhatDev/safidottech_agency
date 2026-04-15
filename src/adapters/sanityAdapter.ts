import { createClient } from '@sanity/client';
import { env } from '@/lib/config/env';
import { ICMSAdapter } from './cmsInterface';
import {
  BlogPost,
  PortfolioItem,
  RawBlogPost,
  RawPortfolioItem,
  Service,
  ServiceDetail,
  RawService
} from '@/types';
import {
  transformBlogPost,
  transformPortfolioItem,
  transformService,
  transformServiceDetail
} from './transformers';

/**
 * Sanity Client Configuration
 * Initialized with credentials from validated environment variables.
 */
const client = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
  token: env.SANITY_API_TOKEN,
});

/**
 * sanityAdapter
 * Production-ready CMS adapter utilizing the official Sanity client and GROQ queries.
 * All raw data is processed through transformers to ensure strict type-safety.
 */
export const sanityAdapter: ICMSAdapter = {
  getBlogPosts: async (): Promise<BlogPost[]> => {
    const query = `*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "mainImage": { "asset": { "url": mainImage.asset->url } },
      author->{
        name,
        slug,
        role,
        "image": image.asset->url,
        bio,
        "socialLinks": {
          "linkedin": linkedin,
          "github": github
        }
      },
      categories[]->{ title, slug },
      tags,
      readTime,
      seo
    }`;
    const results = await client.fetch<RawBlogPost[]>(query);
    return results.map(transformBlogPost);
  },

  getBlogPost: async (slug: string): Promise<BlogPost | null> => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      "mainImage": { "asset": { "url": mainImage.asset->url } },
      author->{
        name,
        slug,
        role,
        "image": image.asset->url,
        bio,
        "socialLinks": {
          "linkedin": linkedin,
          "github": github
        }
      },
      categories[]->{ title, slug },
      tags,
      readTime,
      seo
    }`;
    const result = await client.fetch<RawBlogPost | null>(query, { slug });
    return result ? transformBlogPost(result) : null;
  },

  getRecentBlogPosts: async (count: number): Promise<BlogPost[]> => {
    const query = `*[_type == "post"] | order(publishedAt desc, _createdAt desc)[0...${count}] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "mainImage": { "asset": { "url": mainImage.asset->url } },
      author->{
        name,
        slug,
        role,
        "image": image.asset->url,
        bio,
        "socialLinks": {
          "linkedin": linkedin,
          "github": github
        }
      },
      categories[]->{ title, slug },
      tags,
      readTime,
      seo
    }`;
    const results = await client.fetch<RawBlogPost[]>(query);
    return results.map(transformBlogPost);
  },

  getPortfolioItems: async (): Promise<PortfolioItem[]> => {
    const query = `*[_type == "project"] | order(year desc) {
      _id,
      title,
      slug,
      category,
      year,
      "mainImage": { "asset": { "url": mainImage.asset->url } },
      description,
      tags,
      seo
    }`;
    const results = await client.fetch<RawPortfolioItem[]>(query);
    return results.map(transformPortfolioItem);
  },

  getPortfolioItem: async (slug: string): Promise<PortfolioItem | null> => {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      year,
      "mainImage": { "asset": { "url": mainImage.asset->url } },
      description,
      tags,
      seo,
      client,
      services,
      liveUrl,
      summary,
      challenge,
      solution,
      "gallery": gallery[].asset->url,
      results,
      testimonial
    }`;
    const result = await client.fetch<RawPortfolioItem | null>(query, { slug });
    return result ? transformPortfolioItem(result) : null;
  },

  getServices: async (): Promise<Service[]> => {
    const query = `*[_type == "service"] | order(orderRank asc, _createdAt asc) {
      _id,
      title,
      slug,
      description,
      shortDesc,
      icon,
      features,
      seo,
      orderRank
    }`;
    const results = await client.fetch<RawService[]>(query);
    return results.map(transformService);
  },

  getService: async (slug: string): Promise<ServiceDetail | null> => {
    const query = `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      shortDesc,
      icon,
      features,
      seo,
      heroTitle,
      fullDescription,
      baseUSD,
      basePKR,
      "gallery": gallery[].asset->{url},
      process,
      faqs,
      orderRank
    }`;
    const result = await client.fetch<RawService | null>(query, { slug });
    return result ? transformServiceDetail(result) : null;
  },
};
