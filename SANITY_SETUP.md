# Sanity Studio Setup Guide - Safi Dot Tech

## ✅ Complete Setup Checklist

This document provides a quick reference for the Sanity Studio initialization completed for the Safi Dot Tech project.

## Directory Structure

```
safidottech/
├── cms/                          # ← Sanity Studio Root
│   ├── schemas/                  # Content type definitions
│   │   ├── blockContent.ts       # Rich text editor configuration
│   │   ├── category.ts           # Blog category document type
│   │   ├── post.ts               # Blog post document type
│   │   ├── pricing.ts            # Pricing tier document type
│   │   ├── project.ts            # Portfolio/project document type
│   │   ├── service.ts            # Service offering document type
│   │   ├── siteConfig.ts         # Global config (singleton pattern)
│   │   ├── team.ts               # Team member document type
│   │   ├── testimonial.ts        # Client testimonial document type
│   │   └── index.ts              # Schema exports
│   ├── sanity.cli.ts             # CLI configuration with env vars
│   ├── sanity.config.ts          # Main Studio configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── package.json              # Dependencies & scripts
│   ├── README.md                 # Studio documentation
│   └── .gitignore                # Git ignore rules
└── .env.local                    # Root env vars (used by cms too)
```

## Configuration Files

### 1. **sanity.cli.ts**
```typescript
// Reads SANITY_PROJECT_ID and SANITY_DATASET from process.env
// Falls back to defaults: '3f8l660q' and 'production'
const projectId = process.env.SANITY_PROJECT_ID || '3f8l660q';
const dataset = process.env.SANITY_DATASET || 'production';
```

### 2. **sanity.config.ts**
```typescript
// Main configuration with:
// ✅ Project title: "Safi Dot Tech Content Studio"
// ✅ deskTool() - for content management interface
// ✅ visionTool() - for GROQ query testing
// ✅ Schema types imported from ./schemas
// ✅ Singleton protection for siteConfig (prevents deletion)
// ✅ basePath: '/studio' for hosting on main domain
```

## Document Types (Schemas)

| Schema | Type | Purpose | Fields |
|--------|------|---------|---------|
| **post** | Document | Blog articles | title, slug, excerpt, body, author, publishedAt, mainImage, categories, tags, readTime, seo |
| **project** | Document | Portfolio cases | title, slug, category, year, mainImage, description, tags, client, challenge, solution, results, testimonial, gallery |
| **service** | Document | Service offerings | title, slug, description, shortDesc, icon, features, baseUSD, basePKR, gallery, process, faqs, orderRank |
| **team** | Document | Team profiles | name, slug, role, category, image, bio, skills, linkedin, github |
| **pricing** | Document | Pricing plans | name, priceUSD, pricePKR, description, features, isPopular, ctaLabel, ctaHref |
| **testimonial** | Document | Client reviews | quote, author, title, country, rating, avatar |
| **siteConfig** | Document (Singleton) | Global settings | title, description, logo, contactEmail, socialLinks, address, analytics, etc. |
| **category** | Reference | Blog categories | title, slug, description |
| **blockContent** | Array Type | Rich text | blocks, images, links, marks, decorations |

## Environment Variables

The CMS reads credentials from the root `.env.local`:

```env
# Required for Sanity Studio
SANITY_PROJECT_ID=3f8l660q
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

These are automatically read by `sanity.cli.ts` and `sanity.config.ts`.

## npm Scripts

### In `/cms` directory:

```bash
# Start development server on http://localhost:3333
npm run dev

# Build production-ready Studio
npm run build

# Preview built Studio locally
npm run preview

