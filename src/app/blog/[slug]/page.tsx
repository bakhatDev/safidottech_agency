import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug, getBlogPostsByCategory } from '@/services/blogService';
import { blogPosts as mockBlogPosts } from '@/data/blog';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import BlogPostSidebar from '@/components/shared/BlogPostSidebar';
import { formatDate } from '@/utils/formatters';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found | SafiDotTech' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch all posts to derive categories and tags for the sidebar
  const allPosts = await getAllBlogPosts();
  const allCategories = Array.from(new Set(allPosts.map((p) => p.category))).sort();
  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags))).sort();

  // Fetch related posts (same category, excluding current post)
  let relatedPosts = (await getBlogPostsByCategory(post.categorySlug))
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Fallback to mock data if no related posts found
  if (relatedPosts.length === 0) {
    relatedPosts = mockBlogPosts
      .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
      .slice(0, 3);
  }

  // If still no related posts, get any other posts from mock as last resort
  if (relatedPosts.length === 0) {
    relatedPosts = mockBlogPosts
      .filter((p) => p.id !== post.id)
      .slice(0, 3);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
              url: `/blog/author/${post.authorSlug}`,
            },
            mainEntity: {
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              datePublished: post.date,
            },
          }),
        }}
      />
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
              className="prose prose-invert prose-lime max-w-none prose-lg prose-p:text-[#A0A0A0] prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-6 prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-8 prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-6 prose-h4:text-xl prose-strong:text-white prose-blockquote:border-[#C2F026] prose-blockquote:bg-[#1A1A1A] prose-blockquote:p-6 prose-blockquote:rounded-xl prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio Card */}
            <div className="mt-20 bg-[#1C1C1C] border border-[#2A2A2A] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center text-center md:text-left transition-all duration-300 hover:border-[#C2F026]/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-[#2A2A2A]">
                 <OptimizedImage
                    src={post.authorImage || "/images/placeholder.svg"}
                    alt={post.author}
                    fill
                    className="object-cover"
                 />
              </div>
              <div className="flex-1">
                <span className="text-[#C2F026] text-xs font-bold uppercase tracking-widest mb-2 block">Written By</span>
                <div className="mb-3">
                  <Link
                    href={`/blog/author/${post.authorSlug}`}
                    className="text-2xl font-bold text-white hover:text-[#C2F026] transition-colors inline-block"
                  >
                    {post.author}
                  </Link>
                  {post.authorRole && (
                    <p className="text-[#999] text-sm mt-1">
                      {post.authorRole}
                    </p>
                  )}
                </div>
                <p className="text-[#999] leading-relaxed mb-6">
                  {post.authorBio || "Expert strategist at Safi Dot Tech specializing in high-performance web development and technical SEO. Building digital solutions that scale."}
                </p>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Link
                    href={`/blog/author/${post.authorSlug}`}
                    className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
                  >
                    View All Posts <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  {(post.authorSocialLinks?.linkedin || post.authorSocialLinks?.github) && (
                    <>
                      <span className="text-[#2A2A2A]">•</span>
                      <div className="flex gap-3">
                        {post.authorSocialLinks?.linkedin && (
                          <a
                            href={post.authorSocialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center text-[#999] hover:text-[#C2F026] transition-colors"
                            title="LinkedIn"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                          </a>
                        )}
                        {post.authorSocialLinks?.github && (
                          <a
                            href={post.authorSocialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center text-[#999] hover:text-[#C2F026] transition-colors"
                            title="GitHub"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 .5 6 1.5 6 7v1"/><path d="M9 22v-4a4.8 4.8 0 0 0-1-3.5c-3 .5-6 1.5-6 7v1"/><path d="M12 2c-3.3 0-6 2.7-6 6v3c0 5.5 3.4 9 6 10 2.6-1 6-4.5 6-10V8c0-3.3-2.7-6-6-6Z"/></svg>
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
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
    </>
  );
}
