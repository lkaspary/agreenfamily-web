# agreenfamily.com — Local Setup & Deployment

## First-time setup (run once)

Open a terminal in the `agreenfamily.com` folder and run:

```bash
npm install
```

Then start the dev server:

```bash
npm run dev
```

Open http://localhost:4321 in your browser. You should see the full site.

---

## Daily workflow (writing articles)

1. Create a new `.md` file in `src/content/articles/`
2. Copy the frontmatter from an existing article
3. Write your article in Markdown below the `---`
4. Save — the browser auto-reloads
5. When happy, push to GitHub:

```bash
git add .
git commit -m "Add article: your title here"
git push
```

Cloudflare Pages deploys automatically in ~60 seconds.

---

## GitHub setup (first time only)

```bash
git init
git add .
git commit -m "Initial commit — agreenfamily.com"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/agreenfamily-web.git
git push -u origin main
```

---

## Cloudflare Pages (first time only)

1. Go to https://dash.cloudflare.com → Workers & Pages → Create → Pages
2. Connect to Git → select the `agreenfamily-web` repo
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Save and Deploy

---

## Custom domain (Bluehost → Cloudflare)

1. In Cloudflare Pages, go to your project → Custom domains → Add domain → `agreenfamily.com`
2. Cloudflare will tell you to update nameservers — copy the two NS values
3. In Bluehost, go to Domain Manager → agreenfamily.com → Nameservers
4. Replace the Bluehost nameservers with the Cloudflare ones
5. Wait 10–30 minutes for DNS to propagate

---

## Adding affiliate links

When you have your Amazon and Walmart affiliate accounts:

1. Search for the product on Amazon/Walmart
2. Generate your affiliate link
3. Replace the `PLACEHOLDER` text in the article's `affiliateProducts` frontmatter

```yaml
affiliateProducts:
  - name: "Product Name"
    url: "https://amzn.to/YOUR_REAL_LINK"
    store: "amazon"
```

---

## Adding the newsletter (Web3Forms)

1. Go to https://web3forms.com and get a free API key
2. Open `src/components/NewsletterSignup.astro`
3. Replace `YOUR_WEB3FORMS_KEY_HERE` with your actual key

---

## Tailwind Typography note

The project uses `@tailwindcss/typography`. If it's missing after npm install, run:

```bash
npm install @tailwindcss/typography
```
