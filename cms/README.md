# Sanity Studio - Safi Dot Tech Content Management

This is the Sanity Studio configuration for managing all content for the Safi Dot Tech website.

## Setup

### Prerequisites
- Node.js 18+ installed
- Environment variables configured (see `.env` setup below)

### Installation

1. Navigate to the cms directory:
```bash
cd cms
```

2. Install dependencies:
```bash
npm install
```

3. Environment Variables
Copy the root `.env.local` which contains the required Sanity credentials:
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_TOKEN`

## Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Sanity Studio dev server on `http://localhost:3333`

### Build
```bash
npm run build
```
Builds the production-ready Studio

### Preview
```bash
npm run preview
```
Preview the built Studio locally

## Project Structure

```
/cms
├── schemas/               # Sanity document type schemas
│   ├── post.ts           # Blog post schema
│   ├── project.ts        # Portfolio project schema
│   ├── service.ts        # Service offering schema
│   ├── team.ts           # Team member schema
│   ├── pricing.ts        # Pricing tier schema
│   ├── testimonial.ts    # Client testimonial schema
│   ├── siteConfig.ts     # Global site configuration (singleton)
│   ├── category.ts       # Blog category schema
│   ├── blockContent.ts   # Rich text content schema
│   └── index.ts          # Schema exports
├── sanity.config.ts      # Studio configuration & plugins
├── sanity.cli.ts         # CLI configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies & scripts
└── README.md             # This file
```

## Accessing the Studio

Once the dev server is running:
1. Open `http://localhost:3333` in your browser
2. You'll see the Sanity Studio interface with all document types listed
3. Create, edit, and publish content using the Visual Editor and Desk Tool

## Document Types

### Post (Blog)
Content for blog articles with rich text, images, author references, and SEO metadata.

### Project (Portfolio)
Case studies and portfolio projects showcasing your work.

### Service
Service offerings with pricing, process steps, and FAQs.

### Team
Team member profiles with skills, social links, and department categories.

### Pricing
Pricing tier configuration for service offerings with USD and PKR pricing.

### Testimonial
Client testimonials and reviews with ratings.

### Site Config (Singleton)
Global website configuration (title, contact info, social links, analytics). 
**Note:** Only one instance should exist. The system prevents deletion of this document.

## Key Features

✅ **GROQ Queries** - Vision Tool for testing queries before use in the frontend
✅ **Asset Management** - Built-in image/media management with hotspot support
✅ **Rich Text Editing** - Full rich text support with links, lists, and decorations
✅ **References** - Link documents together (e.g., author references in blog posts)
✅ **Singleton Pattern** - Site config protected from deletion
✅ **Multilingual Ready** - Structure supports currency fields (USD/PKR)
✅ **SEO Metadata** - Meta title and description fields on all documents

## Development Tips

1. **Test GROQ Queries**: Use the Vision Tool to test GROQ queries
2. **Image Optimization**: Sanity automatically optimizes images - no need for manual processing
3. **Draft/Preview**: Use the Draft/Review flow before publishing
4. **Webhooks**: Configure webhooks in Sanity to trigger Next.js ISR on publish

## Deployment

For production deployment:
1. Build: `npm run build`
2. The built Studio can be deployed to Vercel, Netlify, or any static host
3. Ensure environment variables are set in your hosting platform

## Troubleshooting

### Port 3333 in use?
```bash
npm run dev -- -p 3334
```

### Schema errors?
Clear `.sanity` cache:
```bash
rm -rf .sanity
npm run dev
```

### Environment variables not loading?
Ensure `.env.local` exists in the root project directory with:
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

## More Information

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Content Modeling](https://www.sanity.io/docs/content-modeling-guide)
