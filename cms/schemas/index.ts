import blockContent from './blockContent';
import category from './category';
import post from './post';
import pricing from './pricing';
import project from './project';
import service from './service';
import siteConfig from './siteConfig';
import team from './team';
import testimonial from './testimonial';

// Re-export all schemas for use in sanity.config.ts
export const schemaTypes = [
  // Singletons
  siteConfig,
  // Documents
  post,
  project,
  service,
  team,
  pricing,
  testimonial,
  // References/Types
  category,
  blockContent,
];
