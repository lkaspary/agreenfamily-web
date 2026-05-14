# agreenfamily.com — Project Map

> Last updated: May 2026  
> Status: Scaffolding phase

---

## 1. Mission & Concept

**agreenfamily.com** is a content-driven site that helps families adopt practical, affordable environmental habits. It earns revenue through Amazon and Walmart affiliate links embedded in articles, recommending eco-friendly products that match each article's topic.

---

## 2. Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Site framework | [Astro](https://astro.build) | Zero-JS by default, perfect for content sites |
| Styling | Tailwind CSS | Same approach as magdakaspary.com |
| Content | Markdown (.md) files | Simple, portable, version-controlled |
| Content schema | Astro Content Collections | Type-safe frontmatter, auto-routing |
| Deployment | Cloudflare Pages | Free, fast, auto-deploys on git push |
| Version control | GitHub | Source of truth for all code and content |
| Domain | Bluehost → agreenfamily.com | Already purchased |
| Newsletter | Beehiiv (future) | Free tier, good deliverability |
| Forms | Web3Forms | Free, no backend needed |
| Analytics | Cloudflare Analytics | Free, privacy-respecting |
| Affiliate | Amazon Associates + Walmart Affiliate | Monetization via product links in articles |

---

## 3. Folder Structure

```
agreenfamily.com/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Site navigation
│   │   ├── Footer.astro          # Footer with links, social, disclosure notice
│   │   ├── ArticleCard.astro     # Card used on landing page and article list
│   │   ├── FeaturedCarousel.astro # Rotating top stories on homepage
│   │   ├── AffiliateLink.astro   # Consistent affiliate link component
│   │   └── NewsletterSignup.astro # Beehiiv embed (future)
│   ├── content/
│   │   ├── config.ts             # Content collection schema
│   │   └── articles/             # One .md file per article
│   │       ├── reducing-plastic-kitchen.md
│   │       ├── family-composting-guide.md
│   │       └── eco-school-supplies.md
│   ├── layouts/
│   │   ├── Layout.astro          # Base HTML shell
│   │   └── ArticleLayout.astro   # Article page wrapper with author, date, etc.
│   ├── pages/
│   │   ├── index.astro           # Landing page
│   │   ├── articles.astro        # Full article list
│   │   ├── about.astro           # About the site
│   │   ├── disclosure.astro      # Affiliate disclosure (legally required)
│   │   └── articles/
│   │       └── [slug].astro      # Dynamic article pages
│   └── styles/
│       └── global.css            # Tailwind base + custom fonts
├── public/
│   ├── favicon.svg
│   └── images/                   # Static images for articles (future CDN)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── PROJECT_MAP.md                # This file
```

---

## 4. Pages

### `/` — Landing Page
- **Hero section**: site name, tagline, brief description
- **Featured carousel**: 3 rotating "top stories" (articles marked `featured: true` in frontmatter)
- **Article grid**: latest 6 articles with card layout
- **CTA**: newsletter signup (future)

### `/articles` — Article List
- Filterable by tag/category (e.g. Kitchen, Garden, Kids, Shopping)
- Shows all articles sorted by date, newest first
- Each article renders as an ArticleCard

