---
name: Marker Product UI
layer: product
extends: DESIGN.md
version: 1.2.0
updated: 2026-11-05
tokens: tokens/tokens.json (groups scale, ui.light, ui.dark, product)
css: tokens/tokens.css + ui/marker-ui.css
---

# Marker — Product UI (Command Center)

> **Repo copy.** Mirrors `Marker-Scale-Kit/PRODUCT.md` v1.2.0 (5 Nov 2026). This repo includes `tokens/`, `ui/`, the product examples in `examples/`, and the fonts, logos and product icons they use (in `assets/`). Other paths (the rest of `assets/`, `brand-guidelines/`, `evidence/`, `tools/`, `AUDIT.md`) refer to the Scale Kit. The kit's `DESIGN.md` is `design.md` here. Edit the kit, then re-copy. Don't edit this file directly.

> **Read this first (humans and AI agents).** This is the product layer of the Marker design system: everything needed to design and build app screens (the *Marker Command Center*), on top of the brand foundations in [`DESIGN.md`](design.md). Values live in [`tokens/tokens.json`](tokens/tokens.json). The components are implemented in [`ui/marker-ui.css`](ui/marker-ui.css). A working reference is in `examples/product-ui/` (every component, both themes) and `examples/command-center/` (a full dashboard screen).

**When building product UI with Claude Code (or any agent):**

1. Use the **theme tokens** (`--ui-*` / `ui-*` utilities), never raw scale colours or hex, so light and dark both work.
2. Use the **product type scale** (`ui-*`, 11–40px). The marketing scale (`display-*`, 56–72px) is for the website only.
3. Default control height is **32px** (`control-md`), table rows **44px** (`row`). Touch targets stay ≥ 44px.
4. **Primary actions are ink** (`action.primary`), not Persimmon. Persimmon is the *accent*: one emphasised action per screen, progress, key numbers.
5. Status always shows **an icon or dot plus a text label**, never colour alone. Red means error/destructive only.
6. **No drop shadows.** Overlays (menus, dialogs) use a border and a scrim.
7. Every screen must work in **light and dark**, at 1024px and above with the sidebar, and below 1024px with the drawer navigation.
8. **Avoid the generic "AI-made" look** (§14): no row of identical KPI tiles as the opener, no coloured rails on cards, no card around every block, no sparkle icons for AI. Use the Marker signature pieces instead (§7.2).
9. Run the checklist in §12 before calling a screen done.

---

## 1. Principles

