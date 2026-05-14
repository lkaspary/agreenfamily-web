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

- Amazon Associates: NOT YET APPLIED — need 10 articles live first
- Walmart Affiliate: NOT YET APPLIED — need 10 articles live first
- Affiliate links in articles: currently show "PLACEHOLDER" in URLs — update once approved

---

## What's next (in order)

1. Fix broken article images — download from Unsplash/Pexels into `public/images/`
2. Write 7 more articles to reach 10 total (briefs in `LAUNCH_STATUS.md`)
3. Add Privacy Policy page (required by Amazon Associates)
4. Apply to Amazon Associates once 10 articles are live
5. Apply to Walmart Affiliate
6. Set up Beehiiv newsletter + Web3Forms key in NewsletterSignup.astro
7. Recover/activate Instagram @agreenfamily
8. Enable Cloudflare Analytics (free, already available in dashboard)
9. Upgrade Astro v4 → v6 (fixes security audit warnings, non-urgent)
10. Re-add sitemap integration after Astro upgrade

---

## Similar project for reference

magdakaspary.com was built using the same Astro + Tailwind + Cloudflare Pages stack. If you need to check how something was done there, the session "Build family business website magdakaspary.com" has the full history. Key difference: magdakaspary.com is bilingual (EN/PT), agreenfamily.com is English only.

---

## Key files to read for full context

- `LAUNCH_STATUS.md` — detailed to-do list and article briefs
- `PROJECT_MAP.md` — full architecture, design decisions, affiliate strategy
- `SETUP.md` — deployment and workflow instructions
