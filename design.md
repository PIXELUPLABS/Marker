---
name: Marker
description: >
  Marker makes enterprises AI-native. The design language is confident,
  crafted and quietly playful: a dark ink frame around light editorial
  sections, Stack Sans Headline set tight, one lime highlighter on the
  words that matter, and Persimmon for emphasis and data. Depth comes from
  inset "pressed" surfaces and dot textures, never from drop shadows.
version: 1.1.0
updated: 2026-11-05
sources:
  figma: https://www.figma.com/design/AX5DIfecorSfNIi8MjEvtb/-Handoff--Marker
  brandGuidelines: Brand Guidelines v1.0 (Aug 2026), Figma page "Brand Guidelines"
  tokens: tokens/tokens.json
colors:
  persimmon: "#F35901"
  lime: "#DDE830"
  beige: "#F6CD91"
  green: "#78D990"
  pink: "#DBBFE9"
  sky: "#87D1F8"
  ink: "#1A1A1A"
  ink-secondary: "#4D4D4D"
  ink-tertiary: "#666666"
  ink-muted: "#888888"
  ink-inverse: "#FFFFFF"
  ink-inverse-secondary: "#B4B4B4"
  surface: "#FFFFFF"
  surface-page: "#F6F6F6"
  surface-chip: "#EDEDED"
  surface-sunken: "#E8E8E8"
  surface-dark: "#2B2B2B"
  surface-shell: "#1A1A1A"
  surface-inverse: "#000000"
  border: "#DCDCDC"
  border-subtle: "#E6E6E6"
  border-inverse: "#333333"
typography:
  display-xl:
    fontFamily: Stack Sans Headline
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.04em
  display-l:
    fontFamily: Stack Sans Headline
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.04em
  display-m:
    fontFamily: Stack Sans Headline
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.04em
  display-s:
    fontFamily: Stack Sans Headline
    fontSize: 2rem
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: -0.03em
  heading:
    fontFamily: Stack Sans Headline
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.02em
  subheading:
    fontFamily: Stack Sans Headline
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.02em
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.02em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.01em
  button:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.02em
  label:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.06em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.01em
  micro:
    fontFamily: Inter
    fontSize: 0.625rem
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 24px
  pill: 999px
spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "10": 40px
  "12": 48px
  "14": 56px
  "16": 64px
  "20": 80px
  "24": 96px
  "32": 128px
components:
  button-primary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    height: 40px
    padding: "0 14px"
  button-secondary:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border-subtle}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    height: 40px
    padding: "0 14px"
  section-badge:
    backgroundColor: "{colors.surface-chip}"
    textColor: "{colors.ink-tertiary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: 30px
  highlighter:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border-subtle}"
    rounded: "{rounded.xs}"
  metric-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "7px 18px 7px 14px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  link-card:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.ink}"
    typography: "{typography.display-s}"
    rounded: "{rounded.md}"
  navbar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-inverse}"
    rounded: "{rounded.sm}"
    height: 52px
---

# Marker — Design System

> **Repo copy.** Mirrors `Marker-Scale-Kit/DESIGN.md` v1.1.0 (5 Nov 2026). `tokens/` is included in this repo; paths under `assets/`, `brand-guidelines/`, `evidence/` and `tools/` refer to the Scale Kit. Edit the kit, then re-copy. Don't edit this file directly.

> **Read this first (humans and AI agents).** This file is the single source of truth for how Marker looks. It replaces the two older, contradictory docs (`Dev/Test/DESIGN.md` from the July exploration and `Dev/Final Version/Marker Test/design.md` from the August handoff build). Values live in [`tokens/tokens.json`](tokens/tokens.json); this file explains the rules. When the three disagree, the order of authority is **tokens.json → this file → Figma → any codebase**. Brand voice, logo rules and messaging live in [`BRAND.md`](BRAND.md).

**When building or editing UI with Claude Code (or any agent):**

1. Use only the colours in the `colors` block above. If you need a colour that isn't there, stop and ask — don't invent one.
2. Use only Stack Sans Headline (display), Inter (body/UI) and Geist (labels). Never add Archivo to new work (see §3.4).
3. Pick type from the scale in §3.2 — no ad-hoc pixel sizes.
4. No drop shadows. Only the three inset shadows in §5.2.
5. Every new section must work at 390px, 768px, 1024px and 1440px (§4).
6. Run the checklist in §9 before you call a page done.

---

## 1. Overview

**What Marker is.** An AI-transformation partner that embeds with enterprise teams and ships agents in weeks, then keeps going. Audience: executives at legacy mid-market and enterprise businesses, usually non-technical, sceptical of hype.

**The job of the design.** Make an enterprise buyer feel two things in the first five seconds: *these people are credible* and *these people care about design*. The client brief's anti-reference is "AI companies that feel like they were designed by AI", so the system deliberately avoids purple gradients, glassmorphism, glowing orbs and generic SaaS card stacks.

**Personality** (from the client brief): Confident · Crafted · Cutting-edge · Trustworthy · Effortless · Playful.

**Five design principles**

