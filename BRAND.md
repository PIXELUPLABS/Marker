---
name: Marker
document: Brand guidelines (text edition)
version: 1.1.0
updated: 2026-11-05
basedOn: Brand Guidelines v1.0 (Aug 2026, Figma) + Brand & Website brief (David Pastewka, Jul 2026)
companion: DESIGN.md (visual system and components), tokens/tokens.json (values)
---

# Marker — Brand Guidelines

> **Repo copy.** Mirrors `Marker-Scale-Kit/BRAND.md` v1.1.0 (5 Nov 2026). `tokens/` is included in this repo; paths under `assets/`, `brand-guidelines/`, `evidence/` and `tools/` refer to the Scale Kit. Edit the kit, then re-copy. Don't edit this file directly.

> This is the text edition of the Figma brand deck (exported page by page in [`brand-guidelines/pages/`](brand-guidelines/pages/)), plus what the deck doesn't cover yet: positioning, voice, messaging and asset rules. Visual and UI rules live in [`DESIGN.md`](DESIGN.md). Both files are written so a person or an AI agent (Claude Code) can produce on-brand work from them.

---

## 1. Brand core

| | |
|---|---|
| **One line** | Marker makes enterprises AI-native. |
| **What we do** | We embed with your teams, find where AI pays off most, and ship custom agents in weeks. Then we keep going until the transformation is complete. |
| **For** | Executives at legacy mid-market and enterprise businesses. Usually non-technical, sceptical of hype, measured on outcomes. |
| **Their problem** | Spreadsheet-bound, manual operations. Headcount scales with workload. AI pilots that never reach production. |
| **Alternatives we replace** | Doing nothing · hiring for it (rare, slow, quarters) · traditional consultancies (slow, expensive, and they leave). |
| **Why us** | We sold our last company to Gap and founded Gap's Office of AI. 2-time YC founders, 2 previous exits, building together for 15 years. Backed by Y Combinator. |
| **The magic moment** | When a client sees 50% of someone's manual work automated. |
| **The dream** (client's words) | "It's differentiated from every other AI startup. It clearly shows we care about design because we have a perspective." |

### The name and the mark
*To mark is to highlight, define, organise, and make something matter.* The logo's interlocking geometry shows fragmented processes becoming one connected system. Its crafted, unconventional silhouette separates Marker from the visual sameness of AI brands. The **lime highlighter** in headlines is the name made visible: Marker marks what matters.

---

## 2. Personality

Chosen by the client: **Confident · Playful · Crafted · Cutting-edge · Trustworthy · Effortless.**

| Slider (client brief) | Position | So we… |
|---|---|---|
| Minimal ↔ Expressive | 3 / 5 (balanced) | Keep layouts calm and use one expressive device per section (highlighter, glyph, chart). |
| Calm ↔ Energetic | 4 / 5 | Use motion with purpose: data flowing, glyphs morphing, numbers that move. |
| Approachable ↔ Authoritative | 2 / 5 (approachable) | Speak plainly, use first names (Will, Richard, David), never lecture. |
| Classic ↔ Modern | 3 / 5 | Pair a modern grotesk with editorial restraint. No retro, no sci-fi. |

**We are:** domain experts with pragmatic execution; easy-going, except about delivering outcomes.
**We are not:** a hype-driven AI startup, a slide-deck consultancy, or a black box.

---

## 3. Voice and tone

**Voice in one sentence:** *Human, trustworthy and competent, short sentences that sound like someone who has done the work.*

| Principle | Do | Don't |
|---|---|---|
| **Plain over clever** | "We embed with your company, ship agents in weeks." | "Unlock synergistic AI-powered transformation." |
| **Specific over vague** | "Manual work, down by 80%." "Onboarding, 120 days to 60." | "Massive efficiency gains." |
| **Name the stakes, calmly** | "Do nothing. The gap compounds. Against you." | Fear-mongering, ALL CAPS, exclamation marks. |
| **Show we've been there** | "We watched why from inside Gap." | Unsupported claims ("world-class", "leading"). |
| **Rhythm** | Short fragments for punch, then one fuller sentence. | Long paragraphs. Reading level above grade 9. |

**Words we use:** embed, ship, in production, agents, your teams, the work, compound, AI-native, transformation (sparingly), weeks / days.
**Words we avoid:** synergy, leverage, revolutionise, unlock, cutting-edge (as a claim), "AI-powered" as a label, magic, seamless, game-changer.

**Formatting:** sentence case for headlines; UPPERCASE for badges, labels and buttons. Numerals for stats ("80%", "120 days"). Oxford comma. US spelling on the web (the audience is US enterprise).

### 3.1 Messaging consistency (fix before scaling)

The production site, its metadata and the handoff build currently say different things:

| Where | Says | Recommendation |
|---|---|---|
| onmarker.com `<title>` / OG | "Forward-deployed teams that build your AI agents" | Align to the H1: **"Marker — Your AI transformation, actually shipped"** |
| onmarker.com meta description | "We agentify businesses… Live in days." | "We embed with your company, ship AI agents in weeks, and keep going until your transformation is complete. Backed by Y Combinator." |
| onmarker.com hero / steps | "ship the agents in **days**" · "In production in **days**" | Pick one promise. If the first agent is weeks and later ones days, say exactly that ("first agents in weeks, then days"). |
| Handoff build | "agents in **weeks**" · step 02 "Find" | Production renamed step 02 to "**Evaluate**". Update Figma to match. |

---

## 4. Logo

Files: [`assets/logo/`](assets/logo/) (SVG master + PNG at 64–1920px). File naming: `logomark-black` = black mark on transparent; `logomark-black-bg` = **white** mark on a black tile; `logomark-white-bg` = black mark on a white tile. The same pattern applies to `logo-full-*`.

| Version | Use |
|---|---|
| **Logomark** (the interlocking "M") | Favicon, app icon, social avatar, page-shell notch, small spaces |
| **Full logo** (mark + "Marker" wordmark) | Footer lockup, documents, slides, partner pages |

### 4.1 Usage (Brand Guidelines p. 4)
1. **Default:** black logomark on white for maximum clarity.
2. **Inverted:** white on black or dark backgrounds.
3. **On photos:** place it in a clear, low-detail area with enough contrast; use whichever of black or white works best. Never use a coloured logo on photos.

### 4.2 Size (p. 5)
- Digital minimum height **24px** (full logo). Print minimum height **0.5 in**.
- Below 24px, use the **simplified logomark**. Absolute minimum **16px**.
- Legibility test: all four letters must stay distinguishable.

### 4.3 Clear space (adopted 5 Nov 2026)
Keep clear space on all sides equal to **½ the height of the logomark**. Nothing (text, edges, other logos) enters that zone. Add this rule to the Figma deck (p. 5) next time it is edited.

**Never typeset the wordmark.** "Marker" next to the mark is a drawn lockup, not text in a font. Always use `logo-full-*.svg`. (Production currently types it in Archivo, which loads a whole font family for one word.)

### 4.4 Never (p. 6)
1. Distort, stretch or skew the wordmark.
2. Apply gradients, shadows or effects, or place it on a busy background image.
3. Change the letter spacing or the font.
4. Use a bold typeface for the wordmark.
5. Place it on busy backgrounds that reduce legibility.
6. Use a coloured logomark on a light background.

---

## 5. Colour

Full spec and contrast table: `DESIGN.md` §2.

| | Name | Hex | Brand role |
|---|---|---|---|
| ⬛ | Dark ink | `#1A1A1A` | Focus. The frame, the type, the logo. |
| ⬜ | Light | `#F6F6F6` (surfaces `#FFFFFF`) | Clarity. Space to think. |
| 🟨 | Lime | `#DDE830` | **The highlighter.** What matters. |
| 🟧 | Persimmon | `#F35901` | Energy and proof: results, data, momentum. |
| 🟫 | Beige | `#F6CD91` | Warmth (supporting) |
| 🟩 | Green | `#78D990` | Growth / done (supporting) |
| 🟪 | Pink | `#DBBFE9` | Play (supporting, sparingly) |
| 🟦 | Sky | `#87D1F8` | "In progress" in diagrams and data (supporting, illustration only) |

**Gradient:** Persimmon → white, vertical, often with a dot texture. This is the only gradient.

> **Fix in Figma:** the Colours page copy reads "Dark (#17201B) … Light (#F6F6F6)" while its swatches show `#1A1A1A` / `#FFFFFF`. The canonical values are **`#1A1A1A`** and **`#F6F6F6`**. The Figma variable `Neutrals/Dark/00 = #17201B` is legacy; delete or re-point it.

---

## 6. Typography

Three families only; Archivo is retired (DESIGN.md §3.4).

| Family | Role | Licence |
|---|---|---|
| **Stack Sans Headline** | Headlines, statements, stats | OFL (Google Fonts) |
| **Inter** | Body, UI, buttons | OFL (Google Fonts) |
| **Geist** | Labels and eyebrows (uppercase) | OFL (Google Fonts) |

Type scale (deck p. 12): 72 / 56 / 40 / 24 / 20px, extended in `DESIGN.md` §3.2 with body and label sizes and mobile values. Font files and CSS: [`assets/fonts/`](assets/fonts/).

---

## 7. Imagery and illustration

- **System illustrations first.** Node-cluster glyphs, connector diagrams, dot-matrix icons and small charts. They show the mechanism (work flowing through a system) rather than an "AI" metaphor.
- **Texture:** fine dot grids over flat fills (flat + textured, from the client's reference).
- **Photography (decided 5 Nov 2026): none on the website for now.** The site is illustration-led, as in the final design and on production. Photography appears only as a backdrop in brand application mock-ups (cool, desaturated architecture: concrete, glass, transit), never as a hero. When an About/Team page is commissioned, write a people-photography brief first: natural light, real offices, no stock handshakes.
- **Never:** robot hands, glowing brains, circuit-board blue, purple nebula gradients, AI-generated people.

---

## 8. Applications (in `brand-guidelines/pages/` and `assets/social/`)

| Application | Spec |
|---|---|
| LinkedIn cover | 1584 × 396. Six variants, `assets/social/linkedin-cover-01.png` to `linkedin-cover-06.png`. Keep the logo inside the right 2/3 (the avatar covers the bottom-left). |
| X / Twitter header | 1500 × 500. `assets/social/x-twitter-header.png`. Handle `@markerhq`. |
| Social avatar | `logomark-black-bg` (white mark on ink) at 400 × 400, or `assets/favicon/icon-512.png`. |
| OG / link preview | 1200 × 630. `assets/og/og-image-1200x630.png` (from the hero). |
| Favicon set | `assets/favicon/` — `.ico`, `.svg`, 32px, 180px Apple touch icon, 192/512px PWA icons, `site.webmanifest`. |
| Slides | 1920 × 1080 template (Figma page "Slides", 16 layouts). Dark shell frame, light canvas, Marker tab bottom-left. |
| Billboards / posters / tote / app icon / profile | Deck pp. 13–18. App icon = black logomark on the Persimmon gradient tile. |

---

## 9. Proof points (approved facts for copy)

Use these exactly; don't round up or embellish. If a page needs a fact that isn't listed, use a bracketed placeholder ("[pending client approval]") and get it signed off. Never invent numbers, client names or quotes.
- Backed by **Y Combinator**. **2-time YC founders.** **2 previous exits.**
- Founders sold their last company to **Gap** and **founded Gap's Office of AI**.
- Founders: **Will, Richard and David**, building together for **15 years**.
- **Fortune 500 retailer:** manual work in product operations **down 80%**; next up, assortment and buying.
- **8-figure prop-tech company:** first agent live in **3 weeks**; lease compliance automated end-to-end; onboarding **120 → 60 days**.
- "**95%** of AI initiatives still fail" — cite a source on the site or soften the wording (an enterprise buyer will ask where it comes from).

---

## 10. Asset index

| Folder | Contents |
|---|---|
| `assets/logo/svg`, `assets/logo/png` | 8 logo SVG masters; 32 PNG renders (64–1920px) |
| `assets/favicon/` | favicon.ico/svg, 32px, apple-touch-icon, 192/512 icons, `site.webmanifest` (icon paths assume the files sit at the web root) |
| `assets/og/` | 1200 × 630 Open Graph image |
| `assets/fonts/` | 4 self-hosted variable woff2 files; `fonts-core.css` (new work) and `fonts.css` (adds Archivo and Figma-export aliases) |
| `assets/icons/dot/` | 25 dot-matrix icons (`currentColor`) |
| `assets/icons/general/` | 15 UI glyphs (`currentColor`): badge diamond, button arrow, link-card arrow, checklist tick, and more |
| `assets/icons/social/` | LinkedIn, X, YouTube (`currentColor`; platform trademarks) |
| `assets/illustration/` | Node glyphs, quote glyph, blob, grid and pattern tiles |
| `assets/shapes/` | Primary button reference shape, shell inner-corner shape. `legacy-july-exploration/` holds superseded shapes — don't use. |
| `assets/social/` | 6 LinkedIn covers, X header |
| `assets/third-party/` | Y Combinator logo, only for the "Backed by Y Combinator" badge |
| `brand-guidelines/pages/` | All 18 pages of the Figma brand deck at 1920 × 1080 |
| `brand-guidelines/Marker-Brand-Guidelines-v1.0.pdf` | The same deck as one PDF |

**Not in the kit yet:** the *simplified logomark* for sizes under 24px that the deck mentions (p. 5). Figma has no separate file for it, so use the standard logomark down to 16px until the designer supplies one.

---

## 11. Links and URLs (as live on onmarker.com, 5 Nov 2026)

| Purpose | URL |
|---|---|
| Canonical site | `https://onmarker.com/` |
| Book a call (every primary CTA) | `https://info.onmarker.com/book-a-call` |
| Email | `mailto:founders@onmarker.com` |
| Section anchors (home) | `/#the-problem`, `/#the-solution`, `/#the-proof`, `/#how-it-works`, `/#who-we-are` |
| Privacy / Cookies / Terms | `/privacy`, `/cookies`, `/terms` (privacy rights: `/privacy#privacyrights`) |
| Trust Center | `https://trust.onmarker.com/` |
| LinkedIn | `https://www.linkedin.com/company/112296703/` |
| X | `https://x.com/markerhq` (`@markerhq`) |
| YouTube | `https://www.youtube.com/channel/UCfTEGXwS-TNobRvV1sT603A` |
| OG image (production) | Use `assets/og/og-image-1200x630.png`, served from the site root |

Pages that don't exist yet (About, Case studies, Insights) should link to their home-page anchors until they launch. Don't invent paths.
