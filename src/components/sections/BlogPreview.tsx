import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import Button from '@/components/shared/Button';
import { blogPosts } from '@/data/blog';

export default function BlogPreview() {
  return (
    <SectionContainer bgColor="bg-[#1A1A1A]">
      <SectionHeader
        align="center"
        eyebrow="Fresh From the Blog"
        heading="Insights that drive growth. Guides that actually work."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
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
