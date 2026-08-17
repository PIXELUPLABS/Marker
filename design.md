# Marker — Landing Page Design Spec

## Overview

Full-width landing page for **Marker**, an AI transformation consultancy backed by Y Combinator. Dark/light contrast between sections, editorial typography, and orange (#f35901) accent.

---

## Colour Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg-dark` | `#1a1a1a` | Page shell, nav bar background |
| `--color-bg-light` | `#f6f6f6` | Hero section background |
| `--color-bg-black` | `#000000` | Problem section background |
| `--color-bg-alt` | `#f7f7f7` | CTA / footer panel |
| `--color-accent-orange` | `#f35901` | CTA button, chart bars, data dots |
| `--color-accent-yellow` | `#dde830` | Highlighter behind headings |
| `--color-text-primary` | `#1a1a1a` | Body text on light backgrounds |
| `--color-text-muted` | `#666666` | Secondary labels, captions |
| `--color-border` | `#e6e6e6` | Component outlines |
| `--color-surface-chip` | `#ededed` | Pill/chip backgrounds |
| `--color-surface-white` | `#ffffff` | Card and widget backgrounds |

---

## Typography

| CSS Family | Weight | Usage |
|---|---|---|
| `Stack Sans Headline` | 400 (Regular) | Hero H1, section headlines (56–54 px) |
| `Stack Sans Headline` | 300 (Light) | Supporting headings |
| `Archivo` | 600 (SemiBold) | UI labels, card titles, stat callouts |
| `Archivo` | 500 (Medium) | Button text, secondary labels |
| `Archivo` | 400 (Regular) | General body copy |
| `Inter` | 500 (Medium) | Badge / chip text, navigation |
| `Inter` | 400 (Regular) | Body paragraphs, footer links |
| `Inter Display` | 400 (Regular) | Widget sub-labels (falls back to Inter) |
| `Geist` | 500 (Medium) | Section category labels ("THE PROBLEM") |

Letter spacing: headlines use `tracking-[-2.24px]` to `tracking-[-1.28px]`; body uses `tracking-[-0.36px]`.

---

## Layout

- **Max width**: 1440 px, full-bleed
- **Page shell**: `bg-[#1a1a1a]`, `pt-[12px] px-[12px]`
- **Section vertical stack**: sections stacked as `flex-col` with no gap between them
- **Internal section padding**: 80 px horizontal, 56 px vertical (large sections)

---

## Sections (top → bottom)

### 1 — Hero (`Component1Hero`)
- Background: `#f6f6f6`, height 794 px
- Left content (~628 px wide): Y Combinator badge → 56 px Stack Sans headline (with yellow highlighter) → 18 px body copy → button row
- Right side: decorative node/edge diagram with floating metric chips (white pill cards)
- Buttons: "How it works" (bordered, inset shadow) + "Book a call" (dark fill, arrow icon, custom split-rect shape)
- Corner decoration: dark triangle notch (`Frame131`) at top-left

### 2 — Problem (`Component4`)
- Background: `#000000`, padding 80 px
- Top row: section label badge → 54 px headline with orange-→-transparent gradient on left card + body text right
- Card grid: 1 large orange-gradient card (quote + headline) + 2 white stacked small cards
- Large card uses radial gradient overlay orange-to-transparent, inner shadow

### 3 — Alternatives (`Component4TheAlternatives`)
- Background: white, sticky left heading column
- Right side: 3 panel cards, each showing a different "failed path" with a decorative chart/graph visual
- Charts use bar columns and scatter dot patterns (SVG)
- Section badge uses `#ebebeb` tab shape with Geist Medium label

### 4 — AI Agent Diagram (`Component3`)
- Black background, centered network/spider diagram showing agents connected to enterprise systems
- Agent node icons (circular with logos), connecting lines, system labels
- Headline overlay: "AI agents that understand your company then transform it"

### 5 — Proof (`Component6Proof`)
- White background, 80 px padding
- "What this looks like today" headline
- Split layout: stat callout left (large percentage with orange bars chart) + before/after comparison right
- Orange bar chart visualisation, semi-transparent bar columns

### 6 — How It Works (`Component5WhatWeDo`)
- Light `#f6f6f6` background
- Step-by-step numbered flow with connecting lines
- Each step: number badge, headline, short body

### 7 — Guarantee / Proof (`Component5`)
- Dark background, grid of deliverable items with checkbox-style indicators

### 8 — CTA + Footer (`Cta`)
- Background: `#dde830` (yellow-green)
- "You'll know in thirty seconds" headline + Book a call CTA
- Footer: `#f7f7f7` rounded card, logo left, nav links right in 3-column grid

---

## Component Patterns

### Pill Chips
```css
bg-[#ededed] rounded-[47px] px-[11px] py-[8px]
border border-[#e8e8e8]
font-['Inter:Medium'] text-[12px] text-[#666] tracking-[-0.12px]
```

### Yellow Highlighter
```css
absolute bg-[#dde830] rounded-[6px]
shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.1)]
border border-[#e6e6e6]
```
Place behind multi-word span in headline.

### "How it works" Button
```css
h-[40px] px-[14px] rounded-[6px]
bg-[#f7f7f7] border border-[#e6e6e6]
shadow-[inset_0px_0px_8px_rgba(0,0,0,0.07),inset_0px_2px_3px_rgba(0,0,0,0.15)]
font-['Archivo:Medium'] text-[14px] uppercase tracking-[-0.28px]
```

### "Book a call" Button
Custom split-rectangle SVG shape filled `#2b2b2b`, white Archivo Medium text, arrow-right icon.

### White Metric Cards (Hero)
```css
bg-white flex gap-[8px] items-center
pl-[14px] pr-[18px] py-[7px] rounded-[47px]
```
Icon circle 26 px (white bg + 0.935 px border), label stack: Archivo SemiBold 12 px + Inter Display 10 px muted.

### Section Badge (e.g. "THE PROBLEM")
```css
h-[30px] — SVG tab shape filled #ebebeb
font-['Geist:Medium'] text-[12px] uppercase text-[#ccc]
small dot icon left
```

---

## Fonts — @font-face Sources

All fonts served from `https://static.figma.com/font/`:

| Family | Weight | URL suffix |
|---|---|---|
| Archivo | 400 / 500 / 600 | `Archivo_wdth_wght__1` |
| Inter | 400 / 500 | `Inter_1` |
| Inter Display | 400 | `Inter_1` (fallback) |
| Stack Sans Headline | 300 / 400 | `StackSansHeadline_wght__1` |
| Geist | 500 | `Geist_wght__1` |

---

## Image Assets

Located in `src/imports/FinalLandingPage/`:

| File | Usage |
|---|---|
| `ca8d9e1da179ee07f1ad45f0759e66397a3f5b6c.png` | YC logo badge (24×24) |
| `f3fbc241b7270176067567b57897c9666d1d2a65.png` | Agent diagram background image |
| `92579c67003d9537e347a50327c54ced233f1185.png` | Ellipse / avatar 1 |
| `08f03e2aaab1edf744427c10e54b62f78c4c9eb0.png` | Ellipse / avatar 2 |
| `8dcb0d768da0407fbae8447dbec649b68f349967.png` | Ellipse / avatar 3 |
| `7ea9103e593d9e0a09875a0e57c5c686f63335ce.png` | Ellipse / avatar 4 |
| `ac02255e26edbdad10da4653276c7a31ceffde5d.png` | Union shape 1 |
| `d8f0ea52d5809b9e103187476150e65959f67149.png` | Union shape 2 |
| `935162f6b4465c0c7d9a075b8b5b2d53cc252207.png` | Line 680 |
| `9f2a009f87ed11a69944f76ac15e867d1a855ba2.png` | Line 682 |
| `8854961d8be477a8338fc143aa6b52de031e998e.png` | Line 683 |
| `4270fb1ddecc4393f3bb53413b7d0b14cbb73d25.png` | Line 684 |
| `5f9541c6f25e654c79f75fa549bb2545ff0574b6.png` | Line 685 |
| `a4528f49ca3b0a922e25a1bcba5cb8af76e2a97c.png` | Line 686 |

SVG paths: `src/imports/FinalLandingPage/svg-aqkc6nk658.ts`

---

## Recreating from Scratch

1. Wire fonts via `@font-face` in `index.css` (see table above).
2. Set page shell: `<div className="bg-[#1a1a1a] flex flex-col items-center pt-[12px] px-[12px]">`.
3. Stack sections in order: `Component1Hero` → `Component4` → `Component4TheAlternatives` → `Component3` → `Component6Proof` → `Component5WhatWeDo` → `Component5` → `Cta`.
4. Each section is full-width (1440 px) and self-contained with its own background.
5. Import SVG paths from `svg-aqkc6nk658.ts` and image assets as ES module imports.
6. The yellow highlighter (`#dde830`) is an absolute-positioned `<div>` placed behind key heading words — not inline `<mark>`.
7. The hero right-side diagram uses absolute positioning at desktop scale; wrap in an `overflow-hidden` container for smaller viewports.
