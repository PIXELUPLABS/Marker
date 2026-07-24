# Marker — Design System

**Status:** Draft for client review
**Scope:** Marketing landing page (`marker-landing.html`)
**Last updated:** 2026-07-25

This document specifies the design system used to build the Marker landing page, updated to reflect the new brand color direction (Persimmon core + Lime/Beige/Green/Pink supporting palette). It's meant as a reference for stakeholder sign-off before the new palette is wired into the live page — the current build still runs on the previous amber/blue/teal token set until this is approved.

---

## 1. Color System

### 1.1 Core color

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--brand-primary` | Brand / Primary / Persimmon | `#F35901` | Primary CTA buttons, key accents, active states, brand marks. Replaces the previous amber (`#EAAB0B`) as the single dominant brand color. |

### 1.2 Supporting colors

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--brand-lime` | Brand / Secondary / Lime | `#DDE830` | Accent glyph color, secondary highlights, tag/badge variety |
| `--brand-beige` | Brand / Secondary / Beige | `#F6CD91` | Warm neutral accent, soft backgrounds, secondary glyph color |
| `--brand-green` | Brand / Secondary / Green | `#78D990` | Success/positive states, secondary glyph color — replaces teal (`#4AB6A9`) |
| `--brand-pink` | Brand / Secondary / Pink | `#DBBFE9` | Expressive accent, secondary glyph color — new addition, no direct predecessor |

**Usage principle:** Persimmon carries the primary brand weight — it's the only color that should appear on a CTA button, a link, or anywhere the product needs to say "act here." The four supporting colors exist for *variety without competing for attention*: illustrative glyph icons, multi-item card grids, and decorative moments (thermal gradients, testimonial blobs). No single supporting color should be treated as more "correct" than another — they rotate freely.

### 1.3 Proposed mapping from current build

The live page currently uses a 4-color accent rotation (amber / blue / teal / orange) for the Stakes glyph cards, and a 6-stop thermal gradient (blue→teal→lime→amber→orange) for decorative blobs. Proposed remap:

| Current | Hex | New | Hex |
|---|---|---|---|
| Amber (primary accent) | `#EAAB0B` | Persimmon | `#F35901` |
| Blue (glyph/gradient stop) | `#1274EA` | Pink | `#DBBFE9` |
| Teal (glyph/gradient stop) | `#4AB6A9` | Green | `#78D990` |
| Orange (glyph/gradient stop) | `#E07A1F` | Beige | `#F6CD91` |
| — | — | Lime | `#DDE830` *(new, available for a 5th rotation slot or gradient stop)* |

The thermal gradient (used behind the testimonial blob and End State glyph) would be rebuilt as a 5-stop sweep across Persimmon → Beige → Lime → Green → Pink instead of the current blue-to-orange sweep.

### 1.4 Neutral / UI colors (unchanged)

These are structural, not brand-expressive, and carry over as-is:

| Token | Hex | Usage |
|---|---|---|
| `--bg-1` | `#FFFFFF` | Card / panel backgrounds |
| `--bg-2` | `#FAFAFA` | Page background |
| `--dark-1` | `#2B2B2B` | Dark section background (Stakes, End State) |
| `--dark-2` | `#383838` | Dark section secondary surface |
| `--stroke-1` | `#EBEBEB` | Light-mode borders / dividers |
| `--stroke-2` | `#424242` | Dark-mode borders / dividers |
| `--ink` | `#1A1A1A` | Primary text |
| `--ink-2` | `#4D4D4D` | Secondary text |
| `--ink-3` | `#666666` | Tertiary / label text |
| `--ink-inv` | `#FFFFFF` | Primary text on dark backgrounds |
| `--ink-inv-2` | `#B2B2B2` | Secondary text on dark backgrounds |

---

## 2. Typography

| Role | Family | Weight | Usage |
|---|---|---|---|
| Display | **Archivo** | 500–600 | All headings (`d1`/`d2`/`d3`), footer wordmark, button labels baked into brand assets |
| Body | **Inter** | 400–600 | Paragraphs, nav, eyebrows, UI labels |

### Type scale

| Class | Size (clamp) | Line-height | Use |
|---|---|---|---|
| `.d1` | 2.5rem → 4.5rem | 1.04 | Hero headline |
| `.d2` | 2rem → 3.25rem | 1.08 | Section headlines |
| `.d3` | 1.35rem → 1.75rem | 1.2 | Sub-headlines |
| `.eyebrow` | 0.75rem | — | Pill-badge label, uppercase, letter-spacing .1em |
| `.lede` | 1.125rem | 1.55 | Section intro paragraphs |

---

## 3. Iconography

| Asset | Description | Where used |
|---|---|---|
| **Node-cluster glyph** | 8-point interconnected node/snowflake mark, filled with `currentColor` or a gradient | Hero corners, Stakes cards, How It Works rows, End State, testimonial blob, footer nav hover state |
| **Diamond sparkle badge** | 4-point sparkle, used inside every eyebrow pill | All section eyebrows |
| **Dot-trail arrow** | 8-dot diagonal chain forming an arrow shape | Secondary directional indicators (How It Works rows) |
| **Pixel corner bracket** | L-shaped pixel-block bracket | Hero frame corners |
| **Marker logo lockup** | Wordmark + mark, single-color, `currentColor`-driven | Header, footer |

All icons are inline SVG `<symbol>`/`<path>` definitions reused via `<use>`, colored through `currentColor` or `fill`, so any icon can take any brand color without duplicating markup.

