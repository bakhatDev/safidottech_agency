import { env } from '@/lib/config/env';
import { mockAdapter } from './mockAdapter';
import { sanityAdapter } from './sanityAdapter';
import { mockStorageAdapter } from './storage/mockStorageAdapter';
import { cloudinaryAdapter } from './storage/cloudinaryAdapter';

import type { ICMSAdapter } from './cmsInterface';
import type { IStorageAdapter } from '@/types';

const cmsProvider = env.CMS_PROVIDER;
const storageProvider = env.STORAGE_PROVIDER;

/**
 * cmsAdapter
 * Central point of access for all CMS consumers.
 * Injects either Sanity or Mock provider based on environment variables.
 */
export const cmsAdapter: ICMSAdapter = 
  cmsProvider === 'sanity' ? sanityAdapter : mockAdapter;

/**
 * storageAdapter
 * Central point of access for media storage.
 * Injects either Cloudinary or Mock provider based on environment variables.
 */
export const storageAdapter: IStorageAdapter = 
  storageProvider === 'cloudinary' ? cloudinaryAdapter : mockStorageAdapter;
