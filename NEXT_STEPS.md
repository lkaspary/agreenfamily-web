# Next Steps — agreenfamily.com

Last updated: 2026-05-15

---

## 1. Rewrite the About page

The About page needs to reflect the real family story now captured in `FAMILY_PROFILE.md`. Key elements to weave in:

- Both parents grew up in the countryside in Latin America
- Communities shaped by European immigrants who brought old-world habits
- Wood stove cooking, homemade produce, animals in the yard
- Shopping was sparse — you grew or made what you could
- Food scraps went to animals or compost; nothing left without being used completely
- We're not discovering sustainability — we're returning to something we already knew
- Now a family of four + a dog, living in the Seattle suburbs
- One electric car, one not — honest about where we are
- Curious, changing, not perfect

Tone: warm and grounded. Not a mission statement. A story.

---

## 2. Revisit and update articles where the backstory adds depth

Not every article needs a rewrite — only where the countryside/immigrant background genuinely enriches the piece. Priority articles:

- **Family composting guide** — the compost loop (scraps → animals or heap → garden → table) was lived experience, not a lifestyle choice. This should come through.
- **Paper towels vs. cloth** — the grandmother who would have been baffled by disposable anything. Mention the wood stove kitchen where cloth was just what existed.
- **Herb garden cube** — the windowsill garden as a small echo of something much larger we grew up with.
- **Secondhand vs. new** — passing clothes down was just life. The idea that everything must be new is recent and strange.
- **Glass vs. cans** — jars were always reused. That was the default, not the exception.

For each: add one or two sentences of real backstory where it fits naturally. Don't force it into every article.

---

## 3. Recover Instagram @agreenfamily

- Log in to the existing Instagram account or initiate account recovery via the registered email
- Profile photo: use `logo-social.png` (already in `public/`)
- Bio: short, warm, no hashtag stuffing — something like "A family trying to do better. Seattle suburbs. Latin roots. Real life."
- Link in bio: agreenfamily.com
- First content priority: repurpose article headlines and key lines as short carousel posts or Reels text cards
- Posting cadence to start: 3x per week, building to daily

---

## 4. Apply to affiliate programs

The site now has 10 published articles. Both programs can be applied to now.

### Amazon Associates
- URL: affiliate-program.amazon.com
- Requirement: site live with original content ✅
- **Prerequisite: add a Privacy Policy page** (required by Amazon) — see below
- Once approved: replace all `amzn.to/PLACEHOLDER` URLs in article frontmatter

### Walmart Affiliate (Impact network)
- URL: affiliates.walmart.com (runs through Impact.com)
- Apply after Amazon — lower priority but worth having
- Once approved: replace all `walmart.com/PLACEHOLDER` URLs

### Privacy Policy page (prerequisite for Amazon)
- Create `src/pages/privacy.astro`
- Must include: data collection disclosure, affiliate disclosure, cookie use, contact info
- Keep it plain and readable — not legalese
- Add link to footer alongside the existing Disclosure page

---

## 5. Marketing strategy

### SEO (most important long-term lever)
- Each article already targets a specific search intent — this is the foundation
- Add a `<meta name="description">` review pass — make sure every description is search-friendly and under 160 characters
- Submit sitemap to Google Search Console once sitemap is re-added (after Astro upgrade)
- Target long-tail keywords: "how to reduce plastic in kitchen family", "secondhand kids clothes tips", etc.
- Internal linking: articles should link to each other where relevant (e.g. composting article links to glass vs. cans)

### Pinterest
- High-value channel for eco/family/home content — often outperforms Instagram for this niche
- Create a business account at agreenfamily.com
- Pin each article with a vertical image and clear headline
- Rich Pins (article type) pull metadata directly from the site
- Boards: Eco Kitchen, Sustainable Kids, Zero Waste Home, Green Habits, etc.

### Instagram (once recovered)
- Repurpose article content as carousel posts (5–8 slide breakdowns of each article)
- Short Reels with one practical tip per video — no production required, text on screen works
- Stories for behind-the-scenes: the herb garden, the kitchen, the compost

### X / Twitter (@agreenfamily — already active)
- Share each new article with a short personal take, not just the headline
- Engage with eco-family conversations already happening

