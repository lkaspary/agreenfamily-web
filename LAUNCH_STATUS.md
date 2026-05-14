# agreenfamily.com — Launch Status

> Last updated: May 14, 2026

---

## ✅ Completed

### Site & Code
- [x] Project mapped and documented (`PROJECT_MAP.md`)
- [x] Astro project scaffolded — Tailwind, MDX, green design system
- [x] Logo designed — pine tree family (Option 2, pine version)
- [x] All layouts built — Layout.astro, ArticleLayout.astro
- [x] All components built — Header, Footer, ArticleCard, FeaturedCarousel, AffiliateLink, NewsletterSignup
- [x] All pages built — Home, Articles, About, Disclosure, Article [slug]
- [x] 3 sample articles written with affiliate product placeholders
- [x] Favicon and logo SVG files in place
- [x] Social logo PNG exported (logo-social.png)

### Deployment
- [x] GitHub repo created — `lkaspary/agreenfamily-web` (private)
- [x] Code pushed to GitHub
- [x] Cloudflare Pages connected and building successfully
- [x] Bluehost nameservers updated to Cloudflare
- [x] DNS records configured (CNAME @ and www → agreenfamily-web.pages.dev)
- [x] agreenfamily.com propagating — site going live ⏳

### Social Media
- [x] X (Twitter) account created — @agreenfamily
- [ ] Instagram account — recovering existing account, handle @agreenfamily pending

---

## ❌ Still To Do

### Content (Priority — needed before affiliate applications)
- [ ] Write 7 more articles (need 10 total for Amazon Associates)
- [ ] Add real images to articles (currently using placeholder paths)
- [ ] Replace affiliate link PLACEHOLDERs once accounts approved

### Monetization
- [ ] Apply to **Amazon Associates** — https://affiliate-program.amazon.com
  - Requires: live site + 10 articles published
- [ ] Apply to **Walmart Affiliate** — https://affiliates.walmart.com
  - Requires: live site + 10 articles published

### Newsletter
- [ ] Create **Beehiiv** account (free) — https://beehiiv.com
- [ ] Get Web3Forms API key — https://web3forms.com
- [ ] Add key to `src/components/NewsletterSignup.astro` (replace `YOUR_WEB3FORMS_KEY_HERE`)

### Legal
- [ ] Add **Privacy Policy** page (required by Amazon Associates)
- [ ] Verify affiliate disclosure is visible on all article pages ✅ (already built in)

### Analytics
- [ ] Enable **Cloudflare Analytics** in the Cloudflare dashboard (free, already available)

### Technical
- [ ] Add sitemap back once Astro is upgraded to v6
- [ ] Upgrade Astro from v4 to v6 (fixes security audit warnings)

### Social Media
- [ ] Instagram account — @agreenfamily (recovering existing account)
- [ ] Link Instagram and X in Footer once accounts confirmed active

---

## 📋 Article Brainstorm — Next 7

### Article 4 — Zero-Waste Lunchbox Routine
**Title:** How to Build a Zero-Waste Lunchbox Routine (That Kids Will Actually Stick To)
**Tags:** kids, kitchen, school
**Angle:** Step-by-step system for parents — what to pack, what containers to use, how to get kids on board
**Affiliate products:** stainless steel bento box, silicone snack bags, reusable cutlery set, cloth napkins
**Image idea:** packed bento lunchbox open on a kitchen counter, morning light

---

### Article 5 — Best Reusable Water Bottles
**Title:** The Best Reusable Water Bottle for Every Age — From Toddlers to Teens
**Tags:** kids, shopping, plastic-free
**Angle:** Buying guide format. Each age group has different needs (spill-proof, straw lids, capacity). Compare 2-3 options per age bracket.
**Affiliate products:** toddler sippy-style bottle, kids straw bottle, teen/adult insulated bottle
**Image idea:** lineup of colorful water bottles on a shelf or countertop

---