| Principle | In practice |
|---|---|
| **Calm by default** | Neutral surfaces carry the layout; colour appears only where it means something (status, selection, the one accent). |
| **Framed like the website** | The app sits in the same ink frame as onmarker.com: an ink sidebar and gutter around a rounded light sheet. It's the first thing that makes the product recognisably Marker. |
| **Mark what matters** | The brand's lime highlighter becomes the product's *selection* language: the current nav item, search matches and the one number a screen exists to show are "marked" in lime. |
| **Ink acts, Persimmon points** | Primary buttons and checked controls are ink (like the website's "Book a call"). Persimmon is reserved for progress, the single accent action, and headline numbers. |
| **Dense but legible** | 14px body text, 32px controls and 44px rows. Numbers use tabular figures. The data stays the hero. |
| **Flat, framed, pressed** | The same depth rules as the brand: borders and inset "pressed" states, never floating shadows. |
| **Show the work** | Agents are systems. Prefer timelines, run logs, diagrams and before/after numbers over decoration. |

---

## 2. Colour

### 2.1 Theme tokens

Two themes generated from the same ramps. In CSS they are `--ui-<group>-<name>` (e.g. `--ui-bg-surface`); in Tailwind `bg-ui-bg-surface`, `text-ui-fg-secondary`, `border-ui-border-default`. Set the theme on `<html>`: `data-theme="light"`, `"dark"`, or `"system"` (follows the OS). With no attribute the tokens fall back to light. **Ship the app with `system` as the default** and let each user override it in their settings.

<!-- generated:semantic -->
| Token | Light | Dark | Use |
|---|---|---|---|
| `bg.canvas` | `#F6F6F6` | `#000000` | App background behind everything |
| `bg.surface` | `#FFFFFF` | `#1A1A1A` | Cards, tables, panels, inputs |
| `bg.raised` | `#FFFFFF` | `#2B2B2B` | Menus, popovers (with a border) |
| `bg.sunken` | `#EDEDED` | `#000000` | Table headers, wells, code |
| `bg.pressed` | `#EDEDED` | `#1A1A1A` | The pressed panel (one list that needs a person) |
| `bg.hover` | `#F6F6F6` | `#2B2B2B` | Row / item hover |
| `bg.active` | `#EDEDED` | `#333333` | Pressed item, skeletons, segmented-control track |
| `bg.selected` | `#F6FCD1` | `#232500` | Selected table row |
| `bg.inverse` | `#1A1A1A` | `#FFFFFF` | Toasts, tooltips |
| `bg.shell` | `#1A1A1A` | `#1A1A1A` | The ink frame: sidebar and gutter (same as the website) |
| `bg.shell-hover` | `#2B2B2B` | `#2B2B2B` | Hover on the ink frame |
| `bg.scrim` | `#1A1A1A` | `#000000` | Overlay behind dialogs and the drawer (56% opacity) |
| `fg.primary` | `#1A1A1A` | `#FFFFFF` | Main text and icons |
| `fg.secondary` | `#4D4D4D` | `#B4B4B4` | Supporting text, inactive nav |
| `fg.tertiary` | `#666666` | `#949494` | Placeholders, meta, timestamps |
| `fg.disabled` | `#B4B4B4` | `#4D4D4D` | Disabled text (no contrast requirement) |
| `fg.inverse` | `#FFFFFF` | `#1A1A1A` | Text on inverse backgrounds |
| `fg.on-shell` | `#FFFFFF` | `#FFFFFF` | Text, icons and focus ring on the ink frame |
| `fg.on-shell-muted` | `#B4B4B4` | `#B4B4B4` | Secondary text on the ink frame |
| `fg.link` | `#AC3C00` | `#FF966F` | Inline links |
| `fg.link-hover` | `#842C00` | `#FFBCA3` | Link hover |
| `fg.on-primary` | `#FFFFFF` | `#1A1A1A` | Text on primary buttons and checked controls |
| `fg.on-accent` | `#1A1A1A` | `#1A1A1A` | Text on accent (Persimmon) buttons |
| `fg.on-danger` | `#FFFFFF` | `#FFFFFF` | Text on danger buttons |
| `fg.on-highlight` | `#1A1A1A` | `#1A1A1A` | Text inside search highlights |
| `border.default` | `#DCDCDC` | `#333333` | Card, table and divider lines |
| `border.strong` | `#888888` | `#888888` | Input, checkbox and radio outlines (3:1) |
| `border.focus` | `#1A1A1A` | `#FFFFFF` | Focus ring |
| `border.selected` | `#1A1A1A` | `#FFFFFF` | Selected tab underline |
| `action.primary` | `#2B2B2B` | `#FFFFFF` | Primary button |
| `action.primary-hover` | `#1A1A1A` | `#EDEDED` |  |
| `action.primary-pressed` | `#000000` | `#DCDCDC` |  |
| `action.secondary` | `#FFFFFF` | `#1A1A1A` | Secondary button |
| `action.secondary-hover` | `#F6F6F6` | `#2B2B2B` |  |
| `action.secondary-pressed` | `#EDEDED` | `#333333` |  |
| `action.accent` | `#F35901` | `#F35901` | Accent button (one per screen, e.g. "Run agent") |
| `action.accent-hover` | `#FF966F` | `#FF966F` |  |
| `action.accent-pressed` | `#FFBCA3` | `#FFBCA3` |  |
| `action.danger` | `#C0041F` | `#C0041F` | Destructive button |
| `action.danger-hover` | `#940015` | `#940015` |  |
| `action.danger-pressed` | `#6C000C` | `#6C000C` |  |
| `action.disabled` | `#EDEDED` | `#2B2B2B` | Disabled control fill |
| `accent.highlight` | `#DDE830` | `#DDE830` | The highlighter: current nav item, search matches, the number that matters |
| `accent.progress` | `#F35901` | `#F35901` | Progress bars, step indicators |
| `accent.track` | `#F6F6F6` | `#2B2B2B` | Progress track |
<!-- /generated:semantic -->

### 2.2 Status colours

<!-- generated:status -->
| Status | Meaning | bg (L / D) | border (L / D) | fg (L / D) | solid (L / D) |
|---|---|---|---|---|---|
| **success** | Done, healthy, passed | `#ECFCEE` / `#002C0F` | `#BCEFC6` / `#005E29` | `#005E29` / `#97E3A7` | `#24984D` / `#4DB46A` |
| **warning** | Needs attention soon | `#FFF5E8` / `#351C00` | `#FADAAD` / `#6E4100` | `#6E4100` / `#FADAAD` | `#B16F18` / `#DFAB65` |
| **danger** | Failed, blocked, destructive | `#FFF4F3` / `#490005` | `#FFD4CF` / `#940015` | `#C0041F` / `#FFBAB3` | `#E0383B` / `#F06C65` |
| **info** | Neutral news, running, in review | `#EEF9FF` / `#00263A` | `#BCE7FF` / `#005378` | `#005378` / `#BCE7FF` | `#148AC1` / `#3BA7DD` |
| **neutral** | Draft, idle, unknown | `#EDEDED` / `#2B2B2B` | `#DCDCDC` / `#333333` | `#4D4D4D` / `#B4B4B4` | `#666666` / `#888888` |
<!-- /generated:status -->

Rules:
| State | Status colour | Words |
|---|---|---|
| Run finished well | success | Succeeded |
| Run in progress, scheduled, informational | info | Running · Scheduled |
| A person must look | warning | Needs review |
| Run broke, or a destructive action | danger | Failed |
| Not active | neutral | Paused · Draft |

**Agents** have their own states (Active · Paused · Draft · Error); **runs** have run states (Running · Succeeded · Failed · Needs review). Don't mix the two vocabularies.

- Use **fg** for status text, **solid** for dots and icons, **bg + border** for badges and alerts.
- Always pair with an icon or dot **and** a word ("Failed", "Running"). Never colour alone.
- **Red is only for errors and destructive actions.** Persimmon never means "error".
- When a chart series *means* good or bad (error rate, pass/fail), it uses status colours; otherwise it uses chart slots (§9). Never both in one chart.
- **Status colours are not colour-blind safe next to each other** (measured: warning vs danger ΔE 1.8 light; success vs danger 2.2 dark). Wherever two status colours touch (a stacked bar, adjacent cells), add the texture classes `mk-texture-a` (needs review) and `mk-texture-b` (failed) to the marks **and** their legend items, keep the 2px gaps, and give the counts in text.

### 2.3 Contrast (measured, WCAG 2.2)

All 134 text, icon and control pairs in both themes are checked by `tools/validate_docs.py` (4.5:1 for text, 3:1 for UI parts). Key pairs:

<!-- generated:contrast -->
| Pair | Light | Dark | Minimum |
|---|---|---|---|
| `fg.primary` on `bg.canvas` | 16.10 | 21.00 | 4.5 |
| `fg.secondary` on `bg.surface` | 8.45 | 8.39 | 4.5 |
| `fg.tertiary` on `bg.surface` | 5.74 | 5.74 | 4.5 |
| `fg.tertiary` on `bg.raised` | 5.74 | 4.67 | 4.5 |
| `fg.link` on `bg.surface` | 6.18 | 8.16 | 4.5 |
| `fg.on-primary` on `action.primary` | 14.16 | 17.40 | 4.5 |
| `fg.on-accent` on `action.accent` | 5.17 | 5.17 | 4.5 |
| `fg.on-danger` on `action.danger` | 6.41 | 6.41 | 4.5 |
| `fg.on-highlight` on `accent.highlight` | 12.98 | 12.98 | 4.5 |
| `status.success-fg` on `status.success-bg` | 7.49 | 10.14 | 4.5 |
| `status.warning-fg` on `status.warning-bg` | 8.05 | 11.91 | 4.5 |
| `status.danger-fg` on `status.danger-bg` | 5.94 | 10.06 | 4.5 |
| `status.info-fg` on `status.info-bg` | 7.83 | 11.96 | 4.5 |
| `border.strong` on `bg.surface` | 3.54 | 4.91 | 3.0 (UI) |
| `accent.progress` on `accent.track` | 3.11 | 4.21 | 3.0 (UI) |
<!-- /generated:contrast -->

### 2.4 Colour ramps

Each brand colour now has an 11-step ramp (50 lightest → 950 darkest), anchored on the exact brand value, plus a new **red** for errors. Use ramps directly only for illustration and charts; UI code uses the theme tokens above. CSS: `--scale-persimmon-600`; Tailwind: `bg-persimmon-600`.

<!-- generated:scale -->
| Family | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `neutral` | `#F6F6F6` | `#EDEDED` | `#DCDCDC` | `#B4B4B4` | `#888888` | `#666666` | `#4D4D4D` | `#333333` | `#2B2B2B` | `#1A1A1A` | `#000000` |
| `persimmon` | `#FFF4F0` | `#FFE9E1` | `#FFD5C6` | `#FFBCA3` | `#FF966F` | `#F35901` | `#D64D00` | `#AC3C00` | `#842C00` | `#601E00` | `#401100` |
| `lime` | `#F6FCD1` | `#EEF6A8` | `#DDE830` | `#CFD90C` | `#B7C000` | `#9CA400` | `#818800` | `#676C00` | `#4E5200` | `#373A00` | `#232500` |
| `beige` | `#FFF5E8` | `#FEECD2` | `#FADAAD` | `#F6CD91` | `#DFAB65` | `#CC8C38` | `#B16F18` | `#905700` | `#6E4100` | `#502E00` | `#351C00` |
| `green` | `#ECFCEE` | `#DAF7DF` | `#BCEFC6` | `#97E3A7` | `#78D990` | `#4DB46A` | `#24984D` | `#007B38` | `#005E29` | `#00431B` | `#002C0F` |
| `sky` | `#EEF9FF` | `#DCF2FF` | `#BCE7FF` | `#87D1F8` | `#69C1F0` | `#3BA7DD` | `#148AC1` | `#006E9D` | `#005378` | `#003B57` | `#00263A` |
| `pink` | `#FAF4FD` | `#F5EAFA` | `#EAD8F4` | `#DBBFE9` | `#CDA3E1` | `#B981D3` | `#9D66B6` | `#814C99` | `#653579` | `#49235A` | `#31143D` |
| `red` | `#FFF4F3` | `#FFE9E6` | `#FFD4CF` | `#FFBAB3` | `#FC958D` | `#F06C65` | `#E0383B` | `#C0041F` | `#940015` | `#6C000C` | `#490005` |

Neutral also has `0` = `#FFFFFF` and `350` = `#949494`.
<!-- /generated:scale -->

---

## 3. Typography

Same three families as the brand, plus **Geist Mono** for IDs, logs and code. Stack Sans Headline appears only in page titles, card headings and big numbers; everything else is Inter.

<!-- generated:type -->
| Token | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|---|
| `ui-display` | Stack Sans Headline | 40px | 400 | 1.1 | -0.03em | KPI hero numbers, dashboard hero. |
| `ui-title` | Stack Sans Headline | 28px | 400 | 1.2 | -0.03em | Page title (one per screen). |
| `ui-kpi` | Stack Sans Headline | 32px | 400 | 1.1 | -0.03em | Stat tiles. |
| `ui-heading` | Stack Sans Headline | 20px | 400 | 1.3 | -0.02em | Section and card titles. |
| `ui-subheading` | Inter | 16px | 600 | 1.4 | -0.01em | Group titles, modal titles. |
| `ui-body` | Inter | 14px | 400 | 1.45 | -0.006em | Default product text. |
| `ui-body-strong` | Inter | 14px | 500 | 1.45 | -0.006em | Emphasis, button labels, nav items. |
| `ui-small` | Inter | 13px | 400 | 1.4 | 0 | Secondary text, compact table cells. |
| `ui-caption` | Inter | 12px | 400 | 1.35 | 0 | Help text, timestamps, meta. |
| `ui-label` | Geist | 11px | 500 | 1.2 | 0.06em, UPPERCASE | Table headers, overlines (uppercase). |
| `ui-mono` | Geist Mono | 13px | 400 | 1.45 | 0 | IDs, logs, code, aligned numbers. |
<!-- /generated:type -->

CSS classes: `.type-ui-title`, `.type-ui-body`, … (from `tokens.css`). Tailwind: `text-ui-body`, `font-mono`. Rules:
- One `ui-title` per screen (the page `<h1>`).
- Numbers that line up in columns use `font-variant-numeric: tabular-nums` (`.mk-num`).
- Sentence case everywhere except `ui-label` (uppercase table headers and overlines).
- Minimum text size is 11px (`ui-label`), and only for uppercase labels. Running text is never below 12px.

---

## 4. Layout

### 4.1 App shell
```
┌────────────┬───────────────────────────────────────────┐
│  Sidebar   │  Top bar (56): menu · search · actions · avatar │
│  240px     ├───────────────────────────────────────────┤
│  (64px     │  Page (max 1440, padding 24)              │
│  collapsed)│   Page header: title + meta | actions      │
│            │   Content grid (12 col, 16–24px gaps)      │
└────────────┴───────────────────────────────────────────┘
```
- **The frame:** `.mk-shell` paints the ink frame (`bg.shell`, the same ink as the website shell) and holds an ink sidebar plus a rounded light sheet (`.mk-topbar` + `.mk-main`). The sidebar is **always ink, in both themes**; don't restyle its background, because its text tokens (`fg.on-shell`, `fg.on-shell-muted`) assume ink. Use the white logo there.
- **Sidebar:** logo, primary nav (Overview, Agents, Runs, Escalations, Opportunities), secondary nav (Data sources, Settings, Help), account at the bottom. The current item is marked with the lime highlighter.
- **Collapsed** (`data-sidebar="collapsed"` on `.mk-shell`): 64px, icons only. Labels stay in the accessibility tree; include both `.mk-sidebar__logo-full` and `.mk-sidebar__logo-mark` images and the CSS swaps them.
- **Drawer (below 1024px):** the top bar's menu button (`.mk-topbar__menu`, icon `menu`, `aria-controls` + `aria-expanded`) sets `data-nav-open="true"` on `.mk-shell`. Add a `.mk-scrim` element inside the shell. Opening moves focus to the first nav link; Esc or a scrim click closes it and returns focus to the menu button. The closed drawer is hidden from keyboard and screen readers (`visibility: hidden`).
- **Logos:** white logo on the ink frame; black logo on light surfaces; white on dark surfaces.
- **Top bar:** global search (`/` shortcut), notifications, theme toggle, account.
- **Page header:** `ui-title`, one line of meta (`ui-body`, secondary), actions on the right (at most one primary and one accent).

### 4.2 Grid and spacing
4-point spacing from `DESIGN.md`. Gaps: 8 inside controls, 12–16 between related items, 24 between sections. KPI rows auto-fit at ≥ 200px per tile. A main + side layout is 2fr / 1fr above 1024px and stacks below.

### 4.3 Responsive

| Width | Behaviour |
|---|---|
| ≥ 1280 | Full shell; tables show all columns |
| 1024–1279 | Full shell; hide low-priority table columns |
| 768–1023 | Sidebar becomes a drawer; two-column grids stack |
| < 768 | Single column; tables scroll horizontally inside their card; page padding 16 |

### 4.4 Sizes

<!-- generated:size -->
| Token | Value | Use |
|---|---|---|
| `control-sm` | 28px | Compact buttons/inputs in toolbars and tables. |
| `control-md` | 32px | Default product control height. |
| `control-lg` | 40px | Prominent actions; same as the marketing control height. |
| `row-compact` | 36px | Table row, compact density. |
| `row` | 44px | Table row, default density (also the touch target). |
| `sidebar` | 240px | Sidebar navigation, expanded. |
| `sidebar-collapsed` | 64px | Sidebar navigation, icon-only. |
| `topbar` | 56px | Top bar height. |
| `icon-sm` | 16px | Icons in controls and table cells. |
| `icon` | 20px | Navigation and standalone UI icons. |
| `gutter` | 24px | Page padding and grid gutter (16px below md). |
| `focus-ring` | 2px | Focus outline width (2px offset). |
<!-- /generated:size -->

---

## 5. Shape and depth

- **Radius:** controls `xs` (6px), cards and menus `sm` (10px), dialogs `md` (14px), badges and avatars `pill`.
- **No drop shadows.** Separation comes from `border.default`, surface colour and the dialog scrim (ink at 48% light, black at 64% dark).
- **Inset shadows only:** the pressed secondary button, the pressed panel (`mk-panel--pressed`) and pressed list items. Never a coloured rail.

---

## 6. Iconography

- **UI icons:** Lucide, stroke **1.5**, 16px in controls and tables (`icon-sm`), 20px in navigation (`icon`). A curated set is in `assets/icons/product/` and `ui/icons.js`; React: `lucide-react` with `strokeWidth={1.5}`.
- **Brand dot-matrix icons** (`assets/icons/dot/`): only at 30px and above, for empty states, onboarding and feature tiles. They're too fine to read at 16px.
- Icon-only buttons must have an `aria-label`. Decorative icons get `aria-hidden="true"`.

---

## 7. Components

Implemented in `ui/marker-ui.css` (class prefix `mk-`). Live in `examples/product-ui/index.html`.

### 7.1 Core components

| Component | Classes | Tokens and rules | Accessibility |
|---|---|---|---|
| **Button** | `mk-btn` + `--primary` / `--secondary` / `--ghost` / `--accent` / `--danger`; sizes `--sm` (28) / default (32) / `--lg` (40); `--icon` | Primary = ink. Accent = Persimmon with ink text, **max one per screen**. Danger only for destructive actions. Label `ui-body-strong`, verb first ("Run agent", "Export CSV"). | `<button>` or `<a>`; disabled uses `disabled`/`aria-disabled`; loading sets `aria-busy="true"` + spinner; 44px hit area on touch |
| **Text input / select / textarea** | `mk-input`, `mk-select`, `mk-textarea` inside `mk-field` with `mk-label`, `mk-help`, `mk-error` | `border.strong` outline (3:1); focus ring `border.focus`; error border `status.danger-solid` + message | `<label for>`; errors linked with `aria-describedby` and `aria-invalid="true"` |
| **Search** | `mk-search` (icon + `mk-input` + `mk-kbd`) | Matches wrapped in `<mark class="mk-highlight">` (lime) | `role="search"`; `/` focuses search |
| **Checkbox / radio / switch** | `mk-check`, `mk-switch` (native inputs) | Checked = `action.primary` fill with `fg.on-primary` mark | Native semantics; switch uses `role="switch"` |
| **Tabs** | `mk-tabs` + `mk-tab[aria-selected]` | Selected = ink text + 2px `border.selected` underline | `role="tablist"`/`tab`/`tabpanel`; arrow keys move |
| **Segmented control** | `mk-segmented` + `button[aria-pressed]` | For 2–4 view options (e.g. 7d / 30d / 90d) | `aria-pressed` |
| **Sidebar nav** | `mk-nav`, `mk-nav__item[aria-current="page"]`, `mk-nav__label` | On the ink frame; current item marked with the lime highlighter (`accent.highlight` + `fg.on-highlight`). No coloured rails. | `<nav aria-label>`; `aria-current="page"`; 44px items on touch |
| **Badge (status)** | `mk-badge` + `--success` / `--warning` / `--danger` / `--info`; `--running` pulses | Dot + label; never colour alone | Text label carries meaning |
| **Tag** | `mk-tag` | Neutral metadata, removable | Remove button has `aria-label` |
| **Table** | `mk-table-wrap` > `mk-table` (`--compact`); `mk-num`, `mk-table__primary` / `__secondary`; `mk-pagination` | Header `ui-label` on `bg.sunken`; rows 44px (36 compact); hover `bg.hover`; selected `bg.selected` | `<th scope>`; sortable headers use `aria-sort` + a button; caption or `aria-label` |
| **Card** | `mk-card`, `__header` / `__body` / `__footer` | `bg.surface`, `border.default`, radius `sm` | Heading inside each card |
| **KPI tile** | `mk-kpi` inside a `mk-card`; `__label` / `__value` / `__delta--good` / `--bad` | Value `ui-kpi`, tabular. Colour says **good or bad**, the icon and words say direction ("Down 0.8 pts"). Prefer the summary + stats pattern (§7.2) to a row of tiles. | Delta text says direction and comparison |
| **Alert / banner** | `mk-alert--info` / `--success` / `--warning` / `--danger` | Icon + title + body + optional action | `role="status"` (info/success) or `role="alert"` (danger) |
| **Toast** | `mk-toast-region` > `mk-toast` | `bg.inverse`; auto-dismiss 5s unless it has an action | Region `aria-live="polite"`; pause on hover/focus |
| **Dialog / drawer** | `<dialog class="mk-dialog">`, `mk-drawer` | Surface + border + `bg.scrim` at 56%, radius `md` | Native `<dialog>`: focus trap, Esc closes, focus returns. **Destructive dialogs open with focus on Cancel.** |
| **Menu / popover** | `mk-menu`, `mk-menu__item` (`--danger`), `mk-menu__sep` | `bg.raised` + border | `role="menu"` / `menuitem`; arrow keys |
| **Tooltip** | `mk-tooltip` | `bg.inverse`, `ui-caption`; never holds essential info | `aria-describedby`; shows on hover **and** focus |
| **Progress** | `mk-progress` > `mk-progress__bar` (`--value`) | Persimmon on the track | `role="progressbar"` + `aria-valuenow` |
| **Empty state** | `mk-empty`, `__icon` / `__title` / `__body` | Brand dot icon at 30px; one clear action | Heading + action button |
| **Loading** | `mk-skeleton`, `mk-spinner` | Skeletons for first load; spinner inside buttons | `aria-busy` on the region; respects reduced motion |
| **Avatar** | `mk-avatar` (`--lg`) | Initials on `bg.sunken` | Name in text or `aria-label` |
| **Breadcrumb** | `mk-breadcrumb` (an `<ol>` in `<nav aria-label="Breadcrumb">`) | For detail pages: Agents / Agent / Run | Last item `aria-current="page"` |
| **Danger zone** | `mk-card mk-card--danger` | Separate card at the end of a settings page; one destructive button | Confirm in a dialog (copy: BRAND.md §12) |
| **Scrim** | `mk-scrim` | Behind the mobile drawer | Click closes the drawer |

### 7.2 Marker signature pieces

These are what make the app feel like Marker and not like a generic dashboard. Use them in place of the usual defaults.

| Piece | Classes | Use it for | Instead of |
|---|---|---|---|
| **Ink frame** | `mk-shell` (+ `mk-sidebar`, `mk-topbar`, `mk-main`) | Every screen | A white sidebar with a grey border |
| **Eyebrow** | `mk-eyebrow` | The context above a page title ("Prop-tech workspace · November 2026"); the website's section badge | Breadcrumb-only headers, random category chips |
| **Summary sentence** | `mk-summary` > `mk-summary__lead` with one `<mark>` | The one number a screen exists to show, in a sentence, with a two-tone continuation ("*412 hours* of manual work handed back this month. About two and a half people's time.") | A row of four identical KPI tiles |
| **Ruled stats** | `mk-stats` > `mk-stat` (`__value`, `__label`, `__note--good` / `--bad`) | Supporting figures under the summary, divided by hairlines | More cards |
| **Pressed panel** | `mk-panel--pressed` | The one list that needs a person | A card with a coloured left border |
| **Timeline** | `mk-timeline` > `mk-timeline__item` (`--muted`) | Things that happened in order: today's activity, run steps. The connector line and Persimmon square nodes come from the website's hero diagram. | Activity feeds with avatars and "x mins ago" chips |
| **Emphasised bar** | `mk-bar` + `mk-bar--emphasis` | Grey history with the current period in Persimmon, labelled with its value | All bars in the accent colour |

---

## 8. Patterns for Command Center screens

| Screen | Layout |
|---|---|
| **Overview** | Eyebrow + title + actions → summary sentence and ruled stats → weekly chart (2fr) beside a pressed "Needs a person" panel (1fr) → today's timeline beside run outcomes → recent runs table. See `examples/command-center/`. |
| **Agents list** | Header with "New agent" (primary) → filters row (search, status select, owner) → table (name, team, status, last run, success rate, owner, row menu) |
| **Agent detail** | Header (name, status badge, "Run agent" accent + "Pause" secondary) → tabs (Overview, Runs, Configuration, Access) → content |
| **Run detail** | Header (run ID in mono, status) → timeline of steps with durations → log panel (`ui-mono`) → escalations needing a human (warning alert) |
| **Opportunities** | Ranked table of automation opportunities with a score bar (sequential Persimmon) and an "estimated hours/week" column |
| **Settings** | Left sub-nav + forms in cards; destructive actions in a separate "Danger zone" card |
| **Empty / first run** | Empty state with a dot icon, one sentence and one primary action ("Connect a data source"), left-aligned like a note |

**Content conventions for mock-ups and sample data**
- Label every page that shows invented numbers with a `mk-badge mk-badge--plain` reading **Sample data** next to the title.
- Run IDs: `run_` + 7 lowercase hex characters, in Geist Mono (`run_7f3a92c`). Agent IDs: `agt_` + 6 characters.
- People in mock-ups: the founders' first names (Will, Richard, David) or initials. Never invent customer names.
- Times follow BRAND.md §12 ("4 min ago" under 24h, then "5 Nov, 14:32"); durations "2m 14s".

---

## 9. Data visualisation

Built with the data-viz method: colour is assigned by job and the palette is computed and validated, not eyeballed.

**Categorical (series identity):** fixed order, never cycled. A 7th series folds into "Other".

<!-- generated:chart -->
| Slot | Hue | Light | Dark |
|---|---|---|---|
| 1 | persimmon | `#F35901` | `#F35901` |
| 2 | sky | `#148AC1` | `#0071A0` |
| 3 | beige | `#905700` | `#935A00` |
| 4 | green | `#24984D` | `#3DAB5F` |
| 5 | pink | `#9D66B6` | `#8A54A3` |
| 6 | lime | `#818800` | `#6A6F00` |
| other | neutral | `#888888` | `#949494` |
<!-- /generated:chart -->

Validated with the Machado 2009 colour-blindness simulation. Light: worst neighbouring pair ΔE 9.2 (protan/deutan), normal-vision 19.8. Dark: 14.0 / 22.5. Every slot is ≥ 3:1 on its surface. For scatter or map charts where any two series can touch, use **at most the first 3 slots** (validated all-pairs: 9.3 light, 8.3 dark).

- **Sequential (magnitude):** Persimmon `chart.seq-1…7` (light → dark; reversed in dark mode).
- **Diverging (above/below a baseline):** Sky ← neutral → Persimmon, `chart.div-1…7`.
- **Status series** (pass/fail, error rate): status solids, with icon and label.
- **Marks:** bars with 4px rounded data ends anchored to the baseline and a 2px gap between bars; 2px lines; markers ≥ 8px; recessive grid (`border.default`) and axis labels (`fg.tertiary`, 11px).
- **Text never wears series colour.** Values and labels use `fg.*`; a coloured swatch beside them carries identity.
- **Legend** whenever there are ≥ 2 series (direct labels too if ≤ 4). A single series needs no legend: the title names it.
- **One y-axis only.** Two measures of different scale → two charts.
- **Emphasis, not decoration:** history in `chart.other` grey, the current period in `chart.1` (Persimmon) with a value label. Colour everything only when each series needs its own identity.
- **Interaction:** hover/focus tooltip on every bar/point (crosshair for lines), and a "View as table" toggle. Pattern:
  ```html
  <path class="mk-bar" tabindex="0" role="img" aria-label="Week of Nov 3: 112 hours" …/>   <!-- focusable mark -->
  <div class="mk-tooltip" role="tooltip" hidden></div>                                  <!-- one shared tooltip, shown on mouseenter AND focus -->
  <button class="mk-btn mk-btn--ghost mk-btn--sm" aria-pressed="false" aria-controls="t">View as table</button>
  <div class="mk-table-wrap" id="t" hidden>…same numbers as a table…</div>
  ```
- **Gaps** between bars and stacked segments are literally 2px of background (`gap: 2px` or 2px of SVG spacing).
- **Big single numbers** are KPI tiles, not charts.

---

## 10. Motion

Product motion is quick and functional: 150ms hovers, 180ms panels and toasts, 400ms progress fills, all `ease-out`. No decorative motion in the app. A running agent's badge dot pulses; nothing else loops. Everything respects `prefers-reduced-motion`.

---

## 11. Content in the product

Voice, words and formats for UI copy are in [`BRAND.md`](BRAND.md) §12 (buttons, errors, empty states, numbers, dates).

---

## 12. Product checklist (definition of done)

- [ ] Works in **light and dark** (`data-theme`), with no hard-coded hex in components.
- [ ] Uses `ui-*` type and `control-*` sizes; one `ui-title` `<h1>` per screen.
- [ ] Every interactive element is keyboard-reachable with a visible focus ring; dialogs trap focus and close on Esc.
- [ ] Status = icon or dot + word; red only for errors and destructive actions.
- [ ] Tables have header `scope`, sortable headers use `aria-sort`, and numbers are right-aligned and tabular.
- [ ] Charts follow §9: fixed slot order, legend for ≥ 2 series, tooltip, table view, one axis.
- [ ] At most one accent (Persimmon) button per screen; primary actions are ink.
- [ ] Empty, loading and error states are designed, not left blank.
- [ ] No horizontal page scroll at 360, 390, 768, 1024, 1280 and 1440.
- [ ] Passes the §14 "generic AI look" check: no row of identical tiles as the opener, no coloured rails, no card around every block, no gradients or sparkles.
- [ ] Reduced motion respected; nothing essential lives only in a tooltip.

---

## 13. Implementation

```html
<html lang="en" data-theme="system">
<link rel="stylesheet" href="/fonts/fonts-core.css">      <!-- Stack Sans, Inter, Geist, Geist Mono -->
<link rel="stylesheet" href="/tokens/tokens.css">         <!-- variables + light/dark themes -->
<link rel="stylesheet" href="/ui/marker-ui.css">          <!-- mk- components -->
<body class="mk-app">
```
- **Tailwind v4:** `@import 'tailwindcss'; @import '../tokens/tokens.css'; @import '../tokens/tailwind-theme.css';`. Theme colours are utilities such as `bg-ui-bg-surface`, `text-ui-fg-secondary` and `bg-ui-status-danger-bg`; ramps such as `bg-persimmon-600`; sizes such as `h-ui-control-md`; type such as `text-ui-body`.
- **React / Astro:** wrap the `mk-` classes in components (`<Button variant="primary">` → `mk-btn mk-btn--primary`). Keep the class names so the CSS stays the single implementation.
- **Theme switch:** set `document.documentElement.dataset.theme` to `light`, `dark` or `system`, and store the choice per user.
- **Never** read colours from `scale.*` in component code; go through `ui.*` so dark mode stays correct.

---

## 14. Avoid the generic "AI-made" look

The client brief's anti-reference is *"AI companies that feel like they were designed by AI."* These are the patterns that make product UI look generated. Don't use them unless a designer has a specific reason.

| Don't | Why it reads as generated | Do instead |
|---|---|---|
| Open every screen with a row of four identical KPI cards | The default dashboard template | One summary sentence with the number that matters, then ruled stats (§7.2) |
| Put a border, radius and fill on every block | Flattens hierarchy; nothing stands out | Card only what is a separate object (a table, a form, a danger zone); let sections sit on the sheet |
| Coloured accent rail on the left of a rounded card or nav item | A known generated-UI tell | The lime highlighter for "current", a status badge for state |
| Purple/blue gradients, glassmorphism, glows, drop shadows | Generic "AI" aesthetics | Flat fills, hairlines, inset "pressed" depth, the dot texture |
| Sparkle ✨ / magic-wand / robot icons to mean "AI" | Cliché; says nothing about the work | Name the agent and what it did ("checked 48 leases") |
| Emoji as icons or section markers, "Welcome back 👋" | Template voice | Lucide icons at 16/20px; plain, specific headings |
| Everything centred | Template layout | Left-aligned, asymmetric grids (2fr/1fr), as on the website |
| Every chart series in a different bright colour | Decoration, not information | Grey history, Persimmon for the point that matters |
| "01 / 02 / 03" step numbers on things that aren't steps | Structure as decoration | Numbers only for real sequences |
| Vague, upbeat copy ("Supercharge your workflow!") | Generated tone | BRAND.md §3 and §12: plain, specific, past tense for results |

The test: if a screen could belong to any AI startup after swapping the logo, it isn't finished. Every screen should carry at least two Marker signatures (ink frame, highlighter, eyebrow badge, pressed panel, connector timeline, Stack Sans numbers).
