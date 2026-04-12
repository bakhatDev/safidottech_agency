import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug, getBlogPostsByCategory } from '@/services/blogService';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import BlogPostSidebar from '@/components/shared/BlogPostSidebar';
import { formatDate } from '@/utils/formatters';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    return { title: 'Post Not Found | SafiDotTech' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Fetch all posts to derive categories and tags for the sidebar
  const allPosts = await getAllBlogPosts();
  const allCategories = Array.from(new Set(allPosts.map((p) => p.category))).sort();
  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags))).sort();

  // Fetch related posts (same category, excluding current post)
  const relatedPosts = (await getBlogPostsByCategory(post.categorySlug))
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title={post.title}
        eyebrow={post.category}
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Blog', href: '/blog' },
          { label: post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title }
        ]}
      />

      <SectionContainer className="!py-16 md:!py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Main Content */}
          <div className="flex flex-col">
            {/* Post Meta */}
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-[#999] mb-6">
              <span className="bg-[#C2F026]/10 text-[#C2F026] px-3 py-1.5 rounded-lg border border-[#C2F026]/20">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} Min Read</span>
            </div>

            <h1 className="text-white font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 leading-tight">
              {post.title}
            </h1>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#2A2A2A] mb-12">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                fill
                priority={true}
                objectFit="cover"
              />
            </div>

            {/* Article Content */}
            <article 
              className="prose prose-invert prose-lime max-w-none prose-lg prose-p:text-[#A0A0A0] prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-strong:text-white prose-blockquote:border-[#C2F026] prose-blockquote:bg-[#1A1A1A] prose-blockquote:p-6 prose-blockquote:rounded-xl prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio Card */}
            <div className="mt-20 bg-[#1C1C1C] border border-[#2A2A2A] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center text-center md:text-left transition-all duration-300 hover:border-[#C2F026]/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-[#2A2A2A]">
                 <OptimizedImage
                    src="/images/placeholder.svg"
                    alt={post.author}
                    fill
                    className="object-cover"
                 />
              </div>
              <div>
                <span className="text-[#C2F026] text-xs font-bold uppercase tracking-widest mb-2 block">Written By</span>
                <Link 
                  href={`/blog/author/${post.authorSlug}`}
                  className="text-2xl font-bold text-white mb-3 inline-block hover:text-[#C2F026] transition-colors"
                >
                  {post.author}
                </Link>
                <p className="text-[#999] leading-relaxed mb-6">
                  Expert strategist at Safi Dot Tech specializing in high-performance web development and technical SEO. Building digital solutions that scale.
                </p>
                <Link 
                  href={`/blog/author/${post.authorSlug}`}
                  className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
                >
                  View All Posts <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <BlogPostSidebar 
            post={post} 
            relatedPosts={relatedPosts} 
            allCategories={allCategories} 
            allTags={allTags}
          />
        </div>
      </SectionContainer>
    </main>
  );
}