### Article 6 — Energy-Saving Habits
**Title:** 5 Energy-Saving Habits That Lower Your Bill and Help the Planet
**Tags:** home, energy, savings
**Angle:** Practical and financial — frame every tip around the dollar savings first, environmental benefit second. Families respond better to "saves $200/year" than abstract environmental benefits.
**Affiliate products:** smart power strip, programmable thermostat, LED bulb multipack, door draft stopper
**Image idea:** hand adjusting a thermostat, or a cozy living room with warm lighting

---

### Article 7 — Natural Cleaning Products
**Title:** Natural Cleaning Products That Are Actually Safe for Kids (and Actually Work)
**Tags:** home, kids, health
**Angle:** Address the skepticism head-on — many "natural" cleaners don't clean well. Focus only on ones that genuinely work. Cover kitchen, bathroom, floors, laundry.
**Affiliate products:** Branch Basics concentrate, castile soap, reusable cleaning cloths, wool dryer balls
**Image idea:** clean kitchen counter with a few simple bottles and a cloth

---

### Article 8 — Family Garden
**Title:** How to Start a Family Garden When You Have No Space (and No Idea What You're Doing)
**Tags:** garden, kids, food
**Angle:** Written for total beginners in small spaces — apartment balcony, tiny yard, windowsill. Focus on what's easiest to grow with kids (cherry tomatoes, herbs, lettuce).
**Affiliate products:** self-watering planter, seed starter kit, kids gardening glove set, grow light for indoors
**Image idea:** child's hands in soil, small planter on a balcony or windowsill

---

### Article 9 — Sustainable Holiday Gifts
**Title:** Sustainable Gift Ideas for Eco-Conscious Families (That Kids Will Actually Want)
**Tags:** shopping, kids, holidays
**Angle:** The challenge is gifts that are eco-friendly AND exciting. Organize by age group and interest. Avoid preachy "educational only" framing — fun first.
**Affiliate products:** wooden toy set, nature exploration kit, art supplies in recycled packaging, experience-based gifts
**Image idea:** wrapped gifts in brown paper and twine, pine branches, minimal holiday styling
**Note:** publish in October for holiday SEO traffic

---

### Article 10 — Teaching Kids About Recycling
**Title:** Teaching Kids About Recycling: What to Say at Each Age (and What Actually Sticks)
**Tags:** kids, waste, education
**Angle:** Age-by-age breakdown — 2-4, 5-7, 8-12, teens. Different concepts work at different developmental stages. Include what NOT to say (guilt-based messaging backfires).
**Affiliate products:** kids recycling sorting bin, recycling activity book, compost starter kit
**Image idea:** young child sorting items into colored bins, bright and cheerful

---

## 🖼️ Images Plan

All current articles have placeholder image paths that return 404. Two options:

### Option A — Free stock photos (Recommended to start)
Download free-to-use photos from:
- **Unsplash** (unsplash.com) — search "eco kitchen", "composting", "school lunch"
- **Pexels** (pexels.com) — same searches
- Save as JPG, rename to match the path in each article's frontmatter
- Place in `public/images/` folder
- Push to GitHub → auto-deploys

### Option B — AI-generated images (Future)
Once budget allows, generate custom images matching the exact scene described above using Midjourney or similar. More consistent brand look.

### Immediate fix needed
Update each article's `image:` frontmatter to either:
- Point to a real downloaded image in `public/images/`
- Or remove the `image:` field entirely so the green placeholder shows instead of a broken image

**Articles needing images:**
- `reducing-plastic-kitchen.md` → needs `/images/plastic-free-kitchen.jpg`
- `family-composting-guide.md` → needs `/images/family-composting.jpg`
- `eco-school-supplies.md` → needs `/images/eco-school-supplies.jpg`

---

## 🔗 Key Links

| Resource | URL |
|---|---|
| Live site | https://agreenfamily.com |
| Preview URL | https://agreenfamily-web.pages.dev |
| GitHub repo | https://github.com/lkaspary/agreenfamily-web |
| Cloudflare Pages | https://dash.cloudflare.com → Workers & Pages → agreenfamily-web |
| X account | https://x.com/agreenfamily |
| Amazon Associates | https://affiliate-program.amazon.com |
| Walmart Affiliate | https://affiliates.walmart.com |
| Beehiiv | https://beehiiv.com |
| Web3Forms | https://web3forms.com |
