import type { BlogPost, PortfolioItem, RawBlogPost, RawPortfolioItem, Service, ServiceDetail, RawService } from '@/types';

/**
 * transformBlogPost
 * Maps raw CMS blog data to the internal BlogPost type.
 */
export function transformBlogPost(raw: RawBlogPost): BlogPost {
  // Serialize block content to HTML string
  let contentHtml = '';

  try {
    if (Array.isArray(raw.body) && raw.body.length > 0) {
      // Process blocks and group consecutive list items
      let html = '';
      let inList = false;
      let listType = '';

      raw.body.forEach((block: any) => {
        if (block._type === 'block') {
          const style = block.style || 'normal';
          const isListItem = block.listItem;

          // Convert children to HTML
          const text = block.children?.map((child: any) => {
            let content = child.text || '';
            if (child.marks?.includes('strong')) content = `<strong>${content}</strong>`;
            if (child.marks?.includes('em')) content = `<em>${content}</em>`;
            if (child.marks?.includes('code')) content = `<code>${content}</code>`;
            if (child.marks?.includes('underline')) content = `<u>${content}</u>`;
            if (child.marks?.includes('strike-through')) content = `<s>${content}</s>`;
            return content;
          }).join('') || '';

          // Handle lists
          if (isListItem === 'bullet') {
            if (!inList || listType !== 'bullet') {
              if (inList) html += `</ul>`;
              html += `<ul>`;
              inList = true;
              listType = 'bullet';
            }
            html += `<li>${text}</li>`;
          } else {
            // Close any open list
            if (inList) {
              html += `</${listType === 'bullet' ? 'ul' : 'ol'}>`;
              inList = false;
            }

            // Add regular block elements
            switch (style) {
              case 'h1':
                html += `<h1>${text}</h1>`;
                break;
              case 'h2':
                html += `<h2>${text}</h2>`;
                break;
              case 'h3':
                html += `<h3>${text}</h3>`;
                break;
              case 'h4':
                html += `<h4>${text}</h4>`;
                break;
              case 'h5':
                html += `<h5>${text}</h5>`;
                break;
              case 'h6':
                html += `<h6>${text}</h6>`;
                break;
              case 'blockquote':
                html += `<blockquote>${text}</blockquote>`;
                break;
              default:
                html += `<p>${text}</p>`;
            }
          }
        } else if (block._type === 'image') {
          // Close any open list before image
          if (inList) {
            html += `</${listType === 'bullet' ? 'ul' : 'ol'}>`;
            inList = false;
          }
          const alt = block.alt || 'blog content';
          html += `<img src="${block.asset?.url}" alt="${alt}" style="max-width: 100%; border-radius: 8px; margin: 20px 0;" />`;
        }
      });

      // Close any remaining open list
      if (inList) {
        html += `</${listType === 'bullet' ? 'ul' : 'ol'}>`;
      }

      contentHtml = html;
    } else if (!raw.body) {
      console.warn(`[Sanity] Blog post "${raw.title}" (${raw._id}) has no body content`);
    } else if (!Array.isArray(raw.body)) {
      console.warn(`[Sanity] Blog post "${raw.title}" body is not an array:`, typeof raw.body);
    }
  } catch (error) {
    console.error(`[Sanity] Error transforming blog post "${raw.title}":`, error);
  }

  return {
    id: raw._id,
    slug: raw.slug.current,
    title: raw.title,
    excerpt: raw.excerpt ?? '',
    content: contentHtml, // Map body to content
    author: raw.author?.name ?? 'SafiDotTech Team',
    authorSlug: raw.author?.slug?.current ?? 'safidottech',
    authorImage: raw.author?.image ?? undefined,
    authorBio: raw.author?.bio ?? undefined,
    authorRole: raw.author?.role ?? undefined,
    authorSocialLinks: raw.author?.socialLinks ? {
      linkedin: raw.author.socialLinks.linkedin ?? undefined,
      github: raw.author.socialLinks.github ?? undefined,
    } : undefined,
    date: raw.publishedAt ?? new Date().toISOString(),
    category: raw.categories?.[0]?.title ?? 'General',
    categorySlug: raw.categories?.[0]?.slug?.current ?? 'general',
    image: raw.mainImage?.asset?.url ?? '/images/placeholder.svg',
    tags: raw.tags ?? [],
    readTime: raw.readTime ?? 5,
    metaTitle: raw.seo?.metaTitle ?? raw.title,
    metaDescription: raw.seo?.metaDescription ?? raw.excerpt ?? '',
  };
}

/**
 * transformPortfolioItem
 * Maps raw CMS portfolio data to the internal PortfolioItem type.
 */
export function transformPortfolioItem(raw: RawPortfolioItem): PortfolioItem {
  return {
    id: raw._id,
    slug: raw.slug.current,
    title: raw.title,
    category: raw.category ?? 'Web Development',
    year: raw.year ?? new Date().getFullYear().toString(),
    image: raw.mainImage?.asset?.url ?? '/images/placeholder.svg',
    description: raw.description ?? '',
    tags: raw.tags ?? [],
    metaTitle: raw.seo?.metaTitle ?? raw.title,
    metaDescription: raw.seo?.metaDescription ?? raw.description ?? '',
  };
}

/**
 * transformService
 * Maps raw CMS service data to the internal Service type.
 */
export function transformService(raw: RawService): Service {
  return {
    id: raw._id,
    slug: raw.slug.current,
    title: raw.title,
    description: raw.description ?? '',
    shortDesc: raw.shortDesc ?? '',
    icon: raw.icon ?? 'fas fa-cube',
    features: raw.features ?? [],
    metaTitle: raw.seo?.metaTitle ?? raw.title,
    metaDescription: raw.seo?.metaDescription ?? raw.description ?? '',
  };
}

/**
 * transformServiceDetail
 * Maps raw CMS service data to the internal ServiceDetail type (includes detail fields).
 */
export function transformServiceDetail(raw: RawService): ServiceDetail {
  return {
    ...transformService(raw),
    heroTitle: raw.heroTitle ?? `${raw.title} That Ranks.`,
    fullDescription: raw.fullDescription ?? raw.description ?? '',
    baseUSD: raw.baseUSD ?? 0,
    basePKR: raw.basePKR ?? 0,
    gallery: raw.gallery?.map(g => g.asset?.url) ?? [],
    process: raw.process ?? [],
    faqs: raw.faqs ?? [],
  };
}
