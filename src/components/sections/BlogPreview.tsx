'use client';

import { useEffect, useState } from 'react';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import Button from '@/components/shared/Button';
import { BlogPost } from '@/types';
import { getRecentBlogPosts } from '@/services/blogService';

export default function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const recentPosts = await getRecentBlogPosts(3);
        setPosts(recentPosts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <SectionContainer bgColor="bg-[#1A1A1A]">
      <SectionHeader
        align="center"
        eyebrow="Fresh From the Blog"
        heading="Insights that drive growth. Guides that actually work."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {!loading && posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center text-[#999] py-12">
            {loading ? 'Loading posts...' : 'No blog posts available yet.'}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          label="View All Posts →"
          href="/blog"
          variant="ghost"
        />
      </div>
    </SectionContainer>
  );
}