# Start production server
npm start
```

## Key Features Implemented

### ✅ TypeScript Support
- Full TypeScript configuration with strict mode
- Type-safe schema definitions using Sanity's `defineType` and `defineField`

### ✅ Singleton Pattern (siteConfig)
- Protected from deletion via `document.actions` configuration
- Only one instance can exist

### ✅ Plugins
- **Desk Tool**: Primary content management interface
- **Vision Tool**: GROQ query testing and debugging

### ✅ Schema Features
- **References**: Posts reference Authors (team), Projects reference Services
- **Rich Text**: blockContent with headings, lists, links, code, marks
- **Image Optimization**: Hotspot support for crop control
- **Validation**: Required fields, email validation, number ranges
- **SEO Metadata**: metaTitle and metaDescription on all public-facing docs

### ✅ Multilingual Support
- USD/PKR pricing fields on services and pricing tiers
- Configurable timezone in siteConfig

## Integration with Next.js Frontend

The Sanity Studio feeds data to the Next.js frontend via:

1. **Your Already-Configured Adapter**:
   ```typescript
   // Frontend uses sanityAdapter when CMS_PROVIDER=sanity
   // Transformers map Sanity documents to TypeScript interfaces
   // GROQ queries fetch typed data from Sanity
   ```

2. **ISR Revalidation**:
   ```typescript
   // The /api/v1/cms/revalidate webhook
   // Called by Sanity on document publish
   // Revalidates cache tags: 'blog', 'portfolio', 'services', 'team', 'config'
   ```

## Quick Start

### 1. Install Dependencies
```bash
cd cms
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Studio runs on `http://localhost:3333`

### 3. Create Content
- Click "Blog Post" → Create first blog post
- Click "Service" → Add service offering
- Click "Site Configuration" → Set global settings (only one allowed)

### 4. Deploy Changes
When you publish content in Sanity:
1. The webhook sends to `/api/v1/cms/revalidate`2. Next.js ISR revalidates affected pages
3. Frontend shows fresh content

## Mapping: Sanity → Frontend Types

```
Sanity Document Type  →  TypeScript Interface
─────────────────────────────────────────────
post                  →  BlogPost
project               →  PortfolioItem
service               →  Service / ServiceDetail
team                  →  TeamMember
testimonial           →  Testimonial
pricing               →  PricingTier
siteConfig            →  (Future global config type)
```

## Environment Variable Fallbacks

The CLI and config use fallbacks for development:

```typescript
// If SANITY_PROJECT_ID not set, defaults to '3f8l660q'
// If SANITY_DATASET not set, defaults to 'production'
```

These allow the CMS to run without manually setting env vars during development, but production deployments should always use explicit values.

## Constraints Satisfied ✅

✅ TypeScript configured for strict type-checking
✅ Singleton pattern implemented for siteConfig (deletion prevented)
✅ Schemas wire through `sanity.config.ts` from `schemas/index.ts`
✅ CLI configured with environment variable support
✅ Dev script runs on port 3333
✅ Build script configured
✅ Integration-ready with existing sanityAdapter and transformers

## What's Next?

1. **Deploy Sanity CLI Config** (optional):
   ```bash
   cd cms
   sanity login  # Authenticate with Sanity account
   ```

2. **Publish Deployment**:
   ```bash
   sanity deploy
   ```

3. **Configure Webhooks** in Sanity Dashboard:
   - Go to Sanity → Project Settings → Webhooks
   - Add webhook pointing to `/api/v1/cms/revalidate`
   - Set to trigger on "Publish" and "Unpublish" events

4. **Test Integration**:
   - Set `CMS_PROVIDER=sanity` in root `.env.local`
   - Create content in Studio
   - Verify frontend receives updates

## Documentation Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Guide**: https://www.sanity.io/docs/groq
- **Content Modeling**: https://www.sanity.io/docs/content-modeling-guide
- **Schema Types Reference**: https://www.sanity.io/docs/schema-types

## Troubleshooting

**Studio won't start?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Env vars not loading?**
Ensure `.env.local` exists in the **root** directory (not cms folder).

**Port 3333 in use?**
```bash
npm run dev -- -p 3334
```

**Schema errors?**
Clear Sanity cache:
```bash
rm -rf .sanity
npm run dev
```

---

**Setup completed by**: Claude Code Assistant
**Setup date**: 2026-04-14
**Studio version**: Sanity 3.37.0+
**TypeScript**: 5.0+