| # | Principle | What it means in practice |
|---|---|---|
| 1 | **Mark what matters** | The brand idea is "to mark is to highlight". One lime highlighter per headline, on the 1–4 words that carry the meaning. Never a whole sentence. |
| 2 | **Framed, not floating** | Every page sits in a dark ink shell (`surface-shell`) with rounded light and black sections inside it, like sheets on a desk. |
| 3 | **Pressed, not lifted** | Depth comes from inset shadows (buttons, cards pressed into the surface), never from drop shadows lifting things off the page. |
| 4 | **Systems you can see** | Diagrams, connector lines, dot-matrix icons and node glyphs show work flowing through a system. Prefer drawing the mechanism over a stock image. |
| 5 | **Flat and textured** | Flat fills mixed with fine dot textures. This echoes the client's reference (a Liberty print: "colours, playfulness, mixture of flat and textured fills"). |

---

## 2. Colour

### 2.1 Palette

**Neutrals do most of the work. Lime and Persimmon do the talking.**

| Token | Hex | Role |
|---|---|---|
| `ink` | `#1A1A1A` | Dark ink. Primary text, the page shell, logo tile, navbar. |
| `ink-secondary` | `#4D4D4D` | Secondary text. |
| `ink-tertiary` | `#666666` | Captions, labels and meta on light surfaces. |
| `ink-muted` | `#888888` | The de-emphasised half of two-tone headlines. **24px and up only.** |
| `ink-inverse` | `#FFFFFF` | Primary text on dark/black. |
| `ink-inverse-secondary` | `#B4B4B4` | Secondary text on dark/black. |
| `surface` | `#FFFFFF` | Cards, chips, raised panels. |
| `surface-page` | `#F6F6F6` | Light section background (the brand "Light"). |
| `surface-chip` | `#EDEDED` | Pills, tabs, section badges. |
| `surface-sunken` | `#E8E8E8` | Footer band and pressed states. |
| `surface-dark` | `#2B2B2B` | Primary button fill. |
| `surface-shell` | `#1A1A1A` | Page frame around all sections. |
| `surface-inverse` | `#000000` | Dark storytelling sections (Problem, Solution, Who we are). |
| `border` | `#DCDCDC` | Outlines on light surfaces. |
| `border-subtle` | `#E6E6E6` | Hairlines, dividers. |
| `border-inverse` | `#333333` | Hairlines on black. |

| Token | Hex | Role |
|---|---|---|
| `lime` | `#DDE830` | **The highlighter.** Behind key words in headlines; fills the closing CTA band. Always paired with `ink` text. |
| `persimmon` | `#F35901` | **Emphasis and data.** Proof numbers ("down by 80%"), chart bars, progress dots, the quote card gradient, the YC mark. |
| `beige` | `#F6CD91` | Supporting: illustration, chips, data series. |
| `green` | `#78D990` | Supporting: illustration, data series; also success/positive. |
| `pink` | `#DBBFE9` | Supporting: illustration, data series. Use sparingly. |
| `sky` | `#87D1F8` | Supporting: illustration and data **only** (e.g. "in progress" cells in How-it-works step 3). Never text, UI chrome or backgrounds. |

**Gradient (only one):** `persimmon-fade` = `linear-gradient(180deg, #F35901 0%, #FFFFFF 100%)`, usually with a dot texture overlay. Use it for the quote card, app icon and posters. Don't use it on buttons or as a full-section background.

### 2.2 Proportion

Aim for roughly **60% light neutrals · 25% ink/black · 10% lime · 5% persimmon + supporting colours** across a page. If a screen has more than one lime block and one persimmon focal point in view at once, something is competing.

### 2.3 Contrast (measured, WCAG 2.2)

| Foreground on background | Ratio | Allowed for |
|---|---|---|
| `ink` on `surface-page` | 16.10 | Everything |
| `ink-secondary` on `surface-page` | 7.82 | Everything |
| `ink-tertiary` on `surface-page` / `surface` | 5.31 / 5.74 | Everything (AA) |
| `ink-tertiary` on `surface-chip` | 4.90 | Everything (AA) |
| `ink-muted` on `surface-page` / `surface` | 3.28 / 3.54 | **Large text only** (24px+, or 18.66px+ bold) |
| `ink` on `lime` | 12.98 | Everything |
| `ink` on `persimmon` | 5.17 | Everything |
| `ink` on `sky` | 10.36 | Everything (but `sky` is illustration-only) |
| `ink-inverse` (white) on `persimmon` | 3.37 | **Large text and icons only** |
| `persimmon` text on `surface` / `surface-page` | 3.37 / 3.11 | **Large text only** (stats, 24px+) |
| `persimmon` on `surface-inverse` | 6.24 | Everything |
| `ink-inverse` on `surface-dark` | 14.16 | Everything |
| `ink-inverse-secondary` on `surface-inverse` | 10.13 | Everything |

> The old muted grey `#8F8F8F` measured **2.99:1** on `#F6F6F6`, which fails even the large-text minimum of 3:1. It is now `#888888` (3.28:1), which looks the same.

---

## 3. Typography

### 3.1 Families

| Role | Family | Weights | Notes |
|---|---|---|---|
| Display | **Stack Sans Headline** | 300, 400 | All headlines, statements, stats, quotes. Set tight (−0.04em). |
| Body / UI | **Inter** | 400, 500 | Paragraphs, buttons, chips, navigation. |
| Labels | **Geist** | 500 | Uppercase section badges and eyebrows. |

