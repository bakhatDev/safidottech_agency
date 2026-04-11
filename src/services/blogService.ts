import { cmsAdapter } from '@/adapters';
import type { BlogPost } from '@/types';

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return cmsAdapter.getBlogPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return cmsAdapter.getBlogPost(slug);
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await cmsAdapter.getBlogPosts();
  return posts.filter(post => post.categorySlug === category || post.category === category);
}

export async function getBlogPostsByAuthor(authorSlug: string): Promise<BlogPost[]> {
  const posts = await cmsAdapter.getBlogPosts();
  return posts.filter(post => post.authorSlug === authorSlug);
}

export async function getRecentBlogPosts(count: number): Promise<BlogPost[]> {
  const posts = await cmsAdapter.getBlogPosts();
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
