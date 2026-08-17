import { useEffect, useRef, RefObject } from 'react';

// ─── Hero flow animation ──────────────────────────────────────────────────────
// Drives the entire hero graphic:
//   • Dark dots + the three gray statement pills flow DOWN the curved top lines
//     (Line 673/674/675) into the center logo. Pills scale down and fade as they
//     converge on the logo.
//   • Orange dots emerge BELOW the logo and travel down the straight stream lines
//     (Line 676/677/678) into the static bottom metric pills, which never move.
//
// All positions are sampled from the actual rendered SVG <path> elements via
// getPointAtLength + getScreenCTM, so every dot rides exactly on its line.

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
}

interface PathInfo {
  el: SVGPathElement;
  len: number;
  reversed: boolean; // true => t=0 maps to the far end so t=0 is always top-most
}

interface Dot {
  path: number;   // index into the relevant path list
  offset: number; // phase offset 0..1
  speed: number;  // laps per ms
}

interface PillRider {
  el: HTMLElement;    // the pill DOM node
  path: number;       // top-line index it rides
  offset: number;     // phase offset 0..1
  speed: number;      // laps per ms
  baseX: number;      // untransformed screen-space center
  baseY: number;
}

export default function HeroCanvas({ containerRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let canvasRect = new DOMRect();

    let topPaths: PathInfo[] = [];    // Line 673/674/675  (top → logo)
    let streamPaths: PathInfo[] = []; // Line 676/677/678  (logo → bottom pills)
    let darkDots: Dot[] = [];
    let orangeDots: Dot[] = [];
    let pills: PillRider[] = [];

    function makePathInfo(el: SVGPathElement): PathInfo {
      const len = el.getTotalLength();
      const a = el.getPointAtLength(0);
      const b = el.getPointAtLength(len);
      return { el, len, reversed: a.y > b.y };
    }

    // Sample a path at t (0..1, oriented so 0 = top) → canvas-space [x, y].
    function sample(info: PathInfo, t: number): [number, number] {
      const tt = info.reversed ? 1 - t : t;
      const local = info.el.getPointAtLength(tt * info.len);
      const m = info.el.getScreenCTM();
      if (!m) return [0, 0];
      const sx = local.x * m.a + local.y * m.c + m.e;
      const sy = local.x * m.b + local.y * m.d + m.f;
      return [sx - canvasRect.left, sy - canvasRect.top];
    }

    function collect() {
      const container = containerRef.current;
      if (!container) return;
      const hero = container.querySelector('[data-name="1 - Hero"]') as HTMLElement | null;
      if (!hero) return;

      canvasRect = canvas!.getBoundingClientRect();

      const byId = (id: string) => hero.querySelector(`path[id="${id}"]`) as SVGPathElement | null;
      const top = ['Line 673', 'Line 674', 'Line 675'].map(byId).filter(Boolean) as SVGPathElement[];
      const stream = ['Line 676', 'Line 677', 'Line 678'].map(byId).filter(Boolean) as SVGPathElement[];
      topPaths = top.map(makePathInfo);
      streamPaths = stream.map(makePathInfo);

      // Dots: several per line, staggered, continuously looping.
      darkDots = [];
      topPaths.forEach((_, pi) => {
        for (let k = 0; k < 4; k++) {
          darkDots.push({ path: pi, offset: (k / 4 + pi * 0.13) % 1, speed: 0.000055 + Math.random() * 0.00002 });
        }
      });
      orangeDots = [];
      streamPaths.forEach((_, pi) => {
        for (let k = 0; k < 4; k++) {
          orangeDots.push({ path: pi, offset: (k / 4 + pi * 0.17) % 1, speed: 0.00007 + Math.random() * 0.00003 });
        }
      });

      // Gray statement pills ride the top lines into the logo.
      const pillTexts = ['Growth is', 'Headcount scales with workload', '95% grunt work'];
      const pillEls: HTMLElement[] = [];
      pillTexts.forEach((txt) => {
        const p = Array.from(hero.querySelectorAll('p')).find((el) => el.textContent?.trim().startsWith(txt));
        const pill = p?.closest('div[class*="rounded-[47px]"]') as HTMLElement | null;
        if (pill) pillEls.push(pill);
      });

      pills = pillEls.map((el, idx) => {
        // measure untransformed center in canvas-space (scroll-invariant)
        el.style.transform = 'none';
        const r = el.getBoundingClientRect();
        return {
          el,
          path: 0,
          offset: idx / pillEls.length,
          speed: 0.000018 + idx * 0.000003,
          baseX: r.left + r.width / 2 - canvasRect.left,
          baseY: r.top + r.height / 2 - canvasRect.top,
        } as PillRider;
      });

      // Assign each pill to the top line whose top endpoint is nearest in x.
      const used = new Set<number>();
      pills.forEach((pill) => {
        let best = 0;
        let bestD = Infinity;
        topPaths.forEach((info, i) => {
          if (used.has(i)) return;
          const [tx] = sample(info, 0);
          const d = Math.abs(tx - pill.baseX);
          if (d < bestD) { bestD = d; best = i; }
        });
        used.add(best);
        pill.path = best;
        pill.el.style.willChange = 'transform, opacity';
        pill.el.style.pointerEvents = 'none';
      });
    }

    function resize() {
      const container = containerRef.current;
      if (!container) return;
      const hero = container.querySelector('[data-name="1 - Hero"]') as HTMLElement | null;
      if (!hero) return;
      const hr = hero.getBoundingClientRect();
      const cr = container.getBoundingClientRect();
      canvas!.style.top = hr.top - cr.top + 'px';
      canvas!.style.left = hr.left - cr.left + 'px';
      canvas!.style.width = hr.width + 'px';
      canvas!.style.height = hr.height + 'px';
      canvas!.width = hr.width;
      canvas!.height = hr.height;
      collect();
    }

    function drawDot(x: number, y: number, r: number, color: string, alpha: number) {
      ctx!.save();
      ctx!.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx!.fillStyle = color;
      ctx!.translate(x, y);
      ctx!.rotate(Math.PI / 4);
      ctx!.fillRect(-r / 2, -r / 2, r, r);
      ctx!.restore();
    }

    function draw(now: number) {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sc = canvas.width / 1440;
      const r = 5 * sc;

      // Dark dots: top → logo. Fade in at start, fade out into the logo.
      for (const d of darkDots) {
        const info = topPaths[d.path];
        if (!info) continue;
        const t = (d.offset + now * d.speed) % 1;
        const [x, y] = sample(info, t);
        const a = (t < 0.1 ? t / 0.1 : 1) * (t > 0.82 ? (1 - t) / 0.18 : 1);
        drawDot(x, y, r, '#1c1c1c', a * 0.85);
      }

      // Orange dots: below logo → static bottom pills.
      for (const d of orangeDots) {
        const info = streamPaths[d.path];
        if (!info) continue;
        const t = (d.offset + now * d.speed) % 1;
        const [x, y] = sample(info, t);
        const a = (t < 0.12 ? t / 0.12 : 1) * (t > 0.85 ? (1 - t) / 0.15 : 1);
        drawDot(x, y, r, '#f35901', a * 0.9);
      }

      // Gray pills ride the top lines into the logo: scale down + fade out.
      for (const pill of pills) {
        const info = topPaths[pill.path];
        if (!info) continue;
        const t = (pill.offset + now * pill.speed) % 1;
        const [cx, cy] = sample(info, t); // canvas-space center target
        const scale = 1 - 0.72 * t; // 1 → 0.28
        const op = (t < 0.08 ? t / 0.08 : 1) * (t > 0.6 ? Math.max(0, (1 - t) / 0.4) : 1);
        const dx = cx - pill.baseX;
        const dy = cy - pill.baseY;
        pill.el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
        pill.el.style.opacity = String(op);
      }

      animId = requestAnimationFrame(draw);
    }

    const setup = requestAnimationFrame(() => {
      resize();
      animId = requestAnimationFrame(draw);
    });

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', () => { canvasRect = canvas.getBoundingClientRect(); }, { passive: true });
    return () => {
      cancelAnimationFrame(setup);
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      pills.forEach((p) => { p.el.style.transform = ''; p.el.style.opacity = ''; });
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 5 }}
    />
  );
}