All three are SIL Open Font License fonts on Google Fonts. Self-host them; the files are in [`assets/fonts/`](assets/fonts/). Don't hotlink `static.figma.com` — that is Figma's private CDN, not a font host.

- **New work:** use `assets/fonts/fonts-core.css` (the three brand families only).
- **Codebases that contain Figma Make exports or Archivo:** use `assets/fonts/fonts.css`. It adds Archivo and the Figma alias names such as `"Stack Sans Headline:Regular"`.

### 3.2 Scale

Desktop = 1440px frame, mobile = 390px frame. Sizes are fluid between the two (`clamp()` values are in `tokens.json`).

| Token | Desktop | Mobile | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 72 | 40 | 1.05 | −0.04em | Slides, billboards, oversized hero moments |
| `display-l` | 56 | 36 | 1.15 | −0.04em | **Page H1 and section H2** |
| `display-m` | 40 | 30 | 1.15 | −0.04em | Proof headlines, big statements |
| `display-s` (Light 300) | 32 | 24 | 1.25 | −0.03em | Pull quotes, two-tone narrative, footer link cards |
| `heading` | 24 | 24 | 1.25 | −0.02em | Card titles, quote text |
| `subheading` | 20 | 20 | 1.3 | −0.02em | Small titles |
| `body-lg` | 18 | 16 | 1.45 | −0.02em | Hero sub-copy, section intros |
| `body` | 16 | 16 | 1.5 | −0.02em | Paragraphs |
| `body-sm` | 14 | 14 | 1.45 | −0.01em | Supporting copy, footer links |
| `button` | 14 | 14 | 1 | −0.02em, UPPERCASE | Button labels |
| `label` (Geist) | 12 | 12 | 1 | +0.06em, UPPERCASE | Section badges, eyebrows, table labels |
| `caption` | 12 | 12 | 1.3 | −0.01em | Chip titles, metadata |
| `micro` | 10 | 10 | 1.3 | 0 | Only inside diagrams and metric chips |

Stats such as "80%" use `display-xl`/`display-l` in Stack Sans Headline. Don't make up a separate stat size.

### 3.3 Headline patterns

- **Highlighter.** Wrap the 1–4 key words of a headline in the lime highlighter (§7.4). One per headline, at most one highlighted headline visible at a time.
- **Two-tone.** Lead clause in `ink`, continuation in `ink-muted`. Example: "**Do nothing.** The gap compounds. Against you." — the bold part is `ink`, the rest `ink-muted`. Large sizes only (contrast).
- **Persimmon line.** A proof headline may set its result line in Persimmon: "Manual work, **down by 80%.**" (large text only).
- Headlines are sentence case. Labels and buttons are UPPERCASE.

### 3.4 Archivo — retired (decided 5 Nov 2026)

Archivo is **not** part of the system. Production (onmarker.com) has already moved buttons and labels to Inter; there it survives only as a typeset "Marker" wordmark, which should be the logo SVG instead (BRAND.md §4). The Figma Make handoff export still references Archivo, so `assets/fonts/fonts.css` keeps it for that build only. When you touch any remaining Archivo usage, map it to:

| Archivo usage | Replace with |
|---|---|
| Archivo Medium 14 uppercase (buttons) | `button` (Inter 500) |
| Archivo SemiBold 12 (chip titles) | `caption` (Inter 500) |
| Archivo Regular 16 (card copy) | `body` (Inter 400) |
| Archivo for stats | `display-*` (Stack Sans Headline) |

New work uses `fonts-core.css`, which has no Archivo.

---

## 4. Layout and responsive behaviour

### 4.1 Page frame

- The page background is `surface-shell` (`#1A1A1A`). Each section sits inside it with a `shell-gutter` inset (12px desktop, 8px mobile) and `rounded.lg` corners where a section meets the frame.
- The logo sits in a notch cut out of the top-left corner of the hero (the shell colour wraps around it).
- Sections stack with **no gap**. Alternate light (`surface-page`) and black (`surface-inverse`) sections for rhythm, and end on the lime CTA band, then the footer.

### 4.2 Grid and spacing

| | Desktop (1440) | Mobile (390) |
|---|---|---|
| Section padding (x) | 80px | 20px |
| Section padding (y) | 80px | 56px |
| Content max width | 1280px | fluid |
| Columns | 12, 24px gutter | 4, 16px gutter |

Spacing uses the 4-point scale in the front matter (`spacing.1`–`spacing.32`). Gaps between blocks: 8 / 16 / 24 / 32 / 48 / 64.

### 4.3 Breakpoints

| Token | Width | Status |
|---|---|---|
| `base` | 390px | **Designed** in Figma (`Final Landing page - Mob`, node `1:72579`). Mobile-first base styles, no media query. Tailwind's `sm` stays at its default 640px. |
| `md` | 768px | **Derived, not drawn** (decided 5 Nov 2026). Follow the column rule below. Production onmarker.com already behaves this way at 768px (one-column narrative, 2-up cards, ~44px H1), so no separate Figma frame is needed. |
| `lg` | 1024px | Two-column layouts begin. |
| `xl` | 1280px | |
| `2xl` | 1440px | **Designed** in Figma (`Final Landing page`, node `1:68246`) |

