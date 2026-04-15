import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Class',
      type: 'string',
      description: 'Font Awesome icon class (e.g., fas fa-laptop-code)',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    // Detail fields
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'baseUSD',
      title: 'Base Price (USD)',
      type: 'number',
    }),
    defineField({
      name: 'basePKR',
      title: 'Base Price (PKR)',
      type: 'number',
    }),
    defineField({
      name: 'gallery',
      title: 'Service Gallery',
      type: 'array',
      of: [
        defineField({
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Service Process',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Step Number',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Step Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDesc',
    },
  },
});
