import { cmsAdapter } from '@/adapters';
import type { Service, ServiceDetail } from '@/types';

/**
 * ContentService
 * Provides a clean interface for UI components to fetch dynamic content.
 * Abstracts away the underlying CMS adapter implementation.
 */
export const ContentService = {
  getServices: (): Promise<Service[]> => {
    return cmsAdapter.getServices();
  },

  getService: (slug: string): Promise<ServiceDetail | null> => {
    return cmsAdapter.getService(slug);
  },
};