**Column rule:** below `md`, everything is one column. From `md`, **card grids** (blog cards, footer link cards, credential lists) may go 2-up, but **narrative sections** (headline + copy + visual) stay one column. From `lg`, narrative sections go two-column and card grids go 3- or 4-up.

CSS custom properties don't work inside `@media`, so write the literal values (`@media (min-width: 768px)`) or use Tailwind's `md:` / `lg:` / `xl:` / `2xl:`, which come from `tailwind-theme.css`.

### 4.4 How sections collapse (from the Figma mobile frame)

| Section | Desktop | Mobile |
|---|---|---|
| Navbar | Logo notch; floating dark pill nav after scroll | Logo notch + hamburger; full-screen menu (`Final Mobile LP - active`) |
| Hero | Copy left, system diagram right | Copy, buttons, then a scaled diagram below |
| Problem | Headline + intro row; quote card + 2 stacked cards | Everything stacks; quote card first |
| Alternatives | Sticky heading left, 3 chart cards right | Heading, then cards stacked |
| Solution | Headline left; morphing glyph centre; copy right | Stacked; glyph between copy blocks |
| Proof | Tabs + case panel with bar chart | Tabs scroll horizontally; chart below copy |
| How it works | 4 rows: label · visual card · copy | Label, copy, visual card per step |
| Who we are | Headline left; credential list right | Stacked |
| CTA | Checklist panel + 2 link cards on lime | Stacked; link cards full width |
| Footer | 4 link cards + wordmark + legal row | 2 × 2 link cards, legal links wrap |

Never ship a fixed-width (1440px) layout to phones, and never let the page scroll sideways at any width.

---

## 5. Shape, depth and texture

### 5.1 Radius

| Token | Value | Use |
|---|---|---|
| `xs` | 6px | Buttons, highlighter, small tiles |
| `sm` | 10px | Navbar pill, inner panels, inputs |
| `md` | 14px | Cards, section panels |
| `lg` | 24px | Large containers: CTA panel, footer card, shell corners |
| `pill` | 999px | Chips, badges, metric pills |

The primary button is **not** a plain rectangle: the label block and the arrow chip interlock along a diagonal cut. The exact reference is `assets/shapes/button-primary-book-a-call.svg`; §7.5 gives a CSS build for any label. Files in `assets/shapes/legacy-july-exploration/` (pill button, scalloped CTA plaque, bracket) belong to the abandoned July direction. Don't use them.

### 5.2 Depth: inset only

No `box-shadow` that lifts an element. The system uses three **inset** shadows:

| Token | Value | Use |
|---|---|---|
| `highlighter` | `inset 0 0 4px rgba(0,0,0,.10)` | Lime highlighter |
| `inset-soft` | `inset 0 0 8px rgba(0,0,0,.07), inset 0 2px 3px rgba(0,0,0,.15)` | Secondary button at rest |
| `inset-press` | `inset 0 0 12px rgba(0,0,0,.10), inset 0 4px 8px rgba(0,0,0,.18)` | Link cards on hover/press |

> This corrects the July `DESIGN.md`, which said "no shadows, ever". The final design uses inset shadows deliberately. The rule is now **no drop shadows**.

### 5.3 Texture

- **Dot grid:** a fine dot pattern (1px dots, roughly 12px pitch) on black sections and inside the persimmon gradient: white at about 15% opacity on black, white at about 25% on persimmon. It is texture, not a guide line.
  ```css
  .dots-on-black { background-image: radial-gradient(rgb(255 255 255 / .15) 1px, transparent 1px); background-size: 12px 12px; }
  ```
- **Connector lines:** 1px `border` grey lines with small persimmon square nodes connect diagram elements (hero diagram, chips).

---

## 6. Iconography and illustration

- **Dot-matrix icons** ([`assets/icons/dot/`](assets/icons/dot/)): built from dots on a dot grid. This is the house icon style. Most are drawn at 30×30; a few are 32–37px wide, so size them by height (`icon-lg`, 30px).
- **UI glyphs** ([`assets/icons/general/`](assets/icons/general/)), each with a fixed job:

  | File | Job |
  |---|---|
  | `badge-diamond.svg` | The icon in every section badge (§7.3) |
  | `arrow-right.svg` | Inside primary buttons (Lucide, ISC licence), `icon-sm`, stroke 1.5 |
  | `arrow-dots-diagonal.svg` | Top-right corner of link cards (§7.9), `icon-md` |
  | `arrow-dots-right.svg` | Inline "next" links and connectors |
  | `check.svg` | Checklist ticks in the CTA band, coloured `persimmon` |
  | others (`route`, `spiral`, `balance-icon`…) | Free for diagrams and feature lists |

- **Social icons** ([`assets/icons/social/`](assets/icons/social/)): LinkedIn, X, YouTube for the footer. These are the platforms' trademarks; don't alter their shapes.
- **Node glyphs** ([`assets/illustration/glyphs/`](assets/illustration/glyphs/)): rounded node clusters for "systems/agents". Fill them flat in a supporting colour or with a dot texture. The quote mark for quote cards is `assets/illustration/quote-glyph.svg`.
- Don't mix in another icon library (Heroicons, Material, emoji). If an icon is missing, draw it on the dot grid.