### `/about` — About
- Why this site exists
- Who runs it (Leandro's story)
- Philosophy: small habits, real impact
- Link to contact

### `/disclosure` — Affiliate Disclosure
- Required by FTC for any affiliate monetization
- States clearly that agreenfamily.com earns from Amazon and Walmart links
- Auto-linked from footer

### `/articles/[slug]` — Article Pages
- Full article content rendered from Markdown
- Author, publish date, read time
- Tags/categories
- Related articles sidebar or section
- Affiliate product recommendations within content

---

## 5. Article Frontmatter Schema

Every article lives in `src/content/articles/` as a `.md` file with this frontmatter:

```yaml
---
title: "10 Easy Ways to Reduce Plastic in Your Kitchen"
description: "Simple swaps any family can make this week to dramatically cut single-use plastic."
date: 2026-05-01
author: "Leandro Kaspary"
tags: ["kitchen", "plastic-free", "shopping"]
image: "/images/plastic-free-kitchen.jpg"
imageAlt: "A kitchen counter with glass jars and reusable bags"
featured: true          # shows in homepage carousel if true
draft: false            # won't publish if true
affiliateProducts:      # optional, used in sidebar/footer of article
  - name: "Beeswax Wrap Set"
    url: "https://amzn.to/XXXXX"
    store: "amazon"
  - name: "Reusable Produce Bags"
    url: "https://www.walmart.com/affiliates/..."
    store: "walmart"
---
```

---

## 6. Design System

### Color Palette (Green/Nature theme)

| Token | Hex | Usage |
|---|---|---|
| `forest` | `#2D5016` | Primary dark green, headings |
| `leaf` | `#4A7C59` | Buttons, links, accents |
| `sage` | `#8BAE8A` | Subtle borders, icon fills |
| `cream` | `#F8F5F0` | Page background |
| `earth` | `#6B5B3E` | Warm brown for secondary text |
| `sky` | `#E8F4EA` | Light green tint for cards/highlights |
| `ink` | `#1A1A1A` | Primary text |
| `ink-muted` | `#555555` | Secondary text |
| `stone` | `#D4CFC9` | Borders, dividers |

### Typography
- **Headings**: Playfair Display (serif, Google Fonts)
- **Body**: Inter (sans-serif, Google Fonts)

---

## 7. Affiliate Integration Strategy

### Amazon Associates
1. Sign up at: https://affiliate-program.amazon.com
2. Niche: eco-friendly / sustainable family products
3. Search for products, generate affiliate links
4. Embed links in articles using the `<AffiliateLink>` component
5. Required disclosure: already covered in `/disclosure` page and footer

### Walmart Affiliate (Impact Network)
1. Sign up at: https://affiliates.walmart.com (via Impact)
2. Same approach as Amazon — search for matching eco products
3. Walmart is especially good for everyday family products at accessible prices

### Link placement strategy
- **In-article**: natural product mentions ("we use [these beeswax wraps](link)")
- **Product callout boxes**: a highlighted box at the end of each article with 2-3 recommended products
- **No fake reviews**: only recommend products that fit the article's genuine topic

---

## 8. Social Media Plan

| Platform | Handle (target) | Content strategy |
|---|---|---|
| Instagram | @agreenfamily | Photo tips, quick wins, product shots, family life |
| X (Twitter) | @agreenfamily | Short tips, article shares, environmental news |

### Content calendar approach
- 1 new article per week (Wednesday publish)
- Instagram post for each article on publish day
- 3 extra Instagram tips/week (Reels or carousel)
- X: 1 tweet per day (tip or article link)

---

## 9. Monetization Roadmap

| Phase | Action | Timeline |
|---|---|---|
| 1 | Publish 10+ articles | Months 1-2 |
| 2 | Apply to Amazon Associates | After 10 articles live |
| 3 | Apply to Walmart Affiliate | After 10 articles live |
| 4 | Add newsletter (Beehiiv free) | Month 2 |
| 5 | Sponsor a post (eco brands) | Month 4+ |
| 6 | Digital product (e.g. eco checklist PDF) | Month 6+ |

**Note:** Amazon Associates requires at least 3 qualifying sales within 180 days of approval, otherwise the account is closed. Focus on getting real traffic before applying.

---

## 10. Deployment Pipeline

```
You write/edit .md article in VS Code
        ↓
git add . && git commit -m "Add article: ..." && git push
        ↓
Cloudflare Pages detects push → auto builds
        ↓
Live at agreenfamily.com in ~60 seconds
```

### First-time setup steps (to do)
- [ ] Create GitHub repo: `agreenfamily-web`
- [ ] Push this project to GitHub
- [ ] Connect GitHub repo to Cloudflare Pages
- [ ] Add custom domain `agreenfamily.com` in Cloudflare Pages
- [ ] Update Bluehost nameservers to point to Cloudflare

---

## 11. Legal Requirements

- **FTC Affiliate Disclosure**: required on all pages that contain affiliate links. Already built into:
  - `/disclosure` page (full disclosure)
  - Footer (one-line notice on every page)
  - Top of each article that contains affiliate links
- **Privacy Policy**: needed before applying to Amazon Associates — simple version sufficient

---

## 12. Next Steps Checklist

- [x] Project map created
- [ ] Astro project scaffolded locally
- [ ] All pages built and working
- [ ] 3 sample articles published
- [ ] GitHub repo created and code pushed
- [ ] Cloudflare Pages connected
- [ ] Custom domain pointed from Bluehost → Cloudflare
- [ ] Instagram account created: @agreenfamily
- [ ] X account created: @agreenfamily
- [ ] Amazon Associates application submitted
- [ ] Walmart Affiliate application submitted
- [ ] 10 articles published (required for affiliate approval)
- [ ] Privacy Policy page added
- [ ] Google Analytics or Cloudflare Analytics connected

---

## 13. Article Topic Ideas (First 10)

1. 10 Easy Ways to Reduce Plastic in Your Kitchen *(sample article 1)*
2. The Family Composting Guide for Beginners *(sample article 2)*
3. Eco-Friendly Back-to-School Supplies That Kids Actually Love *(sample article 3)*
4. How to Build a Zero-Waste Lunchbox Routine
5. The Best Reusable Water Bottle for Every Age (Toddler to Teen)
6. 5 Energy-Saving Habits That Cut Your Bill and Help the Planet
7. Natural Cleaning Products That Are Safe for Kids
8. How to Start a Family Garden (Even in a Small Apartment)
9. Sustainable Holiday Gift Ideas for Eco-Conscious Families
10. Teaching Kids About Recycling: Age-by-Age Guide
