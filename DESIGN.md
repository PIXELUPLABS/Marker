---
name: Marker
description: >
  A confident, structural, AI-native enterprise brand. One warm primary
  accent (Persimmon) does all the "act here" signaling; four supporting
  colors add variety without competing for attention. Flat surfaces, no
  elevation — hierarchy comes from color, scale, and a dashed structural
  grid, not shadows.
version: alpha
colors:
  primary: "#F35901"
  lime: "#DDE830"
  beige: "#F6CD91"
  green: "#78D990"
  pink: "#DBBFE9"
  ink: "#1A1A1A"
  ink-secondary: "#4D4D4D"
  ink-tertiary: "#666666"
  ink-inverse: "#FFFFFF"
  ink-inverse-secondary: "#B2B2B2"
  surface: "#FFFFFF"
  surface-page: "#FAFAFA"
  surface-dark: "#2B2B2B"
  surface-dark-raised: "#383838"
  border: "#EBEBEB"
  border-dark: "#424242"
  card-fill: "#E8E8E8"
  card-border: "#AEAEAE"
typography:
  d1:
    fontFamily: Archivo
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.025em
  d2:
    fontFamily: Archivo
    fontSize: 3.25rem
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.025em
  d3:
    fontFamily: Archivo
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.025em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.011em
  lede:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.015em
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.1em
  button-label:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: 500
    letterSpacing: -0.01em
rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 20px
  pill: 999px
spacing:
  3xs: 4px
  2xs: 8px
  xs: 12px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 96px
  4xl: 128px
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "12px 21px"
    height: 41px
  button-primary-inverse:
    backgroundColor: "{colors.ink-inverse}"
    textColor: "{colors.ink}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "12px 21px"
    height: 41px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "12px 21px"
  eyebrow-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "7px 16px 7px 10px"
  card-light:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "32px 21px 26px"
  card-on-dark:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "32px 21px 26px"
  footer-nav-column:
    backgroundColor: "{colors.card-fill}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "14px 14px 24px 24px"
---

## Overview

Marker is a marketing site for an enterprise-AI product, and the design language says the same thing the product does: *we build, we don't decorate.* The visual system is structural and slightly technical — dashed grid lines, exposed alignment, a single-color icon system built from repeated node-cluster glyphs — but warmed up by one confident accent color and generous whitespace so it never reads as cold or overly "engineered."

**Personality:** confident, structural, warm-technical. Closer to a well-run architecture studio than a SaaS dashboard — visible grid and generous negative space, but with one saturated color doing all the emotional work.

**Target audience:** enterprise buyers and operators evaluating an AI transformation partner — skeptical of hype, allergic to "strategy deck" aesthetics. The design should feel like evidence of craft, not persuasion.

**Flat, not flashy:** no drop shadows, no gradients-as-decoration (the one gradient we use is a deliberate brand device, not a background treatment), no skeuomorphic depth. Hierarchy comes from color, type scale, and structural grid — never from elevation.

---

## Colors

One primary, four supporting, and a neutral scale that never competes with either.

| Swatch | Token | Hex | Role |
|---|---|---|---|
| 🟧 | `primary` | `#F35901` | **Persimmon.** The only color allowed to mean "act here" — primary buttons, active states, the CTA plaque border, brace ornaments. If more than one element on a screen is Persimmon, one of them is wrong. |
| 🟡 | `lime` | `#DDE830` | Supporting accent — glyph rotation, tags, decorative variety. |
| 🟨 | `beige` | `#F6CD91` | Supporting accent — warm neutral glyph/background moments. |
| 🟩 | `green` | `#78D990` | Supporting accent — glyph rotation; doubles for positive/success states if the product ever needs one. |
| 🟪 | `pink` | `#DBBFE9` | Supporting accent — glyph rotation, the most expressive of the four; use sparingly. |

**Usage principle:** the four supporting colors are interchangeable and rotate freely across multi-item layouts (the Stakes glyph cards, gradient stops) — no single one is "more correct" than another. Persimmon is never interchangeable with them; it is reserved for interaction and emphasis, not decoration.

### Neutrals (structural, not brand-expressive)

| Swatch | Token | Hex | Role |
|---|---|---|---|
| ⬜ | `surface` | `#FFFFFF` | Card / panel fill |
| ⬜ | `surface-page` | `#FAFAFA` | Page background |
| ⬛ | `surface-dark` | `#2B2B2B` | Dark section background (Stakes, End State) |
| ⬛ | `surface-dark-raised` | `#383838` | Dark section secondary surface |
| ▫️ | `border` | `#EBEBEB` | Light-mode hairlines, dashed grid |
| ▪️ | `border-dark` | `#424242` | Dark-mode hairlines |
| ⬛ | `ink` | `#1A1A1A` | Primary text |
| ◾ | `ink-secondary` | `#4D4D4D` | Secondary text |
| ◾ | `ink-tertiary` | `#666666` | Tertiary / label text |
| ⬜ | `ink-inverse` | `#FFFFFF` | Primary text on dark surfaces |
| ▫️ | `ink-inverse-secondary` | `#B2B2B2` | Secondary text on dark surfaces |
| ◽ | `card-fill` | `#E8E8E8` | Footer band fill (distinct from page/card white) |
| ▫️ | `card-border` | `#AEAEAE` | Footer band hairlines |

