import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Job Title/Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Management', value: 'Management' },
          { title: 'Development', value: 'Development' },
          { title: 'Design', value: 'Design' },
          { title: 'SEO', value: 'SEO' },
          { title: 'Marketing', value: 'Marketing' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Profile URL',
      type: 'url',
    }),
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
});