**Colouring icons.** Every file in `assets/icons/` uses `currentColor`. That only works when the SVG is **inline** in the HTML (or imported as a component, e.g. Astro `<Icon>` or React SVGR). An `<img src="icon.svg">` ignores CSS colour. If you must reference the file, use it as a CSS mask:
```css
.icon { width: var(--size-icon-md); height: var(--size-icon-md); background: currentColor;
        -webkit-mask: var(--src) center / contain no-repeat; mask: var(--src) center / contain no-repeat; }
/* <span class="icon" style="--src:url(/assets/icons/general/check.svg); color: var(--color-persimmon)"></span> */
```
- Photography isn't defined yet. Brand applications in Figma use desaturated architectural photos behind UI panels; see `BRAND.md` §7.

---

## 7. Components

Each component lists its tokens, states and responsive notes. Figma node IDs refer to the handoff file.

### 7.1 Page shell
`surface-shell` background, `shell-gutter` inset, sections rounded `lg` where they meet the shell. The logo notch is a `surface-shell` tab holding the white logomark: about **168 × 100px at 1440** and **96 × 72px at 390** (measured from the Figma frames). Where the notch meets the hero, use the concave corner shape `assets/shapes/shell-inner-corner.svg` (fill `surface-shell`) so the curve flows into the section. **Every page has the shell, the notch and the navbar (§7.2).**

### 7.2 Navbar (Figma: `Navbar Default` 1:71534, `After scroll` 1:71832, `After scroll – Active` 1:72150)
- **Default:** only the logo notch is visible.
- **After scroll:** a floating `ink` pill (about 400 × 52, `rounded.sm`) appears top-centre with the wordmark and a menu icon.
- **Active (open):** the pill expands to show section links (Problem, Solution, Proof, What we do) and the primary CTA.
- **Mobile:** hamburger opens a full-screen ink menu (Figma `Final Mobile LP - active` 1:72550).
- The menu button needs `aria-expanded`, Escape closes it, and focus is trapped while it's open.