### Gradient device

One 5-stop sweep — Persimmon → Beige → Lime → Green → Pink — used *only* on the two decorative node-cluster glyphs (testimonial blob, End State glyph). This is a signature brand device, not a general-purpose background treatment; don't reuse it as a page background, button fill, or section wash.

### Migration note

This palette replaces the previous amber/blue/teal/orange accent rotation. Direct swap map:

| Old | Hex | New | Hex |
|---|---|---|---|
| Amber (primary accent) | `#EAAB0B` | Persimmon | `#F35901` |
| Blue (glyph/gradient stop) | `#1274EA` | Pink | `#DBBFE9` |
| Teal (glyph/gradient stop) | `#4AB6A9` | Green | `#78D990` |
| Orange (glyph/gradient stop) | `#E07A1F` | Beige | `#F6CD91` |
| *(none)* | — | Lime | `#DDE830` *(new — 5th gradient stop; no card currently needs a 5th rotation color)* |

---

## Typography

Two families, strict role separation — display headlines never appear in Inter, body copy never appears in Archivo.

| Role | Family | Weight | Token |
|---|---|---|---|
| Display / headlines | **Archivo** | 500–600 | `d1`, `d2`, `d3` |
| Body / UI | **Inter** | 400–600 | `body-md`, `lede`, `label-caps`, `button-label` |

| Level | Size | Line-height | Tracking | Use |
|---|---|---|---|---|
| `d1` | 2.5rem → 4.5rem (fluid) | 1.04 | −0.025em | Hero headline only |
| `d2` | 2rem → 3.25rem (fluid) | 1.08 | −0.025em | Section headlines |
| `d3` | 1.35rem → 1.75rem (fluid) | 1.2 | −0.025em | Sub-headlines |
| `lede` | 1.125rem | 1.55 | −0.015em | Section intro paragraphs |
| `body-md` | 1rem | 1.5 | −0.011em | Default paragraph text |
| `label-caps` | 0.75rem | — | 0.1em, uppercase | Eyebrow badges, stat labels |
| `button-label` | 0.9375rem | — | −0.01em | Button text |

All headline sizes are fluid (`clamp()`), not fixed breakpoint jumps — type should never "pop" at a resize, it should flow.

---

## Layout

- **Content column:** 1200px max-width, centered, `clamp(20px, 4vw, 48px)` side padding. This is the only column width in the system — no secondary/narrow content column.
- **Section rhythm:** vertical section padding is `clamp(72px, 9vw, 128px)` top and bottom, uninterrupted — sections breathe at the same rate throughout the page.
- **Structural grid:** two dashed vertical lines run the full page height at the content column's left/right edge (`border` token, 1px dashed) — this is a literal guide, not decoration, so it must always align to the true content edge, never an arbitrary margin. Horizontal dashed rules frame the top/bottom of "open" sections (Hero, How It Works, CTA) that don't have their own solid background.
- **Card grids:** collapse 4 → 2 → 1 columns at `900px` / `560px`. Comparison tables and multi-column rows collapse to single-column with a top border replacing the vertical divider.

---

## Elevation & Depth

**Flat by rule.** No `box-shadow`, no drop shadows on cards, buttons, or containers — this is an explicit client requirement, not a stylistic default. Hierarchy is carried entirely by:

1. **Color contrast** — light cards on dark sections (Stakes, End State) read as "raised" through color alone.
2. **Scale and type weight** — not elevation.
3. **The structural grid** — dashed lines imply a blueprint/plane, which would conflict with any shadow-based depth cue.

The one exception is intentional and internal to a single icon asset: the CTA brace ornament carries a baked-in SVG inner-shadow from its source export. This is part of that icon's own illustration, not a UI elevation pattern, and should not be treated as license to add shadows elsewhere.

Interactive lift (e.g. a card nudging up 2–4px on hover) is fine — motion, not depth — as long as it isn't paired with a shadow.

---

## Shapes

- **Corner radius scale:** `sm` 8px (small chips), `md` 12px (cards, tables), `lg` 20px (large cards, CTA elements), `pill` 999px (all buttons, eyebrow badges).
- **Buttons are always pills** — no exceptions, including the arrow chip fused to primary buttons (rounded-square, not a full circle — see Components).
- **One signature non-rectangular shape:** the CTA plaque — a scalloped silhouette (union of three differently-sized rounded rectangles) rather than a plain rounded rectangle. This shape appears exactly once per page, at the closing CTA, so it stays a moment rather than a motif.
- **No skeuomorphism** beyond the node-cluster glyph family (which is illustrative, not chrome).

---

## Components

### Buttons

Two families:

