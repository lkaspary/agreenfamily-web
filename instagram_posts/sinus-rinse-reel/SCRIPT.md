# Reel: Saline spray cans → ceramic neti pot

**Article:** https://agreenfamily.com/articles/sinus-rinse-and-cold-season-swaps/
**Format:** Instagram Reel, 9:16, 1080 × 1920
**Length:** about 30 seconds, 9 cards
**Music:** calm acoustic or soft piano, low volume under the voiceover (pick from Instagram's library so it's licensed)

## Built version (Oct 28)

`reel.mp4` (27.5 s, 1080 × 1920, no audio) and the 10 cards in `cards/` were built from this script, with two changes:

- **Photos:** cards 1, 2, 3, 6 and 7 use Gemini images A, B, C, D and E (in `photos/`); card 8 uses the article's honey-lemon photo. Image C replaces the article's neti pot photo, whose salt jar was pink and labeled. The rest are text cards on cream or green.
- **New card 4** shows the article's estimate: "About 9 cans a season, gone. Or ~11 plastic jugs if you'd buy distilled water."

There's no audio: add a licensed track from Instagram's music library when you post, and optionally record the voiceover below.

## Look and feel

Match the "3 swaps" carousel in `instagram_posts/3 swaps/`:

- **Text cards:** cream textured paper background, headline in the green handwritten script, a short line underneath in spaced-out green uppercase sans, `@agreenfamily` small at the bottom.
- **Photo cards:** full-bleed photo, with the text on a cream band across the lower-middle of the frame (the same script and uppercase styles).
- **Safe zone:** Instagram covers the top ~250 px and the bottom ~350 px of a reel with buttons and the caption. Keep all text between y = 250 and y = 1570.
- Colors: green `#3D6B4F`, cream `#FAF7F2`.

## Cards

| # | Time | Type | On-screen text | Visual |
|---|---|---|---|---|
| 1 | 0–3s | Photo | **Script:** "Every October, my sinuses notice the rain first." | Image A: rainy bathroom window |
| 2 | 3–6s | Photo | **Script:** "For years: a saline spray can every few weeks." **Small:** A SMALL PILE BY SPRING | Image B: empty spray cans in a drawer |
| 3 | 6–9s | Photo | **Script:** "This year: one ceramic neti pot." **Small:** NO CAN. NO REFILL. JUST SALT + WATER. | Article banner (neti pot), reframed to 9:16, or Image C |
| 4 | 9–13s | Text | **Small, top:** THE ONE RULE **Script:** "Never plain tap water." **Small:** DISTILLED OR STERILE WATER, OR TAP WATER BOILED 3–5 MIN AND COOLED TO LUKEWARM | Cream paper, no photo |
| 5 | 13–17s | Photo | **Script:** "Our routine" **Small:** BOIL AT NIGHT · RE-BOIL WHILE I SHOWER · COOL OVERNIGHT · READY BY MORNING | Image D: kettle-mug steaming in the bathroom |
| 6 | 17–20s | Photo | **Script:** "Homemade rinse salt" **Small:** 3 TSP PICKLING SALT + 1 TSP BAKING SODA · IN A REUSED JAR | Image E: jar of white salt mix |
| 7 | 20–24s | Photo | **Script:** "Before the cold-medicine aisle:" **Small:** HOT WATER · LEMON · HONEY · GINGER (NO HONEY UNDER AGE 1) | Article honey-lemon image, reframed, or Image F |
| 8 | 24–27s | Text | **Script:** "More cold-season swaps" **Small:** HANDKERCHIEFS · WARM COMPRESS · SHOWER STEAM · MEDICINE TAKE-BACK | Cream paper, no photo |
| 9 | 27–30s | Text | **Script:** "Full guide + sources" **Small:** LINK IN BIO · AGREENFAMILY.COM. Tiny line at the bottom: NOT MEDICAL ADVICE. ASK YOUR DOCTOR. | Cream paper, no photo |

## Voiceover (optional, about 30 seconds)

Read it slowly and plainly, like telling a friend. Each line matches a card.

1. "Every October the rain comes back to Seattle, and my sinuses notice before I do."
2. "For years I used saline spray cans. One every few weeks, and a little pile of them by spring."
3. "This year it's a ceramic neti pot. No can, no refill. Just salt and water."
4. "One rule matters more than anything: never use plain tap water. Use distilled water, or boil it for three to five minutes and let it cool."
5. "My routine: I boil it at night, boil it again a few times while I shower, and by morning it's cooled and ready."
6. "The salt is homemade: pickling salt and a little baking soda, in a jar we already had."
7. "And when a cold goes around the house, we start with hot water, lemon, honey, and ginger, before the plastic in the medicine aisle."
8. "Handkerchiefs, a warm washcloth, a steamy shower, and taking old medicine back to the pharmacy."
9. "The full guide and sources are at agreenfamily dot com. Not medical advice, so check with your doctor."

## Images to generate in Gemini (9:16)

Add this to the end of every prompt so the set looks consistent:

> Natural, editorial lifestyle photograph for a family eco-living blog. Soft natural daylight, calm and uncluttered, warm neutral tones with muted sage green accents. No people, no text, no labels, no logos, no brand names. Vertical 9:16.

- **A, rainy window (card 1):** A bathroom window on a grey autumn morning, raindrops running down the glass, blurred green evergreen trees outside, a white ceramic sink edge and a folded cotton towel in the soft foreground.
- **B, spray cans (card 2):** An open wooden bathroom drawer holding five or six plain white empty saline spray cans with small nozzle caps, lying jumbled together, seen from slightly above. The cans are plain, unbranded, with no text.
- **C, neti pot (card 3, only if you don't reuse the article banner):** Use the prompt from the article. Attach the article's neti pot image as a reference and ask for a vertical 9:16 version, with a jar of plain white coarse salt with no label.
- **D, kettle-mug (card 5):** A small white electric kettle-mug on a bathroom counter in the evening, a gentle wisp of steam rising, warm low lamp light, a steamy shower glass softly blurred in the background, a folded towel beside it.
- **E, salt jar (card 6):** A reused glass jam jar with a metal lid, filled with a fine white salt mix, a small wooden measuring spoon beside it, on a light wooden counter. Plain white salt, not pink. No label on the jar.
- **F, honey lemon (card 7, only if you don't reuse the article image):** The honey-lemon-ginger mug from the article, re-composed vertically: steaming mug, jar of honey with a wooden dipper, half a lemon, a knob of ginger, a folded white cotton handkerchief, on a worn wooden table by a window.

## Caption

> Every October the rain comes back and my sinuses notice first. 🌧️
>
> For years that meant a saline spray can every few weeks. This year it's a ceramic neti pot, a homemade salt mix in a reused jar, and tap water boiled in a little kettle-mug in the bathroom.
>
> ⚠️ The one rule: never rinse with plain tap water. Use distilled or sterile water, or tap water boiled 3–5 minutes and cooled to lukewarm (FDA guidance).
>
> Plus honey + lemon before the cold-medicine aisle, handkerchiefs, and where old medicine should actually go.
>
> Full guide and sources at the link in bio. Not medical advice: check with your doctor, especially for kids.
>
> #agreenfamily #lowwaste #plasticfree #netipot #sinusrelief #coldseason #seattle #pnw #sustainableliving #ecofriendlyhome #zerowasteswaps #familyhabits

## Before posting

- [ ] Article link in the bio points to the sinus article.
- [ ] No brand names or labels visible in any image.
- [ ] The salt in card 6 is white, matching the recipe in the article.
- [ ] All text is inside the safe zone.