### 7.3 Section badge
A pill (`badge-height`, 30px): a small round tile holding `assets/icons/general/badge-diamond.svg` at about 14px, then the label in `label` (Geist 12, uppercase). On light: `surface-chip` fill, `ink-tertiary` text. On black: transparent fill, `border-inverse` outline, `ink-inverse-secondary` text (the build's `#CCCCCC` snaps to this). **Every section opens with one.**

### 7.4 Highlighter
`lime` background, `rounded.xs`, 1px `border-subtle`, `highlighter` inset shadow, padding `0 0.12em`. Build it as a **real inline element** with `box-decoration-break: clone`, so a phrase that wraps gets one highlight per line (as in Figma), and screen readers still hear the spaces. Don't use absolutely positioned rectangles behind the text. Keep the space **outside** the `<mark>`.

```html
<h2 class="type-display-l">The usual paths <mark class="hl">don't ship</mark></h2>
```
```css
.hl { background: var(--color-lime); color: var(--color-ink);
      border: 1px solid var(--color-border-subtle); border-radius: var(--radius-xs);
      box-shadow: var(--shadow-highlighter); padding: 0 .12em;
      -webkit-box-decoration-break: clone; box-decoration-break: clone; }
```

### 7.5 Buttons
| Variant | Spec | States |
|---|---|---|
| **Primary — "Book a call"** | `surface-dark` label block + separate arrow chip joined by the diagonal cut (reference: `assets/shapes/button-primary-book-a-call.svg`; CSS build below). Label `button`, white. Height 40. | Hover: chip slides right 2px, fill lightens to about 88% opacity. Focus: 2px `ink` outline, 2px offset (white on dark). |
| **Primary on dark** | Same shape, `surface` fill, `ink` label. | As above. |
| **Secondary — "How it works"** | `surface-page` fill, 1px `border-subtle`, `inset-soft` shadow, `rounded.xs`, label `button` in `ink`. Height 40. | Hover: fill `surface-chip`. Active: `inset-press`. |

Buttons are **links** (`<a href>`) when they navigate, which is almost always.

**Building the primary button.** `assets/shapes/button-primary-book-a-call.svg` is the exact 184 × 41 export for the "Book a call" label: a 136px label block, then a 48px arrow chip. Its width and `#2B2B2B` fill are fixed, so treat it as the reference. For any label, build it in CSS so the width follows the text:
```html
<a class="btn-primary" href="https://info.onmarker.com/book-a-call">
  <span class="btn-primary__label">Book a call</span>
  <span class="btn-primary__chip" aria-hidden="true"><!-- inline arrow-right.svg --></span>
</a>
```
```css
.btn-primary { display: inline-flex; height: var(--size-control-height); color: var(--color-ink-inverse); text-decoration: none; }
.btn-primary__label, .btn-primary__chip { background: var(--color-surface-dark); display: grid; place-items: center; }
.btn-primary__label { padding: 0 22px 0 14px; border-radius: var(--radius-xs) 0 0 var(--radius-xs);
  clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
  font: var(--type-button-weight) var(--type-button-size)/1 var(--type-button-family); letter-spacing: var(--type-button-tracking); text-transform: uppercase; }
.btn-primary__chip { width: 48px; margin-left: -6px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
  clip-path: polygon(8px 0, 100% 0, 100% 100%, 0 100%); }
.btn-primary:hover .btn-primary__chip { transform: translateX(2px); }
.btn-primary:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 2px; }
```
The `-6px` overlap leaves the 2px diagonal gap you see in Figma.

**Tap target.** Buttons are 40px tall visually (`size-control-height`), but the hit area must be at least 44px (`size-tap-target`) on touch screens. Don't change the visual height; extend the hit area instead:
```css
@media (pointer: coarse) { .btn-primary, .btn-secondary { position: relative; }
  .btn-primary::after, .btn-secondary::after { content: ""; position: absolute; inset: -2px 0; } }
```

### 7.6 Metric chip (hero diagram)
`surface` pill, `rounded.pill`, 26px icon circle with a dot icon, then a title (`caption`, `ink`) and value (`micro`, `ink-tertiary`). Chips connect with connector lines (§5.3). Decorative: mark them `aria-hidden` and put the same facts in real text somewhere on the page.

### 7.7 Cards
- **Content card:** `surface`, `rounded.md`, 24px padding, label (`label`) top-left, body bottom-left. On black sections this is the white "Condition / Present" card.
- **Quote card:** `persimmon-fade` + dot texture, `rounded.md`, a large quote glyph, quote in `heading`/`display-s`.
- **Chart card (Alternatives):** `surface`, `rounded.md`, a two-tone sentence ("**Do nothing.** The gap compounds."), and a chart drawn with persimmon bars and dots. Cards connect with a small dotted down-chevron.
- **Step card (How it works):** `surface`, `rounded.md`, a square illustration. The final step can use `green` as the "done" accent.

### 7.8 Proof panel
Black frame (`surface-inverse`) with tabs (`label`, active tab white, inactive `surface-chip`) above an inner `surface-page` panel. Left: `display-m` headline with a persimmon result line, `body` copy, then a key–value table (`label` rows, `border-subtle` dividers). Right: bar chart with a persimmon "result" bar. Tabs are real `role="tab"` buttons and switch with arrow keys.

### 7.9 Link card (CTA and footer)
`surface-page` panel, `rounded.md`, text in `display-s` bottom-left, `arrow-dots-diagonal.svg` (`icon-md`) top-right and always visible. Height about 120px desktop, 96px mobile. Hover/press: background `linear-gradient(140deg, var(--color-surface-page), var(--color-surface-sunken))` plus `inset-press`, over `duration-base`. The whole card is one `<a>`.

### 7.10 CTA band
`lime` section. A white panel holds the badge, headline with highlighter, `body` sub-copy, a two-column checklist (`check.svg` in `persimmon` + `body-sm`; one column below `md`), then two link cards ("Book a call", "founders@onmarker.com").

### 7.11 Footer
Sits on the lime band. A `surface` card, `rounded.lg`, holding:
- 4 link cards (Problem, Features, About us, Contact): 4-up from `lg`, 2 × 2 below.
- The **full logo lockup** (`assets/logo/svg/logo-full-black.svg`): about 50% of the card width at 1440 (roughly 560px wide), full content width on mobile.
- Legal links (`body-sm`, `ink-tertiary`) and social icons (`assets/icons/social/`, `icon-md`, `ink`).

All URLs are listed in `BRAND.md` §11.

---

## 8. Motion

| Token | Value | Use |
|---|---|---|
| `duration-fast` | 150ms | Hover colour/opacity |
| `duration-base` | 180ms | Card press, background swaps |
| `duration-reveal` | 400ms | Scroll reveals, letter stagger |
| `ease-out` | `cubic-bezier(.2,0,0,1)` | Default easing |

Signature motions are the connector-line "data flow" in the hero, the morphing glyph in Solution, and the two-tone letter reveal on the Alternatives paragraph. **Always honour `prefers-reduced-motion: reduce`:** show the final state with no animation. Never animate layout on scroll for the CTA.

---

## 9. Accessibility and quality checklist (definition of done)

- [ ] One `<h1>` per page, then `<h2>` per section in order. Visual size doesn't decide the level.
- [ ] Highlighted words keep their spaces in the DOM (screen readers must not hear "liketoday" or "onevery sideof").
- [ ] Every `<img>` has `alt`: a description if it carries meaning, `alt=""` if decorative.
- [ ] Every CTA is an `<a href>` or `<button>`. No click handlers on `<div>`/`<p>`.
- [ ] Tap targets are at least 44 × 44 on touch devices.
- [ ] Visible focus ring on every interactive element: 2px `ink` (light) / 2px `ink-inverse` (dark), 2px offset.
- [ ] Text contrast follows the table in §2.3.
- [ ] Works with no horizontal scroll at 360, 390, 768, 1024, 1280 and 1440.
- [ ] `prefers-reduced-motion` respected.
- [ ] Brand fonts self-hosted and loading (check DevTools → Network → Font).
- [ ] `<title>`, meta description, canonical, OG/Twitter image (1200×630), favicon set, and `theme-color` = `#1A1A1A`.

---

## 10. Do and don't

**Do**
- Use the highlighter on meaning, not decoration.
- Keep backgrounds to `surface-page`, `surface-inverse`, `lime` (CTA only) and the shell.
- Draw the system (diagrams, connectors, glyphs) instead of using stock "AI" imagery.
- Reuse dot icons and glyphs; extend them on the same 30×30 dot grid.
- Use the logo files from `assets/logo/` and the button construction in §7.5.

**Don't**
- Don't add drop shadows, glows, glassmorphism, neon or purple/blue "AI" gradients.
- Don't highlight more than one phrase per headline, or whole sentences.
- Don't put white body text on Persimmon, or set Persimmon body text on white (both 3.37:1).
- Don't introduce new greys. Snap to the neutral tokens.
- Don't set headlines in Inter, or body copy in Stack Sans Headline.
- Don't use Archivo in new work.
- Don't stretch, recolour (except black/white), outline or add effects to the logo (`BRAND.md` §4).

---

## 11. Scaling recipes (new pages and sections)

The client plans to add pages later (case studies, about, blog, careers). Build them from the same parts:

| New page | Recipe |
|---|---|
| **Case study** | **Hero:** badge "CASE STUDY", then the client descriptor ("8-figure prop-tech company") as plain `label` text beside it (or below it on mobile); `display-l` H1 with the highlighter on the result; `body-lg` summary; primary + secondary buttons; optional metric-chip diagram on the right. **Proof panel** (§7.8) with its own badge and H2. With one client, drop the tabs and show the client descriptor in the tab position as a static label. **Story (black section):** badge, H2, then Problem / Approach / Result as three content cards (H3 each) beside a quote card. **CTA band → footer.** Use only BRAND.md §9 facts. If a card needs a fact that isn't there, write a bracketed placeholder ("[Result detail — pending client approval]") rather than inventing one. |
| **About** | Hero → "Who we are" credential list → founder cards (photo direction pending; use logomark tiles until then) → timeline as How-it-works rows → CTA. |
| **Blog / Insights index** | Light section, `display-l` title, card grid (`card`, `rounded.md`, `label` category, `heading` title, `body-sm` excerpt): 1 column below `md`, 2 from `md`, 3 from `lg`. |
| **Article** | 680px measure, `display-m` title, `body-lg` intro, `body` paragraphs, `heading` subheads, persimmon pull-quote rule, CTA band at the end. |
| **Product (Marker Command Center)** | Reuse tokens. For app UI use `surface` / `surface-page` / `border` with `ink` text; persimmon for primary actions inside the app; supporting colours as the data-viz series order: persimmon, green, sky, beige, pink, lime. |

Before adding a component, check §7. If it truly doesn't exist, add it **here** first (tokens, states, responsive behaviour), then build it.

---

## 12. Implementation notes

### 12.1 Production — onmarker.com (client-maintained, Astro)
Audited on 2026-11-05. It's responsive, uses semantic sections and headings, real links (booking at `info.onmarker.com/book-a-call`), Termly cookie consent and Google-hosted fonts. To do: alt text on all 29 images, highlighter spacing for screen readers, `theme-color` (`#FDFAF5` → `#1A1A1A`), 44px tap targets, JSON-LD `Organization`, and the Archivo migration. Full list in `AUDIT.md`.

### 12.2 Handoff build — `PIXELUPLABS/Marker` (Figma Make → GitHub Pages)
Status 5 Nov 2026: the critical fixes below are on branch `fix/handoff-critical` and go live when it's merged to `master`. The page is still a fixed 1440px canvas (no mobile layout, AUDIT HO-4).

- **Two layers.** `src/imports/FinalLandingPage/index.tsx` is the raw Figma Make export (4,435 lines, 410 absolutely positioned nodes, 0 responsive breakpoints). `src/LandingPage.tsx` attaches hover, tab and reveal behaviour by **matching text and class fragments**, so renaming a label, class or tag silently drops the behaviour. Re-check both files together and test in a browser.
- **Adding a link to an export element.** Don't change the element's tag or classes. Add a stretched link as its last child: `<a href="…" aria-label="…" className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]" />`. The parent must be `relative`. For plain text links, put the `<a>` *inside* the `<p>` so the `<p>`'s text stays the same. This is how the CTAs, link cards and footer links work now. Section anchors (`#the-problem`, `#the-solution`, `#the-proof`, `#how-it-works`, `#who-we-are`) are `id`s on the section divs.
- **Fonts (fixed).** Figma Make writes classes like `font-['Stack_Sans_Headline:Regular',sans-serif]`, so a family literally named `Stack Sans Headline:Regular` must exist. `src/fonts.css` (a copy of `assets/fonts/fonts.css`) declares these aliases over self-hosted woff2 in `public/fonts/`.
- **Images (fixed).** `.gitattributes` stores PNGs, fonts and icons in Git LFS, so the deploy checkout uses `lfs: true`. Any new binary file you add also goes through LFS; make sure `git lfs` is installed before committing.
- **Node (fixed).** Vite 8 / Rolldown needs Node **≥ 22.12**: pinned in `package.json` `engines` and `.nvmrc`. On older Node, pnpm silently skips the native binding and the build fails.
- **Deploy.** Pages source must stay on "GitHub Actions". `vite.config.ts` imports `.figma/make/site.json` (title, description, OG, favicon live there). The base path comes from `GITHUB_PAGES_BASE`. On Windows Git Bash, set `MSYS_NO_PATHCONV=1` or the `/Marker/` base gets rewritten into a Windows path.
- **Recommendation:** treat this build as a visual reference only. Production scale-up should go into the Astro codebase using `tokens/` and the components above.

---

## 13. Figma source map (file `AX5DIfecorSfNIi8MjEvtb`)

| What | Page → frame | Node |
|---|---|---|
| Desktop landing page (final) | Dev Handoff & animations → Final Landing page | `1:68246` |
| Mobile landing page (final) | Dev Handoff & animations → Final Landing page - Mob | `1:72579` |
| Mobile menu closed / open | Final Mobile LP / Final Mobile LP - active | `1:72524` / `1:72550` |
| Navbar states | Navbar Default / After scroll / After scroll - Active | `1:71534` / `1:71832` / `1:72150` |
| How-it-works animations | 01 Understand / 02 Find / 03 Build & ship / 04 Compound | `1:68152` / `1:68083` / `1:68176` / `1:68121` |
| Brand guidelines deck | Brand Guidelines (18 pages) | `1:76633` … |
| Colours / Fonts / Typescale | Brand Guidelines pages 8 / 10 / 12 | `1:75985` / `1:76037` / `1:76354` |
| Social templates | Socials (LinkedIn covers, X header, profile mocks) | `1:66553` … `1:67136` |
| Slides template | Slides (16 × 1920×1080) | `1:77628` … |
| Figma variables | `color/*` collection (14 colours); legacy `Neutrals/Dark/00` = `#17201B` | — |

---

## 14. Resolved conflicts (what changed and why)

| Topic | Before | Now | Why |
|---|---|---|---|
| Display font | Archivo (July doc); Stack Sans + Archivo (Aug doc) | **Stack Sans Headline only** | Matches Brand Guidelines v1.0 |
| Shadows | "No shadows, ever" (July) | **No drop shadows; 3 inset shadows** | The final design uses inset depth |
| Primary button | Pill (July) | **6px radius + interlocking arrow chip** | Final design |
| Page background | `#FAFAFA` (July), `#EDEDED` (Figma var), `#F6F6F6` (build) | **`#F6F6F6`** | Brand "Light", used across the shipped design |
| Dark | `#17201B` (brand copy), `#1A1A1A` (swatch/var), `#000` (sections) | **`#1A1A1A` ink/shell, `#000` sections** | Swatch and variable agree; `#17201B` is legacy |
| Muted grey | `#8F8F8F` | **`#888888`** | Contrast (2.99 → 3.28) |
| Greys in build | 34 unique hex values | **22 colour tokens** | Snap near-duplicates (`#525252`/`#535353` → `#4D4D4D`, etc.) |
| Font sizes in build | 16 sizes incl. 54, 60, 64, 145.4px | **13-step scale** | 54/60 → 56; 64 → 72 |
| Radii in build | 14 values incl. 5950px | **5 tokens** | Snap to xs/sm/md/lg/pill |
| CTA plaque, scalloped shape, rotating glyph cards | Specified (July) | **Removed** | Exploration direction, not in final design |
| Fonts hosting | `static.figma.com` | **Self-hosted woff2** | Licence-safe and 4× lighter (199 KB woff2 vs. 814 KB TTF, measured) |
| Off-palette blue `#87D1F8` | Used in How-it-works step 3 (design and production) | **Added as `sky`**, illustration/data only | Both the design and the live site use it; formalise rather than remove |

## 15. Decisions (resolved 5 Nov 2026)

Decided from the final Figma design and the live production site (onmarker.com):

| # | Question | Decision | Basis |
|---|---|---|---|
| 1 | Keep Archivo? | **Retire it.** Inter for buttons/labels, logo SVG for the wordmark. | Production already uses Inter for all UI text; Archivo only renders the word "Marker". Brand Guidelines v1.0 list three families. |
| 2 | Blue `#87D1F8` in How-it-works step 3 | **Keep as `sky`**, a sixth supporting accent for illustration and data only. | Present in both the Figma design and production. |
| 3 | Tablet (768) / laptop (1024) frames | **Derive from this spec**; no new Figma frames for now. | Production at 768px already matches the column rule in §4.3. Revisit when new templates (case study, insights) are designed. |
| 4 | Logo clear space | **½ the logomark height on all sides** (BRAND.md §4.3). | Matches the spacing used around the logo notch and footer lockup. |
| 5 | Photography | **No photography on the website for now.** The site stays illustration-led (glyphs, diagrams, dot icons). Photography appears only as a backdrop in brand application mock-ups. | Production and the Figma design ship no photography; the illustration system is the differentiator. A people-photography brief is needed only when an About/Team page is commissioned. |
| 6 | Dark / Light values | **Dark `#1A1A1A`, Light `#F6F6F6`** (white `#FFFFFF` for cards). | Swatches, Figma variables and production agree. **Figma to-do for the designer:** fix the copy on brand-deck p. 8 and delete or re-point the legacy variable `Neutrals/Dark/00` (`#17201B`). |
