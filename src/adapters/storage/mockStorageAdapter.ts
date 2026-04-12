import type { IStorageAdapter, StorageRef } from '@/types';

/**
 * mockStorageAdapter
 * Local-only stub implementation for content storage.
 */
export const mockStorageAdapter: IStorageAdapter = {
  upload: async (file: Buffer | string): Promise<StorageRef> => {
    console.log('Mock Upload Source:', typeof file === 'string' ? 'URL/Path' : 'Buffer');
    return {
      url: '/images/placeholder.svg',
      alt: 'Mock Uploaded Image',
      width: 1200,
      height: 800,
    };
  },

  delete: async (publicId: string): Promise<void> => {
    console.log('Mock Delete ID:', publicId);
  },

  getPublicUrl: (publicId: string): string => {
    return `/images/${publicId}.svg`;
  },
};
