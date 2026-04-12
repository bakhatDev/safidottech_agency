import { v2 as cloudinary } from 'cloudinary';
import { env } from '@/lib/config/env';
import type { IStorageAdapter, StorageRef } from '@/types';

// Initialize Cloudinary with validated environment variables
cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * cloudinaryAdapter
 * Implementation of IStorageAdapter utilizing the Cloudinary Node.js SDK.
 */
export const cloudinaryAdapter: IStorageAdapter = {
  upload: async (file: string | Buffer, options = {}): Promise<StorageRef> => {
    try {
      // For Node.js SDK, if buffer, we might need a workaround or just use the uploader.
      // Cloudinary handles local paths, external URLs, and base64 strings directly.
      const result = await cloudinary.uploader.upload(file as string, {
        folder: 'safidottech',
        resource_type: 'auto',
        ...options,
      });

      return {
        url: result.secure_url,
        alt: result.public_id,
        width: result.width,
        height: result.height,
      };
    } catch (error) {
      console.error('Cloudinary Upload Error:', error);
      throw new Error('Failed to upload media to Cloudinary storage');
    }
  },

  delete: async (publicId: string): Promise<void> => {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      if (result.result !== 'ok') {
        throw new Error(`Cloudinary destruction failed: ${result.result}`);
      }
    } catch (error) {
      console.error('Cloudinary Delete Error:', error);
      throw new Error('Failed to remove media from Cloudinary storage');
    }
  },

  getPublicUrl: (publicId: string): string => {
    return cloudinary.url(publicId, {
      secure: true,
    });
  },
};
