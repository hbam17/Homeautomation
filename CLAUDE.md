# CLAUDE.md — Smart Home Installers Minneapolis

## Project Overview
Lead generation website for smart home installation services in the Minneapolis–St. Paul metro area. The site generates organic traffic via SEO, captures homeowner leads through forms and quote tools, and sells exclusive leads to local smart home installation companies.

**Domain:** smarthomeinstallersminneapolis.com  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + MDX  
**Hosting:** Vercel (Hobby plan)  
**Content:** 112 pages (4 core + 10 service + 20 area + 78 blog posts)

## Tech Stack Details

```
next: 14.x (App Router)
tailwindcss: 3.x
@next/mdx + next-mdx-remote: Blog content
next-sitemap: Auto-generated sitemap
@vercel/analytics: Performance tracking
react-hook-form: Lead capture forms
```

## Project Structure

```
/
├── CLAUDE.md                    # This file
├── content/
│   ├── blog/                    # MDX blog posts (78 files)
│   │   ├── smart-home-installation-cost-minneapolis.mdx
│   │   ├── control4-vs-savant-vs-crestron.mdx
│   │   └── ...
│   ├── services/                # MDX service pages (10 files)
│   │   ├── whole-home-automation.mdx
│   │   └── ...
│   └── areas/                   # MDX area pages (20 files)
│       ├── edina.mdx
│       └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with nav + footer
│   │   ├── page.tsx             # Homepage
│   │   ├── get-a-quote/
│   │   │   └── page.tsx         # Multi-step quote form
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog index with category filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Individual blog post (renders MDX)
│   │   ├── services/
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Service page template
│   │   └── smart-home-installation-[area]/
│   │       └── page.tsx         # Area page template
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx          # Sticky nav with CTA button
│   │   │   ├── Footer.tsx       # Full footer with service/area links
│   │   │   └── Breadcrumb.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Homepage hero
│   │   │   ├── ServicesGrid.tsx # 6-card services section
│   │   │   ├── MinnesotaCTA.tsx # Winter/MN-specific callout
│   │   │   ├── Testimonials.tsx
│   │   │   ├── AreasGrid.tsx    # Service areas list
│   │   │   ├── BlogPreview.tsx  # Latest 3 blog posts
│   │   │   └── FinalCTA.tsx     # Blue gradient CTA section
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── CalloutBox.tsx
│   │   ├── seo/
│   │   │   ├── JsonLd.tsx       # Schema markup component
│   │   │   └── MetaTags.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogSidebar.tsx  # CTA + TOC + related posts
│   │   │   ├── CategoryFilter.tsx
│   │   │   └── MDXComponents.tsx # Custom MDX component styling
│   │   └── forms/
│   │       ├── QuoteForm.tsx    # Multi-step quote form
│   │       └── NewsletterSignup.tsx
│   ├── lib/
│   │   ├── content.ts           # MDX loading utilities
│   │   ├── constants.ts         # Services, areas, site config
│   │   └── schema.ts            # JSON-LD schema generators
│   └── styles/
│       └── globals.css          # Tailwind imports + custom styles
├── public/
│   ├── images/                  # Optimized images
│   └── robots.txt
├── next.config.js
├── tailwind.config.ts
├── next-sitemap.config.js
└── package.json
```

## Design System

### Brand Colors (Tailwind config)
```
navy: '#0B1D35'       // Primary dark background
navyLight: '#132B4D'  // Gradient dark
blue: '#2563EB'       // Primary action color
blueLight: '#3B82F6'  // Hover state
bluePale: '#EFF6FF'   // Light blue background
cyan: '#06B6D4'       // Accent (Minnesota/winter theme)
teal: '#0D9488'       // Secondary accent
amber: '#F59E0B'      // Stars/ratings
green: '#059669'      // Success/checkmarks
```

### Typography
- **Display:** DM Serif Display (Google Fonts) — headings, titles
- **Body:** DM Sans (Google Fonts) — paragraphs, UI text
- Load via `next/font/google` for optimal performance

### Design Principles
1. **Navy gradient hero sections** on service, area, and blog index pages
2. **White content areas** with 2/3 + 1/3 grid (content + sticky sidebar)
3. **Sidebar always has:** Quote CTA (navy gradient card) + related content
4. **Cards:** 1px border, 16px radius, subtle shadow, hover lift effect
5. **CTAs:** Blue primary buttons, appear above fold, mid-content, and end
6. **Minnesota theme:** Snowflake icon + cyan accent on winter-specific content
7. **Trust signals:** Star ratings, "500+ projects", "4.9 rating", "50+ installers"

## SEO Requirements

