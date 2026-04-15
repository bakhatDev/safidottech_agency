"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types';
import BlogCard from '@/components/shared/BlogCard';
import { cn } from '@/lib/cn';

interface BlogPostSidebarProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  allCategories: string[];
  allTags: string[];
}

export default function BlogPostSidebar({
  post,
  relatedPosts,
  allCategories,
  allTags
}: BlogPostSidebarProps) {
  const [copied, setCopied] = useState(false);
  const [shareLinks, setShareLinks] = useState<Array<{ name: string; icon: React.ReactNode; href: string }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUrl = window.location.href;
    setShareLinks([
      {
        name: 'Twitter',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        ),
        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`
      },
      {
        name: 'LinkedIn',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        ),
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
      }
    ]);
  }, [post.title]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="space-y-12">
      {/* Search Widget */}
      <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6">
        <h4 className="text-white font-bold mb-4">Search Articles</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#C2F026] transition-colors"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#C2F026]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>
      </div>

      {/* Social Share */}
      <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 text-center">
        <h4 className="text-white font-bold mb-6">Share this Post</h4>
        <div className="flex items-center justify-center gap-4">
          {mounted && shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#999] transition-all duration-300 hover:border-[#C2F026] hover:bg-[#C2F026] hover:text-[#111111]"
              title={`Share on ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
          <button
            onClick={handleCopyLink}
            className={cn(
              "w-10 h-10 border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#999] transition-all duration-300",
              copied ? "bg-[#C2F026] text-[#111111] border-[#C2F026]" : "hover:border-[#C2F026] hover:bg-[#C2F026] hover:text-[#111111]"
            )}
            title="Copy Link"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            )}
          </button>
        </div>
        {copied && (
          <p className="text-[#C2F026] text-xs mt-3 font-medium animate-fade-in">Link copied!</p>
        )}
      </div>

      {/* Related Content */}
      <div className="bg-[#111111]">
        <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
          Related Articles
          <span className="w-1.5 h-1.5 rounded-full bg-[#C2F026]"></span>
        </h4>
        <div className="space-y-6">
          {relatedPosts.map((rPost) => (
            <BlogCard key={rPost.id} post={rPost} variant="compact" />
          ))}
          {relatedPosts.length === 0 && (
            <p className="text-[#666] text-sm italic">No related articles found.</p>
          )}
        </div>
      </div>

      {/* Categories List */}
      <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6">
        <h4 className="text-white font-bold mb-6">Explore Categories</h4>
        <div className="flex flex-col gap-3">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat.toLowerCase()}`}
              className="group flex items-center justify-between text-sm text-[#999] hover:text-white transition-colors"
            >
              <span>{cat}</span>
              <span className="w-5 h-5 rounded bg-[#111111] text-[10px] flex items-center justify-center group-hover:bg-[#C2F026] group-hover:text-[#111111] transition-all">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6">
        <h4 className="text-white font-bold mb-6">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag.toLowerCase()}`}
              className="text-[11px] uppercase tracking-wider bg-[#111111] border border-[#2A2A2A] text-[#666] px-3 py-1.5 rounded-lg hover:border-[#C2F026] hover:text-[#C2F026] transition-all"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
