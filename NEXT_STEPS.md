# Next Steps — agreenfamily.com

Last updated: 2026-05-15

---

## ✅ Completed this week

- About page rewritten with real countryside backstory
- All 10 articles updated with personal voice and family details
- Privacy Policy page added (required for Amazon Associates)
- Amazon Associates applied ✅
- Impact.com site verification tag added to Layout.astro
- Walmart and Target affiliate applications pending (apply directly at affiliates.walmart.com and partners.target.com)
- All affiliate PLACEHOLDERs replaced with real Amazon and Walmart product URLs
- SOCIAL_CONTENT.md created — 3 X threads + 3 Instagram captions + posting schedule
- X account @agreenfamily active, first thread posted
- Identified eco/family accounts to engage with on X
- Instagram @agreenfamily recovered and set up

---

## 1. Instagram — start posting

The captions are written and ready in `SOCIAL_CONTENT.md`. What's missing is the visual for each post.

- **First post:** Paper Towels — needs `cloth-towels-kitchen.jpg`
- **Second post:** Composting — needs `family-composting.jpg`
- **Third post:** Glass vs Cans — needs `glass-cans-plastic.jpg`

**Image options:**
- Download from Unsplash or Pexels (free, no attribution required for commercial use)
- Create a simple text-on-photo card in Canva (1080×1080px) — green palette, clean font
- Connect Canva plugin in Cowork to build a reusable branded template

**Posting cadence:** follow the schedule in `SOCIAL_CONTENT.md` — one post every 2–3 days, never both platforms the same day.

**Reels (high priority):** static posts barely reach non-followers now. Even one 15–30 second Reel per week — filmed on a phone, one tip, text on screen — changes the growth curve. Start with the composting bin routine or the kitchen swap.

---

## 2. X — keep the momentum

- Continue the engagement strategy: 15 minutes/day replying to eco-family conversations
- Key accounts to follow and engage: @zerowastehome, @going.zero.waste, sustainable family/frugal living accounts
- Post threads 2 and 3 from `SOCIAL_CONTENT.md` (Glass vs Cans, Fast Fashion Kids)
- One or two hashtags max per thread — `#ZeroWaste` or `#SustainableLiving` on the opening tweet only

---

## 3. Monetization and advertisement strategy

*To be planned next session.* Key questions to address:

- **Display ads:** when does it make sense to add Mediavine, AdThrive, or Google AdSense? (Mediavine requires 50k sessions/month — a milestone to aim for; AdSense has no minimum)
- **Sponsored content:** at what audience size do brands reach out, and how to position for that?
- **Affiliate optimisation:** which articles are getting traffic? Which products are converting? (Requires Google Search Console + Amazon Associates dashboard review)
- **Email list monetisation:** affiliate links in newsletter perform well — building the list is a prerequisite
- **Digital products:** a simple PDF like "10 swaps that saved our family money" could be a lead magnet and eventually a small paid product

---

## 4. Newsletter — Beehiiv setup

Still not set up. This is the owned audience play — more valuable long-term than any social platform.

1. Create account at beehiiv.com
2. Add Web3Forms key to `NewsletterSignup.astro` (placeholder already exists in the component)
3. Test signup flow end to end
4. First issue: short, personal, one article highlight + one tip
5. Cadence: biweekly to start

---

## 5. SEO and Pinterest

- Submit sitemap to Google Search Console (sitemap exists at `/sitemap-index.xml`)
- Review meta descriptions across all 10 articles — each should be under 160 characters and search-friendly
- Internal linking pass: articles should reference each other where relevant
- Pinterest business account: high-value for eco/family/home content, often outperforms Instagram for this niche
  - Pin each article with a vertical image and clear headline
  - Boards: Eco Kitchen, Sustainable Kids, Zero Waste Home, Green Habits

---

## 6. Affiliate programs — follow up

- **Amazon Associates:** applied — check approval status in Associates dashboard
- **Walmart:** apply directly at affiliates.walmart.com (Impact network — separate from Marketplace)
- **Target:** apply at partners.target.com
- Once Walmart/Target approved: update article frontmatter URLs to use affiliate tracking links
- Consider additional programs: Grove Collaborative, ThredUp, Thrive Market (ShareASale)

---

## 7. Brazil expansion — agreenfamily.com.br

After the English site has affiliate approval and initial traffic. Begin domain registration and content adaptation in parallel — not a blocker.

- Separate domain (clean SEO, separate affiliate accounts)
- Translate and culturally adapt the 10 existing articles
- Brazilian affiliate programs: Amazon.com.br, Magalu/Lomadee, Americanas/Awin, Shopee Brazil
- Platform priority in Brazil: Instagram and WhatsApp groups (Pinterest less relevant)

---

## Immediate action order

1. ☑ X account active + first post done
2. ☑ Instagram recovered
3. ☑ All affiliate links live (no more PLACEHOLDERs)
4. ☐ Post first Instagram photo (Paper Towels) — needs image from Unsplash/Pexels or Canva
5. ☐ Set up Beehiiv newsletter + wire into site (create Beehiiv account first at beehiiv.com)
6. ☐ Article design pass — add in-article images + improve visual layout (see item 8 below)
7. ☐ Plan advertisement and monetisation strategy
8. ☐ Check Amazon Associates approval status
9. ☐ Apply to Walmart affiliate directly
10. ☐ Submit sitemap to Google Search Console
11. ☐ Set up Pinterest business account
12. ☐ Apply to Target affiliate
13. ☐ Begin Brazil expansion planning

---

## 8. Article design — visuals and layout

Articles currently look text-heavy and unappealing. Two things to fix:

### Images inside articles
- Articles have a hero image (frontmatter `image:` field) but no images within the body
- Add 2–3 relevant images per article, placed between sections — breaks up the text and makes articles feel magazine-like
- **Source:** Unsplash and Pexels are free and commercial-use safe. Search terms per article:
  - Paper towels → "cloth kitchen towels", "Swedish dishcloth", "zero waste kitchen"
  - Composting → "kitchen compost bin", "backyard compost", "food scraps"
  - Glass vs cans → "glass jars pantry", "mason jars kitchen", "canned food"
  - Fast fashion kids → "secondhand children's clothes", "kids clothing rack"
  - Laundry → "clothes drying rack", "wool dryer balls", "laundry room"
- Download images into `public/images/` and reference them in the article markdown with `![alt text](/images/filename.jpg)`

### Hero images (missing)
- Most article `image:` frontmatter fields point to files that don't exist yet in `public/images/`
- Fixing these also fixes the article card images on the homepage and articles list page
- Priority: the 3 featured articles (composting, reducing plastic, eco school supplies)

### Layout improvements to consider
- Pull quotes — visually highlight a key sentence mid-article
- Section dividers — a subtle green line or leaf icon between major sections
- Affiliate product cards — the `AffiliateLink` component exists but its visual design could be improved to feel less like a raw link and more like a product recommendation card
- Reading time estimate in the article header