### Newsletter (Beehiiv)
- Set up account at beehiiv.com
- Add Web3Forms key to `NewsletterSignup.astro`
- Weekly or biweekly send: one article summary + one practical tip
- Grow list by offering something simple (e.g. "5 swaps that actually saved us money")

### Community
- Share articles in relevant Facebook Groups (zero waste, sustainable living, expat families, Latin families in the US)
- Reddit: r/ZeroWaste, r/Frugal, r/Parenting — contribute genuinely, share when relevant
- Partner with similar small blogs for cross-links (good for SEO and audience)

---

## 6. Newsletter

A newsletter is one of the most valuable things a content site can build — it converts casual readers into a loyal audience that you own, independent of any algorithm.

The `NewsletterSignup.astro` component already exists in the codebase and is wired into the site. It just needs a working form backend to start collecting emails.

### Setup
- **Email platform:** Beehiiv (beehiiv.com) — free up to 2,500 subscribers, built for content creators, clean design
- **Form backend:** Web3Forms (web3forms.com) — free, no backend needed, connects the signup form to Beehiiv via webhook or direct API
- **What to do:**
  1. Create a Beehiiv account and publication
  2. Get the API key / form embed code
  3. Add the key to `NewsletterSignup.astro` (placeholder already exists)
  4. Test the signup flow end to end

### What the newsletter should be
- **Cadence:** Biweekly to start — sustainable, not overwhelming
- **Format:** Short. One article highlight, one practical tip the family actually uses, maybe one product worth mentioning (with affiliate link)
- **Tone:** Same voice as the articles — personal, honest, from one family to another
- **Subject lines:** Specific and concrete, not clickbait. "How we stopped buying paper towels" not "You won't believe this swap"

### Why it matters
- Owned audience — not dependent on Instagram, Google, or any platform
- Affiliate links in email perform well when the audience trusts the sender
- Each issue drives traffic back to the site, boosting SEO signals
- Compounds over time — a list of 1,000 engaged readers is worth more than 10,000 passive followers

### Growth ideas
- Signup prompt at the end of every article ("If this was useful, more like it every two weeks")
- Simple lead magnet: a one-page PDF like "10 swaps that actually saved us money this year"
- Cross-promote on Instagram and Pinterest once those channels are active

---

## 7. Brazilian Portuguese expansion — agreenfamily.com.br

Strong case for this. Brazil is a large market, affiliate e-commerce is mature, and the family's Portuguese-language background makes the content authentic rather than translated.

### Structure options
- **Separate domain:** agreenfamily.com.br (clean, Brazil-first SEO, separate affiliate accounts)
- **Subdirectory:** agreenfamily.com/br/ (keeps domain authority in one place, more complex)
- **Recommendation:** Separate domain. Easier to manage affiliate accounts, cleaner brand story for Brazilian audience.

### Brazilian affiliate programs
- **Amazon.com.br Associates** — same program structure, separate account, BRL commissions
- **Magalu (Magazine Luiza)** — major Brazilian retailer, strong affiliate program via Lomadee or direct
- **Americanas** — large marketplace, affiliate via Awin Brazil
- **Shopee Brazil** — growing fast, easy affiliate signup
- **Hotmart / Monetizze** — for digital products if content expands that direction

### Content approach
- Start by translating and adapting the 10 existing articles — not word-for-word, but culturally adapted
- Brazilian countryside / interior context is even more direct: the wood stove, the roça, the quintal, the European colono heritage — this resonates deeply with Brazilian readers of a certain background
- Audience: urban Brazilian families trying to reduce waste and spend smarter — a growing segment
- Platform priority in Brazil: Instagram and WhatsApp groups are the dominant channels (Pinterest less so)

### When to start
- After the English site has affiliate programs approved and initial traffic established
- Can begin domain registration and content adaptation in parallel — not a blocker

---

## Immediate action order

1. ☐ Commit and push current articles + FAMILY_PROFILE.md to GitHub
2. ☐ Add Privacy Policy page
3. ☐ Rewrite About page
4. ☐ Apply to Amazon Associates
5. ☐ Set up Beehiiv newsletter + wire into NewsletterSignup.astro
6. ☐ Recover Instagram @agreenfamily
7. ☐ Set up Pinterest business account
8. ☐ Update 2–3 priority articles with countryside backstory additions
9. ☐ Apply to Walmart Affiliate
10. ☐ Begin Brazil expansion planning
