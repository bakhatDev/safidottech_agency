import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostsByCategory } from '@/services/blogService';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import BlogCard from '@/components/shared/BlogCard';
import Button from '@/components/shared/Button';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  const slugs = Array.from(new Set(posts.map(p => p.categorySlug)));
  
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const posts = await getBlogPostsByCategory(params.slug);
  const categoryName = posts.length > 0 ? posts[0].category : params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return {
    title: `${categoryName} Guides | Safi Dot Tech`,
    description: `Expert guides and insights covering ${categoryName}. Learn from the specialists at Safi Dot Tech.`,
  };
}

export default async function CategoryArchivePage({ params }: PageProps) {
  const posts = await getBlogPostsByCategory(params.slug);
  
  // Try to get actual category name from first post, fallback to slug
  const categoryName = posts.length > 0 
    ? posts[0].category 
    : params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title={categoryName}
        eyebrow="Category"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Blog', href: '/blog' },
          { label: categoryName }
        ]}
      />

      {/* 2. Content Grid */}
      <SectionContainer>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-[#2A2A2A] rounded-2xl">
            <h2 className="text-white text-2xl font-bold mb-4">No articles found in this category</h2>
            <p className="text-[#999] mb-8 max-w-md">
              We haven&apos;t published any articles in this category yet. Check back soon for new insights.
            </p>
            <Button label="Back to Blog" href="/blog" variant="ghost" />
          </div>
        )}
      </SectionContainer>
    </main>
  );
}
