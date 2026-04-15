import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricing',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceUSD',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'pricePKR',
      title: 'Price (PKR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Plan Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isPopular',
      title: 'Mark as Popular',
      type: 'boolean',
      description: 'Display with highlighted styling',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Call-to-Action Label',
      type: 'string',
      description: 'e.g., "Get Started", "Choose Plan"',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Link',
      type: 'string',
      description: 'e.g., /contact or https://example.com',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
});
