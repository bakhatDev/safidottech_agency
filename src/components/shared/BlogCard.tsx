"use client";

import OptimizedImage from '@/components/shared/OptimizedImage';
import Button from '@/components/shared/Button';
import { formatDate } from '@/utils/formatters';
import { cn } from '@/lib/cn';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  variant?: 'default' | 'compact';
}

export default function BlogCard({ post, className, variant = 'default' }: BlogCardProps) {
  const isCompact = variant === 'compact';

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl bg-[#1C1C1C] overflow-hidden border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 group',
        isCompact ? 'flex-row items-center gap-4 border-none bg-transparent p-0' : '',
        className
      )}
    >
      {/* Image Area */}
      <div className={cn(
        "relative overflow-hidden shrink-0",
        isCompact ? "w-24 h-24 rounded-lg" : "aspect-video"
      )}>
        <OptimizedImage
          src={post.image}
          alt={post.title}
          fill
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className={cn("flex flex-col", isCompact ? "flex-1 min-w-0" : "w-full")}>
        {/* Meta Row */}
        <div className={cn(
          "flex items-center gap-3",
          isCompact ? "mb-1" : "px-5 pt-5 pb-2"
        )}>
          {!isCompact && (
            <span className="bg-[#C2F026]/10 text-[#C2F026] text-xs font-medium px-2 py-1 rounded">
              {post.category}
            </span>
          )}
          <span className="text-[#999] text-[10px] uppercase tracking-wider" suppressHydrationWarning>
            {formatDate(post.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-bold text-white transition-colors group-hover:text-[#C2F026]",
          isCompact ? "text-sm line-clamp-2" : "text-lg px-5 pt-2 pb-1 line-clamp-2"
        )}>
          {post.title}
        </h3>

        {!isCompact && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
