# agreenfamily.com — Project Context for Claude

> Read this file first at the start of every session. It has everything needed to continue working on this project without re-explaining context.

---

## What this project is

**agreenfamily.com** is a content site that promotes eco-friendly habits for families. It earns money through Amazon Associates and Walmart affiliate links embedded in articles recommending green products.

**Owner:** Leandro Kaspary (lkaspary@hotmail.com)

---

## Tech stack

- **Framework:** Astro v4 (static site generator)
- **Styling:** Tailwind CSS + custom green color palette
- **Content:** Markdown files in `src/content/articles/`
- **Deployment:** Cloudflare Pages (auto-deploys on git push)
- **Domain:** agreenfamily.com (Bluehost domain, Cloudflare DNS)
- **Repo:** https://github.com/lkaspary/agreenfamily-web (private)

---

## How to run locally

```powershell
cd C:\Users\lkasp\OneDrive\Docs\claude\agreenfamily.com
npm run dev
```
Opens at http://localhost:4321 (or 4322 if magdakaspary.com is already running on 4321)

## How to deploy

```powershell
git add .
git commit -m "your message"
git push
```
Cloudflare Pages detects the push and rebuilds automatically in ~60 seconds.

---

## Design system

**Colors:** forest `#2D5016`, leaf `#4A7C59`, sage `#8BAE8A`, cream `#F8F5F0`, earth `#6B5B3E`, sky `#E8F4EA`, ink `#1A1A1A`, ink-muted `#555555`, stone `#D4CFC9`

**Fonts:** Playfair Display (serif, headings) + Inter (sans, body)

**Logo:** Pine tree with family figures underneath. SVG files in `public/` — `logo.svg` (horizontal lockup) and `favicon.svg` (square, dark green background for profile photos). PNG version at `public/logo-social.png`.

---

## Folder structure

```
src/
  components/     Header, Footer, ArticleCard, FeaturedCarousel, AffiliateLink, NewsletterSignup
  content/
    config.ts     Article schema definition
    articles/     One .md file per article
  layouts/        Layout.astro, ArticleLayout.astro
  pages/          index, articles, about, disclosure, articles/[slug]
  styles/         global.css
public/
  favicon.svg
  logo.svg
  logo-social.png
  images/         Article images go here (currently empty — needs photos)
```

---

## Article frontmatter schema

```yaml
---
title: ""
description: ""
date: YYYY-MM-DD
author: "Leandro Kaspary"
tags: ["tag1", "tag2"]
image: "/images/filename.jpg"      # optional — leave out if no image yet
imageAlt: ""
featured: true                      # shows in homepage carousel
draft: false
affiliateProducts:
  - name: "Product Name"
    url: "https://amzn.to/XXXXX"   # replace PLACEHOLDER when affiliate approved
    store: "amazon"                 # or "walmart"
    description: "one line"
---
```

---

## Current content

3 articles published (sample content, affiliate links are PLACEHOLDERs):
1. `reducing-plastic-kitchen.md` — featured
2. `family-composting-guide.md` — featured
3. `eco-school-supplies.md` — featured

**Known issue:** article `image:` paths point to files that don't exist yet in `public/images/`. Either remove the image field or add real photos from Unsplash/Pexels.

---

## Social accounts

- **X (Twitter):** @agreenfamily ✅ active
- **Instagram:** @agreenfamily — recovering existing account, not yet active

---

## Monetization status

- Amazon Associates: **APPROVED** ✅ (approved as of May 2026)
- Walmart Affiliate: NOT YET APPLIED
- Affiliate links in articles: Amazon links are live; Walmart links still need updating once approved

## Traffic (last updated May 25, 2026)

Cloudflare Analytics — 30-day window (Apr 25 – May 25):
- **1.39k unique visitors** — essentially all traffic came after ~May 13 (site had near-zero before that)
- **22.6k total requests** (includes static assets)
- **48.67% cache hit rate** (Cloudflare performing well)
- Run rate since traffic started: ~116 unique visitors/day → ~3,500/month
- With only 3 articles live, this is a strong early signal

---

## What's next (in order)

1. Fix broken article images — download from Unsplash/Pexels into `public/images/`
2. Keep publishing — at 15 articles now, target 30+ for SEO traction (briefs in `LAUNCH_STATUS.md`)
3. Apply to Walmart Affiliate — https://affiliates.walmart.com
4. Set up Beehiiv newsletter + Web3Forms key in NewsletterSignup.astro
5. Instagram @agreenfamily — active but low engagement; improve social strategy (carousel format, hooks)
6. Upgrade Astro v4 → v6 (fixes security audit warnings, non-urgent)
7. Re-add sitemap integration after Astro upgrade

---

## Similar project for reference

magdakaspary.com was built using the same Astro + Tailwind + Cloudflare Pages stack. If you need to check how something was done there, the session "Build family business website magdakaspary.com" has the full history. Key difference: magdakaspary.com is bilingual (EN/PT), agreenfamily.com is English only.

---

## Key files to read for full context

- `FAMILY_PROFILE.md` — **read this before writing or editing any article** — family background, voice guidelines, personal details (kids' ages, herb garden, cooking habits, Seattle context)
- `LAUNCH_STATUS.md` — detailed to-do list and article briefs
- `PROJECT_MAP.md` — full architecture, design decisions, affiliate strategy
- `SETUP.md` — deployment and workflow instructions
