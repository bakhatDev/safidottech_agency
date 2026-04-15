'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/types';
import PageBanner from '@/components/sections/PageBanner';
import BlogCard from '@/components/shared/BlogCard';
import SectionContainer from '@/components/shared/SectionContainer';
import Button from '@/components/shared/Button';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { formatDate } from '@/utils/formatters';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import NewsletterForm from '@/components/shared/NewsletterForm';

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from posts
  const allCategories = useMemo(() => {
    const categories = posts.map(p => p.category);
    return ['All', ...Array.from(new Set(categories))];
  }, [posts]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return posts;
    }
    return posts.filter(p => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Insights & Guides"
        eyebrow="The SafiDotTech Blog"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Blog' }
        ]}
      />

      {/* 2. Featured Section */}
      {featuredPost && (
        <SectionContainer className="!pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl overflow-hidden group transition-all duration-300 hover:border-[#3A3A3A]">
            {/* Image (Left) */}
            <div className="relative aspect-video lg:aspect-auto lg:h-[450px] overflow-hidden">
              <OptimizedImage
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority={true}
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#C2F026] text-[#111] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#C2F026] text-sm font-semibold uppercase tracking-widest">
                  {featuredPost.category}
                </span>
                <span className="text-[#666] text-sm" suppressHydrationWarning>
                  {formatDate(featuredPost.date)}
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`} className="group/title">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover/title:text-[#C2F026] transition-colors duration-300">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="text-[#999] text-lg leading-relaxed mb-8 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="mt-auto">
                 <Button
                  label="Read Featured Article →"
                  href={`/blog/${featuredPost.slug}`}
                  variant="lime"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </SectionContainer>
      )}

      {/* 3. Category Navigation */}
      <SectionContainer className="!py-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "border border-[#2A2A2A] text-[#999] px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:border-[#C2F026] hover:text-white",
                selectedCategory === cat && "border-[#C2F026] text-white bg-[#C2F026]/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionContainer>

      {/* 4. Post Grid */}
      <SectionContainer className="!pt-0">
        {gridPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* 5. Pagination Placeholder */}
            <div className="mt-16 flex items-center justify-center gap-4 text-[#666] font-medium">
              <button className="hover:text-white transition-colors">←</button>
              <button className="text-[#C2F026] border-b-2 border-[#C2F026] px-1">1</button>
              <button className="hover:text-white transition-colors">2</button>
              <button className="hover:text-white transition-colors">3</button>
              <span>...</span>
              <button className="hover:text-white transition-colors">→</button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#999] text-lg">No articles found in this category.</p>
          </div>
        )}
      </SectionContainer>

      {/* 6. Newsletter Inline */}
      <SectionContainer bgColor="bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto text-center py-12">
          <span className="text-[#C2F026] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay ahead of the algorithm.
          </h2>
          <p className="text-[#999] mb-10">
            Get the latest insights on web development and SEO delivered straight to your inbox. No spam, only value.
          </p>

          <NewsletterForm />
        </div>
      </SectionContainer>
    </main>
  );
}
