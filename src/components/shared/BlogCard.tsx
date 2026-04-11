"use client";

import OptimizedImage from '@/components/shared/OptimizedImage';
import Button from '@/components/shared/Button';
import { formatDate } from '@/utils/formatters';
import { cn } from '@/lib/cn';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className }: BlogCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl bg-[#1C1C1C] overflow-hidden border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 group',
        className
      )}
    >
      {/* Image Area */}
      <div className="relative aspect-video overflow-hidden">
        <OptimizedImage
          src={post.image}
          alt={post.title}
          fill
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Meta Row */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-2">
        <span className="bg-[#C2F026]/10 text-[#C2F026] text-xs font-medium px-2 py-1 rounded">
          {post.category}
        </span>
        <span className="text-[#999] text-xs">
          {formatDate(post.date)} · {post.readTime} min read
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white px-5 pt-2 pb-1 line-clamp-2 group-hover:text-[#C2F026] transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-[#999] px-5 pb-4 line-clamp-2 flex-1">
        {post.excerpt}
      </p>

      {/* CTA */}
      <div className="px-5 pb-5">
        <Button
          label="Continue Reading →"
          href={`/blog/${post.slug}`}
          variant="ghost"
          size="sm"
        />
      </div>
    </div>
  );
}