- **Secondary button** (`button-secondary`) — a plain rounded pill, transparent fill, 1px border. Used for non-committal actions ("How it works").
- **Primary CTA button** — a pill-shaped label fused to a smaller rounded-square arrow chip via a diagonal interlocking cut (not a straight seam). Every instance is an **exact SVG export with real vector text baked in** — not a CSS approximation — guaranteeing pixel-identical rendering across nav, hero, Stakes, and the closing CTA regardless of label length.
  - `button-primary` (dark): `#2B2B2B` fill, white label + arrow. Used on light backgrounds.
  - `button-primary-inverse` (light): white fill, `#1A1A1A` label + arrow. Used on dark backgrounds (Stakes).
  - Height 41px, width scales with label (132px–184px across current instances).

### Eyebrow badge

Pill, 1px `border`, `surface` fill, diamond-sparkle icon (Persimmon) + uppercase tracked label. Opens every section.

### Cards

- **Proof grid** — 3-up checklist, white background, colored check icon.
- **Stakes glyph cards** (`card-on-dark`) — light cards on the dark section, large single-color node-cluster glyph + two-tone caption (bold lead-in, muted continuation). Glyph color rotates through the four supporting colors.
- **Playbook table** — two-column comparison, accent dot marks the "with Marker" column.
- **How It Works rows** — glyph + copy + stat callout + dot-trail arrow; the final row in a sequence gets a solid Persimmon fill instead of a border.
- **End State grid** — 4 text cells, colored top-border accent, no card background (sits directly on the dark section).

### Footer

Full-viewport-width band, no side margin or corner radius — it is the section, not a card floating on one. Two rows: a 4-column nav grid (hover-reveals a glyph icon, top-right of each column) and a bottom row pairing an oversized "Marker" wordmark with a single-line utility link row.

### CTA plaque

The one scalloped-shape moment (see Shapes) with a 1.5–2.5px dashed Persimmon border, two goo-blob brace ornaments flanking the headline, and a primary CTA button.

### Testimonial

Left-aligned quote, decorative gradient-filled node-cluster glyph bleeding off the section edge, prev/next controls, "n / total" indicator.

---

## Do's and Don'ts

**Do**
- Keep Persimmon exclusive to interactive/primary moments — buttons, active states, the one CTA border.
- Rotate the four supporting colors freely across multi-item grids; don't assign fixed meaning to any one of them.
- Keep every container flat — no shadows, ever.
- Align any new grid or guide line to the real 1200px content column, never an arbitrary percentage.
- Reuse the node-cluster glyph and dot-trail arrow for new iconography rather than introducing a second icon style.
- Export primary buttons as exact SVG assets when adding a new label — the diagonal-cut construction doesn't reproduce reliably in CSS.

**Don't**
- Don't use Persimmon decoratively (illustration fills, backgrounds) — it will dilute its meaning as the "act" color.
- Don't add a second display typeface or a narrower content column — the system only has one of each.
- Don't add box-shadow, drop-shadow, or any elevation cue to cards, buttons, or panels.
- Don't reuse the 5-stop gradient outside the two glyphs it's defined for.
- Don't introduce a rounded-rectangle CTA card — the scalloped plaque is the only non-rectangular shape in the system, and adding a second competes with it.

---

## Open items for client sign-off

- [ ] Approve the color mapping above, or provide a preferred exact remap.
- [ ] Confirm whether Lime is reserved for a future 5th rotation slot or general use (tags, data viz).
- [ ] Confirm gradient stop order for the new palette (testimonial blob, End State glyph).
- [ ] Once approved: this is purely a token swap against the values in this spec — no component restructuring required, regardless of what codebase or tool implements it.

## Appendix: source of truth

This spec is implementation-agnostic — it describes the design system, not any one codebase. For pixel-exact assets (icon paths, logo lockups, the CTA plaque silhouette, button constructions, etc.), pull directly from Figma rather than reverse-engineering an existing build:

- Footer — file `6CzE61LLYx9zlg2uEifiu8`, node `745:597`
- CTA / bracket plaque — file `6CzE61LLYx9zlg2uEifiu8`, node `734:3011`
- Stakes glyph-card pattern ("Features" reference) — file `6CzE61LLYx9zlg2uEifiu8`, node `310:54`
- Explorations board (hero/nav/footer variants) — file `6CzE61LLYx9zlg2uEifiu8`, node `734:3062`

Every icon, glyph, logo lockup, and button referenced by name in this spec exists as a real layer in these Figma files and can be exported (SVG/PNG/PDF) directly from there — treat Figma, not any particular build, as the canonical export source.

## Appendix: known gaps

This spec covers the full visual system. It does **not** yet cover, and should not be assumed to answer:

- Photography/illustration direction (the current design ships zero photos — 100% vector glyph iconography). If new material introduces photography, that treatment needs to be defined separately.
- Logo clear-space, minimum size, and misuse rules — not yet formalized; pull the lockup from Figma and confirm these with the brand owner before reuse.
- A dedicated icon/asset export pass — nothing has been bulk-exported as a standalone sprite sheet or asset library yet; export on demand from the Figma files above.
