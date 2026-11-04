# Product UI examples

Copied from the Marker Scale Kit (v1.2). Both pages are plain HTML: open `index.html` directly in a browser, no build step. They are not part of the website build.

| Folder | What it shows |
|---|---|
| `product-ui/` | Every component in `ui/marker-ui.css`, in light, dark and system themes, plus the Marker signature pieces (breadcrumb, eyebrow badge, summary with stats, pressed panel, timeline, danger zone). |
| `command-center/` | The Overview screen from `PRODUCT.md` §8, inside the ink frame: summary sentence, ruled stats, an accessible bar chart with a table view, a "Needs a person" panel, a timeline and a runs table. All numbers are **sample data**. |

Add `?theme=dark` (or `?theme=light`) to the address to force a theme. Both pages read only `tokens/tokens.css`, `ui/` and the files in `assets/`, and work offline.
