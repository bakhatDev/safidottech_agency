import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cmsAdapter } from '@/adapters';
import { getBlogPostsByAuthor } from '@/services/blogService';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import OptimizedImage from '@/components/shared/OptimizedImage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Articles by Author | Safi Dot Tech`,
    description: `Read articles written by this author at Safi Dot Tech.`,
  };
}

export default async function AuthorArchivePage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch blog posts by author slug
  const posts = await getBlogPostsByAuthor(slug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  // Get author info from the first post
  const author = posts[0];
  const authorName = author.author;
  const authorImage = author.authorImage;
  const authorBio = author.authorBio;
  const authorRole = author.authorRole;
  const authorSocialLinks = author.authorSocialLinks;

  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title={authorName}
        eyebrow="Author"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Blog', href: '/blog' },
          { label: authorName }
        ]}
      />

      {/* 2. Author Bio Section */}
      <SectionContainer>
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shrink-0 bg-[#111111] border border-[#2A2A2A] group">
            <OptimizedImage
              src={authorImage || '/images/placeholder.svg'}
              alt={authorName}
              fill
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-white text-3xl font-bold mb-2">{authorName}</h2>
            {authorRole && (
              <p className="text-[#C2F026] text-sm font-semibold uppercase tracking-wider mb-4">
                {authorRole}
              </p>
            )}
            <p className="text-[#999] text-base leading-relaxed max-w-2xl mb-6">
              {authorBio || "Contributor at Safi Dot Tech"}
            </p>
            {(authorSocialLinks?.linkedin || authorSocialLinks?.github) && (
              <div className="flex gap-4 justify-center lg:justify-start">
                {authorSocialLinks?.linkedin && (
                  <a
                    href={authorSocialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-[#999] hover:text-[#C2F026] hover:bg-[#C2F026]/10 rounded-lg transition-all duration-300"
                    title="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                )}
                {authorSocialLinks?.github && (
                  <a
                    href={authorSocialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-[#999] hover:text-[#C2F026] hover:bg-[#C2F026]/10 rounded-lg transition-all duration-300"
                    title="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 .5 6 1.5 6 7v1"/><path d="M9 22v-4a4.8 4.8 0 0 0-1-3.5c-3 .5-6 1.5-6 7v1"/><path d="M12 2c-3.3 0-6 2.7-6 6v3c0 5.5 3.4 9 6 10 2.6-1 6-4.5 6-10V8c0-3.3-2.7-6-6-6Z"/></svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Insights Grid */}
      {posts.length > 0 && (
        <SectionContainer bgColor="bg-[#111111] pt-0">
          <SectionHeader
            heading={`Insights by ${authorName}`}
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </SectionContainer>
      )}
    </main>
  );
}
