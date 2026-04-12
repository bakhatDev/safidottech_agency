import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/data/team';
import { getBlogPostsByAuthor } from '@/services/blogService';
import PageBanner from '@/components/sections/PageBanner';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import ContactPanel from '@/components/sections/ContactPanel';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { TeamMember } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  
  if (!member) {
    return { title: 'Member Not Found | SafiDotTech' };
  }

  return {
    title: `${member.name} · ${member.role} | Safi Dot Tech`,
    description: member.metaDescription,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const authorPosts = await getBlogPostsByAuthor(member.slug);

  return (
    <main className="bg-[#111111] min-h-screen text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={member.name}
        eyebrow={member.role}
        breadcrumbs={[
          { label: 'Home', href: '/', icon: 'house' },
          { label: 'Team', href: '/team' },
          { label: member.name }
        ]}
      />

      {/* 2. Main Profile Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Portrait */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1C1C1C] border border-[#2A2A2A] group">
            <OptimizedImage
              src={member.image || '/images/placeholder.svg'}
              alt={member.name}
              fill
              priority={true}
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
          </div>

          {/* Right Column: Profile Info */}
          <div className="flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {member.name}
            </h2>
            
            <article className="prose prose-invert prose-lime max-w-none text-[#999] leading-relaxed">
              <p>{member.bio}</p>
            </article>

            {/* Skills Pills */}
            {member.skills && member.skills.length > 0 && (
              <div className="mt-10">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-[#1C1C1C] border border-[#2A2A2A] text-xs font-medium px-4 py-1.5 rounded-full text-white transition-colors hover:border-[#C2F026]/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-[#2A2A2A] flex items-center gap-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#999] transition-all duration-300 hover:border-[#C2F026] hover:bg-[#C2F026] hover:text-[#111111]"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#999] transition-all duration-300 hover:border-[#C2F026] hover:bg-[#C2F026] hover:text-[#111111]"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Authored Insights Section */}
      {authorPosts.length > 0 && (
        <SectionContainer bgColor="bg-[#1A1A1A]">
          <SectionHeader
            heading={`Insights by ${member.name}`}
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {authorPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* 4. Contact Panel */}
      <ContactPanel />
    </main>
  );
}
