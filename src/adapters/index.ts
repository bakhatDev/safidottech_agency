import { mockAdapter } from './mockAdapter';
import type { CMSAdapter } from './cmsInterface';

/**
 * cmsAdapter
 * Central point of access for all adapter consumers.
 * Switch this to sanityAdapter or another real adapter when CMS is integrated.
 */
export const cmsAdapter: CMSAdapter = mockAdapter;
