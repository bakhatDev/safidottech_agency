import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  // Singleton pattern - warning message about the single document
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 2,
      description: 'Meta description for SEO',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      options: {
        list: [
          { title: 'UTC', value: 'UTC' },
          { title: 'GMT+5 (PKT)', value: 'Asia/Karachi' },
          { title: 'America/New_York (EST)', value: 'America/New_York' },
          { title: 'Europe/London (GMT)', value: 'Europe/London' },
          { title: 'Australia/Sydney (AEDT)', value: 'Australia/Sydney' },
        ],
      },
    }),
    defineField({
      name: 'analyticsId',
      title: 'Google Analytics ID',
      type: 'string',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Configuration',
        subtitle: 'Global site settings',
      };
    },
  },
});
