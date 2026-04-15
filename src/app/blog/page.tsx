import { pageMetadata } from '@/utils/metadata';
import { getAllBlogPosts } from '@/services/blogService';
import BlogPageClient from './_components/BlogPageClient';

export const metadata = pageMetadata.blog;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return <BlogPageClient posts={posts} />;
}
