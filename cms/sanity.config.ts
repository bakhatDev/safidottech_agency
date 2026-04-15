import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = process.env.SANITY_PROJECT_ID || '3f8l660q';
const dataset = process.env.SANITY_DATASET || 'production';

export default defineConfig({
  name: 'safi-dot-tech-studio',
  title: 'Safi Dot Tech Content Studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) => {
      // Prevent deletion of singleton documents
      if (context.schemaType === 'siteConfig') {
        return prev.filter(({ action }) => action !== 'delete');
      }
      return prev;
    },
  },
});