### Every Page Must Have:
1. **Unique title tag** — primary keyword + city + value prop, under 60 chars
2. **Meta description** — 150-160 chars with keyword, CTA, local signal
3. **One H1 tag** — contains primary keyword naturally
4. **Structured H2/H3 hierarchy** — secondary keywords in H2s
5. **JSON-LD schema** — LocalBusiness (site-wide), Service (service pages), FAQ (service + blog), Article (blog posts)
6. **Internal links** — minimum 3 per page to related content
7. **CTA placement** — above fold, mid-content, end of content (min 3 per page)
8. **FAQ section** — 3-5 FAQs on service pages (helps AI overviews + featured snippets)
9. **Image alt text** — descriptive, includes keywords where natural
10. **Breadcrumb navigation** — on all pages except homepage

### Sitemap & Robots
- Auto-generate with `next-sitemap`
- Submit to Google Search Console immediately
- robots.txt allows all crawlers

### Schema Markup (JSON-LD)
Every page gets site-wide LocalBusiness schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smart Home Installers Minneapolis",
  "url": "https://smarthomeinstallersminneapolis.com",
  "areaServed": {
    "@type": "City",
    "name": "Minneapolis",
    "sameAs": "https://en.wikipedia.org/wiki/Minneapolis"
  },
  "serviceType": ["Smart Home Installation", "Home Automation", "Security System Installation"]
}
```

Service pages add Service schema. Blog posts add Article schema. FAQ sections add FAQSchema.

## Content (MDX) Format

### Blog Post Frontmatter
```yaml
---
title: "How Much Does Smart Home Installation Cost in Minneapolis?"
slug: "smart-home-installation-cost-minneapolis"
description: "Meta description here (150-160 chars)"
primaryKeyword: "smart home installation cost minneapolis"
secondaryKeywords: ["home automation cost", "smart home price"]
category: "Buying Guides"
date: "2026-02-10"
updatedDate: "2026-02-10"
author: "Alex Johnson"
readTime: "8 min"
featured: true
---
```

### Service Page Frontmatter
```yaml
---
title: "Whole-Home Automation Installation Minneapolis"
slug: "whole-home-automation"
description: "Meta description"
primaryKeyword: "whole home automation minneapolis"
icon: "Home"
costRange: "$10,000 – $100,000+"
---
```

### Area Page Frontmatter
```yaml
---
title: "Smart Home Installation in Edina, MN"
slug: "edina"
areaName: "Edina"
description: "Meta description"
neighborhoods: ["Country Club", "Morningside", "Grandview", "Indian Hills"]
---
```

## Content Writing Guidelines

### For AI-Generated Content (Human-Edited)
1. **Always reference Minneapolis/Twin Cities/Minnesota** — not generic "your city"
2. **Include MN-specific details:** neighborhoods, weather, energy companies (Xcel), local culture
3. **Cost data should reference local pricing** — not national averages
4. **Link to at least 3 internal pages** per article
5. **Include 3 CTAs per article:** after intro, mid-content callout box, end
6. **FAQ section at bottom** of every service page and buying guide
7. **Never use generic stock phrases** like "in today's fast-paced world"
8. **Word counts:** Service pages: 1,200-1,500. Area pages: 800-1,200. Blog posts: 1,500-3,000.

## Form Backend

### Quote Form (Multi-Step)
Steps:
1. Service interest (checkboxes)
2. Home type (single family, townhome, condo, new construction)
3. Budget range (under $1K, $1K-$5K, $5K-$15K, $15K-$50K, $50K+)
4. Timeline (ASAP, 1-3 months, 3-6 months, researching)
5. Contact info (name, email, phone, zip)

Backend options (in priority order):
- Formspree (free tier: 50 submissions/month)
- Next.js API route → email notification
- HubSpot free CRM API integration

## Commands for Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Generate sitemap
npm run postbuild

# Add a new blog post
# Just create a new .mdx file in content/blog/ with proper frontmatter
```

## Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables (if any)
4. Auto-deploys on every push to main

## Key Files to Generate First

Priority order for content generation:
1. Homepage (`src/app/page.tsx`)
2. Service pages (10 MDX files)
3. Area pages (top 10 first, then remaining 10)
4. Blog posts: Buying Guides (10 posts — these target money keywords)
5. Blog posts: Minnesota-Specific (10 posts — unique differentiator)
6. Blog posts: Reviews & Comparisons (10 posts)
7. Remaining blog categories

## Lead Buyer Data

These are potential lead buyers (MSP smart home companies) to reference when building out trust signals and understanding the market:
- ResTech Systems (Savant dealer, premium)
- ECSI System Integrators (full automation)
- SLH Home Systems (Control4, largest in region)
- Architechne (consulting + install, Burnsville)
- Western Systems (20+ years, Medina)
- Simple AVS (Twin Cities lighting + AV)
- Revience Smart (security + theater)
- Dean's Home Services (electrical + smart home)
- Randy's Electric (device installation)
