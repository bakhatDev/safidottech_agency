import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/data/team';
import { getBlogPostsByAuthor } from '@/services/blogService';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import OptimizedImage from '@/components/shared/OptimizedImage';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const member = teamMembers.find((m) => m.slug === params.slug);
  
  if (!member) {
    return { title: 'Author Not Found | Safi Dot Tech' };
  }

  return {
    title: `Articles by ${member.name} | Safi Dot Tech`,
    description: `Read the latest articles and insights written by ${member.name}, ${member.role} at Safi Dot Tech.`,
  };
}

export default async function AuthorArchivePage({ params }: PageProps) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  const posts = await getBlogPostsByAuthor(member.slug);

  return (
    <main className="bg-[#111111] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title={member.name}
        eyebrow="Author"
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Blog', href: '/blog' },
          { label: member.name }
        ]}
      />

      {/* 2. Author Bio Section */}
      <SectionContainer>
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shrink-0 bg-[#111111] border border-[#2A2A2A] group">
            <OptimizedImage
              src={member.image || '/images/placeholder.svg'}
              alt={member.name}
              fill
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-white text-3xl font-bold mb-2">{member.name}</h2>
            <p className="text-[#C2F026] text-sm font-semibold uppercase tracking-widest mb-6">
              {member.role}
            </p>
            <p className="text-[#999] text-base leading-relaxed max-w-2xl">
              {member.bio}
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Insights Grid */}
      {posts.length > 0 && (
        <SectionContainer bgColor="bg-[#111111] pt-0">
          <SectionHeader
            heading={`Insights by ${member.name}`}
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
