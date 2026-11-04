# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.

## Marker design system (read before any UI or copy change)

- **Website:** follow `design.md` (visual system, components, accessibility checklist) and `BRAND.md` (voice, logo, approved facts, URLs). Values live in `tokens/tokens.json`.
- **App UI (Marker Command Center):** follow `PRODUCT.md`. Components are in `ui/marker-ui.css` (`mk-` classes; light/dark via `data-theme` on `<html>`), icons in `ui/icons.js`. Working references: `examples/product-ui/` and `examples/command-center/` (plain HTML, open directly). These are not part of the website build.
- Use only the colour tokens (website: brand colours; app: the `--ui-*` theme tokens), the three brand fonts (Stack Sans Headline, Inter, Geist; Geist Mono for IDs in the app only) and the type scale. No drop shadows.
- Don't make it look AI-generated: no purple/blue gradients, glows, sparkle or robot icons, emoji as icons, rows of identical KPI cards or coloured rails on cards. Use Marker's own devices (ink frame, lime highlighter, eyebrow badge, pressed panel, connector timeline). Full lists: `design.md` §10 and `PRODUCT.md` §14.
- This build is a Figma Make export with a behaviour layer (`src/LandingPage.tsx`) that finds elements by text and class fragments. Don't rename labels, classes or tags in `src/imports/FinalLandingPage/index.tsx`. To make something clickable, add a stretched `<a>` child (see design.md §12.2).
- Fonts are self-hosted in `public/fonts/` and declared in `src/fonts.css`, including the Figma alias names. Don't reintroduce `static.figma.com` URLs.
- The design docs, `tokens/`, `ui/`, `examples/` and `assets/` are copies from the Marker Scale Kit. Change them in the kit and re-copy, so the two don't drift.
- Use Node 22.12 or newer (`.nvmrc`).
