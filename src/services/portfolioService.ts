import { cmsAdapter } from '@/adapters';
import type { PortfolioItem } from '@/types';

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  return cmsAdapter.getPortfolioItems();
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  return cmsAdapter.getPortfolioItem(slug);
}

export async function getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
  const items = await cmsAdapter.getPortfolioItems();
  const lowerCategory = category.toLowerCase();
  return items.filter(item => item.category.toLowerCase() === lowerCategory);
}
