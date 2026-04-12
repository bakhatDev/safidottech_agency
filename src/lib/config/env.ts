import { z } from 'zod';

const envSchema = z.object({
  // Provider Selection
  CMS_PROVIDER: z.enum(['mock', 'sanity']).default('mock'),
  STORAGE_PROVIDER: z.enum(['mock', 'cloudinary']).default('mock'),

  // Site Identity
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SITE_NAME: z.string().default('SafiDotTech'),

  // Sanity
  SANITY_PROJECT_ID: z.string().optional(),
  SANITY_DATASET: z.string().default('production'),
  SANITY_API_TOKEN: z.string().optional(),

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
});

export const env = envSchema.parse({
  CMS_PROVIDER: process.env.CMS_PROVIDER,
  STORAGE_PROVIDER: process.env.STORAGE_PROVIDER,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  SANITY_DATASET: process.env.SANITY_DATASET,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});
