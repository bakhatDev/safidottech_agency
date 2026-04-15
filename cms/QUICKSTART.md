# Sanity Studio Quick Reference

## Getting Started in 3 Steps

```bash
# 1. Navigate to cms directory
cd cms

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

→ Open **http://localhost:3333** in browser

---

## Essential Commands

```bash
# Development (hot reload)
npm run dev

# Build for production
npm run build

# Preview built version
npm run preview

# Production server
npm start
```

---

## Document Types at a Glance

📝 **post** - Blog articles
🎨 **project** - Portfolio projects
💼 **service** - Service offerings
👥 **team** - Team members
💰 **pricing** - Pricing tiers
⭐ **testimonial** - Client reviews
⚙️ **siteConfig** - Global settings (singleton)
📂 **category** - Blog categories

---

## File Organization

```
cms/
├── schemas/          ← Add new document types here
│   └── yourType.ts
├── sanity.config.ts  ← Main configuration
├── sanity.cli.ts     ← CLI settings
├── tsconfig.json     ← TypeScript rules
├── package.json      ← Dependencies
└── README.md         ← Full documentation
```

---

## Common Tasks

### Create New Document Type
1. Create `schemas/yourType.ts`
2. Export in `schemas/index.ts`
3. Restart dev server

### Add Field to Existing Type
1. Edit the schema file
2. Use `defineField()` helper
3. Restart dev server

### Test GROQ Queries
1. Click Vision Tool (🔍 icon)
2. Write GROQ query
3. Run and preview results

---

## Environment Variables

Required in root `.env.local`:

```env
SANITY_PROJECT_ID=3f8l660q
SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

---

## Key Plugins

- **Desk Tool** - Main content editing interface
- **Vision Tool** - GROQ query debugging

---

## Frontend Integration

When you publish content, the webhook triggers ISR revalidation:

```
Sanity Publish
     ↓
Webhook → /api/v1/cms/revalidate
     ↓
Next.js revalidates cache tags
     ↓
Frontend shows fresh content
```

---

## Useful Links

- Studio: http://localhost:3333
- Sanity Docs: https://sanity.io/docs
- GROQ Reference: https://sanity.io/docs/groq
- Dashboard: https://manage.sanity.io

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3333 in use | `npm run dev -- -p 3334` |
| Env vars not working | Check `.env.local` in root |
| Schema errors | `rm -rf .sanity && npm run dev` |
| Dependencies broken | `rm -rf node_modules && npm install` |

---

**TypeScript**: ✅ Enabled with strict mode
**Singleton Pattern**: ✅ Implemented for siteConfig
**Plugins**: ✅ Desk Tool + Vision Tool configured
**Ready for**: ✅ Production deployment
