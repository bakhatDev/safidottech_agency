import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'Web Development' },
          { title: 'Mobile App', value: 'Mobile App' },
          { title: 'UI/UX Design', value: 'UI/UX Design' },
          { title: 'SEO', value: 'SEO' },
          { title: 'Branding', value: 'Branding' },
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
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
    // Detail fields
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Project URL',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      title: 'Project Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
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
      name: 'results',
      title: 'Results & Metrics',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Metric Label',
              type: 'string',
            }),
            defineField({
              name: 'value',
              title: 'Metric Value',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'author',
          title: 'Author Name',
          type: 'string',
        }),
        defineField({
          name: 'role',
          title: 'Author Role',
          type: 'string',
        }),
        defineField({
          name: 'avatar',
          title: 'Author Avatar',
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      year: 'year',
      image: 'mainImage',
    },
    prepare(selection) {
      const { category, year } = selection;
      return {
        title: selection.title,
        subtitle: `${category} • ${year}`,
        media: selection.image,
      };
    },
  },
});
