# agreenfamily.com — Roadmap

Last updated: 2026-05-22

---

## ✅ Done

### Site
- 15 articles live (all with personal voice, real affiliate links)
- Amazon Associates approved and links active
- Logo updated (transparent PNG, circular, in header)
- Favicon updated to family circle logo
- Tag filter on articles page fixed (client-side JS)
- Sitemap fixed and submitted to Google Search Console — indexing started
- Action steps section added to article layout
- Affiliate product display improved

### Social
- X account @agreenfamily active — first thread posted (Paper Towels)
- Instagram @agreenfamily recovered and active
- Canva connected to Cowork
- Instagram Post 1 (Paper Towels) — designed, captioned, **posted ✅**

---

## 🔜 Do next — in order

### 1. Push latest code to GitHub
Run this from your terminal — deploys everything committed this session:
```powershell
cd C:\Users\lkasp\OneDrive\Docs\claude\agreenfamily.com
git push
```

### 2. Instagram Post 2 — Composting
- Open Cowork → generate Canva design (sustainability angle, @agreenfamily handle)
- Caption is in `SOCIAL_CONTENT.md` → rewrite to remove money angle (same as we did for Post 1)
- Post 2–3 days after Post 1
- Engage on eco/family accounts for 15 min after posting

### 3. Instagram Post 3 — Glass vs Cans
- Same process as Post 2
- Post 2–3 days after Post 2

### 4. Analytics review
Now that Amazon Associates is live and Google is indexing, check what's actually working.

- **Cloudflare Analytics:** dash.cloudflare.com → Pages → agreenfamily-web → Analytics
  - Top pages, traffic sources, countries
- **Google Search Console:** Performance tab
  - Which search queries bring people in, average position, click-through rate
  - Coverage: confirm all 15 articles are indexed
- **Amazon Associates:** associates.amazon.com → Reports
  - Which articles are driving clicks and purchases

What to look for:
- High impressions, low clicks → fix the article title or meta description
- High clicks, low conversions → improve affiliate product placement
- Any article getting early organic traffic → write a follow-up, add internal links

### 5. Beehiiv newsletter setup
Owned audience is more valuable long-term than any social platform.

1. Create account at beehiiv.com
2. Add Web3Forms key to `src/components/NewsletterSignup.astro` (placeholder already exists)
3. Test signup flow end to end
4. First issue: short, personal, one article highlight + one tip
5. Cadence: biweekly to start

### 6. Walmart affiliate
Apply at affiliates.walmart.com (Impact network).
Once approved: update article frontmatter `affiliateProducts` URLs for Walmart products.

### 7. Article design pass — in-article images
Articles are text-heavy. Add 2–3 images per article between sections.

- Source from Unsplash / Pexels (free, commercial use)
- Save to `public/images/` and reference in markdown: `![alt text](/images/filename.jpg)`
- Priority articles: composting, reducing plastic, eco school supplies

### 8. Pinterest business account
High-value channel for eco/family/home content — often outperforms Instagram for this niche.

- Create Pinterest business account
- Pin each article with a vertical image and clear headline
- Boards to create: Eco Kitchen, Sustainable Kids, Zero Waste Home, Green Habits

### 9. Target affiliate
Apply at partners.target.com. Lower priority than Walmart.

---

## 📅 Social posting schedule

| Post | Platform | Content | Status |
|------|----------|---------|--------|
| 1 | Instagram | Paper Towels | ✅ Posted |
| 2 | X | Thread 1 — Paper Towels | ✅ Posted |
| 3 | Instagram | Composting | ⬜ Next |
| 4 | X | Thread 2 — Glass vs Cans | ⬜ |
| 5 | Instagram | Glass vs Cans | ⬜ |
| 6 | X | Thread 3 — Fast Fashion Kids | ⬜ |

Cadence: one Instagram post every 2–3 days, one X thread every 2–3 days. Never both platforms the same day.

All captions in `SOCIAL_CONTENT.md`. Rewrite any caption that leads with money/savings — the brand voice is sustainability-first.

---

## 🇧🇷 Brazil expansion — agreenfamily.com.br

Long-term. Start planning once English site has stable traffic and affiliate income.

- Separate domain (clean SEO, separate affiliate accounts)
- Translate and culturally adapt existing articles
- Brazilian affiliates: Amazon.com.br, Magalu/Lomadee, Americanas/Awin, Shopee Brazil
- Platform priority: Instagram and WhatsApp groups (Pinterest less relevant in Brazil)

---

## Key files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Project context — read at session start |
| `FAMILY_PROFILE.md` | Voice, tone, family details — read before writing any content |
| `SOCIAL_CONTENT.md` | All captions and X threads — update as posts are created |
| `ROADMAP.md` | This file |