---

## 4. Components

### 4.1 Buttons

Two states:
- **`.btn`** — a standard single-shape rounded pill (used for secondary/ghost actions, e.g. "How it works").
- **Split CTA button** — the primary button family (Book a call, Learn more). Constructed as a pill-shaped label fused to a smaller rounded-square arrow chip, joined by a diagonal interlocking cut. This is not a CSS approximation — each instance (nav, hero, Stakes, final CTA) is an exact SVG export baked with real vector text, guaranteeing pixel-identical rendering across every placement and screen size.

  Color variants: dark (`#2B2B2B` fill, white text/arrow — used on light backgrounds) and light (white fill, `#1A1A1A` text/arrow — used on dark backgrounds). Under the new palette, the dark variant's arrow-chip accent could optionally pick up Persimmon on hover to reinforce the primary color.

### 4.2 Eyebrow badges

Pill-shaped label: 1px border, white/transparent fill, diamond sparkle icon (currently Persimmon-colored under the new palette) + uppercase tracked label text. Used at the top of every section to identify its topic (e.g. "THE STAKES," "HOW IT WORKS").

### 4.3 Cards

- **Proof grid** — 3-column checklist cards (white background, teal check icon → would become Green under new palette).
- **Stakes glyph cards** — 4 light cards on the dark section background, each with a large colored node-cluster glyph + two-tone caption (bold lead-in, muted continuation). Glyph colors currently rotate amber/blue/teal/orange → would rotate through the 4 supporting colors under the new palette.
- **Playbook table** ("What we do") — two-column comparison table, teal accent dot on the "with Marker" column → Green under new palette.
- **How It Works flow rows** — horizontal cards with a small colored glyph, copy, a stat callout, and a dot-trail arrow. The final row is highlighted with a solid fill (currently amber → would become Persimmon).
- **End State grid** — 4 text cells on the dark section, teal top-border accent → Green under new palette.

### 4.4 Footer

Full-viewport-width band (no side margin/border-radius), with:
- A 4-column nav row (About us / Features / Articles / Contact) — hover-only corner icon using the node-cluster glyph.
- A bottom row: oversized "Marker" wordmark (Archivo) beside a single-line legal/utility link row.

### 4.5 CTA (closing band)

A dashed-border "plaque" shape (scalloped silhouette, not a plain rounded rectangle) with two goo-blob brace ornaments flanking the heading, and the split CTA button. Border/brace color is currently amber → would become Persimmon under the new palette.

### 4.6 Testimonial

Left-aligned quote with a decorative gradient blob (node-cluster glyph filled with the thermal gradient) bleeding off the section edge, prev/next controls, and a "n / total" page indicator. Ships with 4 rotating quotes (1 real, pending sign-off; 3 placeholder).

---

## 5. Page structure

In order, top to bottom:

1. **Header** — sticky, logo + nav links + primary CTA button.
2. **Hero** — headline, supporting copy, dual CTA (primary + ghost), 4 pixel-corner brackets, 2 decorative node-cluster glyphs.
3. **Proof** — YC badge eyebrow, headline, 3-item checklist grid, supporting note.
4. **The Stakes** *(dark)* — eyebrow + headline + "Learn more" CTA in the section head, 4 glyph cards below.
5. **What We Do** — eyebrow + headline, old-playbook-vs-Marker comparison table.
6. **How It Works** — eyebrow + headline, 3 flow rows (start → expand → offense), last row highlighted.
7. **The End State** *(dark)* — eyebrow + headline, 4-cell text grid, large gradient glyph.
8. **Testimonial** — carousel, decorative gradient blob.
9. **CTA** — scalloped plaque, brace ornaments, split button.
10. **Footer** — full-width nav grid + wordmark/links band.

A persistent dashed grid (2 vertical margin lines, full page height + horizontal rules framing the "open" sections — Hero, How It Works, CTA) runs behind the whole page as a structural/blueprint accent.

---

## 6. Responsive behavior

- Fluid type via `clamp()` throughout — no fixed breakpoint jumps for headline sizes.
- Breakpoints at `900px` (grid columns collapse: Stakes 4→2, footer nav 4→2, End State 2→1) and `560px` (single-column fallback, nav links hidden behind the primary CTA only).
- Decorative-only elements (hero corner glyphs, page grid lines, CTA braces) hide below `900px`/`640px` to avoid clutter on small screens.
- The footer's tall/airy nav row and CTA's brace ornaments switch to compact/hidden variants on mobile.

---

## 7. Open items for client sign-off

- [ ] Approve the core/supporting color mapping in §1.3, or provide preferred exact remap.
- [ ] Confirm whether Lime should occupy a 5th rotation slot (Stakes cards currently only need 4) or be reserved for future use (data viz, tags, etc.).
- [ ] Confirm thermal gradient direction/stops for the new palette (testimonial blob, End State glyph).
- [ ] Once approved, colors will be swapped in `marker-landing.html`'s `:root` token block — a single-file change, no component restructuring required.

---

## Appendix: Figma references

- Footer: `6CzE61LLYx9zlg2uEifiu8`, node `745:597`
- CTA / bracket plaque: `6CzE61LLYx9zlg2uEifiu8`, node `734:3011`
- Stakes glyph-card pattern ("Features" reference): `6CzE61LLYx9zlg2uEifiu8`, node `310:54`
- Explorations board (hero/nav/footer variants): `6CzE61LLYx9zlg2uEifiu8`, node `734:3062`
