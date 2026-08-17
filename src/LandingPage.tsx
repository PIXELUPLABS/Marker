import { useEffect, useRef, useState } from 'react';
import FinalLandingPage from '@/imports/FinalLandingPage/index';
import HeroCanvas from './components/HeroCanvas';

// ─── Task 3: Prop-tech tab content ───────────────────────────────────────────
function PropTechContent() {
  return (
    <div
      style={{
        background: '#000',
        borderRadius: '14px',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        padding: '12px',
      }}
    >
      <div
        style={{
          background: '#f4f4f4',
          borderRadius: '6px',
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 600,
            height: '100%',
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontFamily: '"Stack Sans Headline", sans-serif', fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.32px', color: '#333', margin: 0 }}>First agent</p>
              <p style={{ fontFamily: '"Stack Sans Headline", sans-serif', fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.32px', color: '#f35901', margin: 0 }}>live in 3 weeks.</p>
            </div>
            <p style={{ fontFamily: '"Archivo", sans-serif', fontWeight: 400, fontSize: 16, letterSpacing: '-0.32px', color: '#8f8f8f', maxWidth: 419, lineHeight: 1.1 }}>
              <span>Lease management and compliance automated end-to-end. </span>
              <span style={{ color: '#282828' }}>Onboarding cut from 120 to 60 days.</span>
            </p>
          </div>
          <div style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: 12, letterSpacing: '0.72px', textTransform: 'uppercase', maxWidth: 420 }}>
            {[['Lease compliance', 'Automated end-to-end'], ['Onboarding time', '120 days → 60 days'], ['First agent shipped', '3 weeks from kickoff']].map(([l, v]) => (
              <div key={l} style={{ borderTop: '1px solid rgba(51,51,51,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
                <span style={{ color: '#000' }}>{l}</span>
                <span style={{ color: 'rgba(0,0,0,0.5)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', right: 0, top: 40, width: 204, height: 189, borderRadius: '14px 14px 0 0', overflow: 'hidden', background: 'linear-gradient(to bottom, #f35901 10%, rgba(243,89,1,0.66) 52%, transparent 106%)', border: '1px solid black' }}>
          <div style={{ position: 'absolute', bottom: 29, right: 126, transform: 'translate(100%, 50%)', fontFamily: '"Stack Sans Headline", sans-serif', fontSize: 54, color: '#1a1a1a', letterSpacing: '-1.08px', lineHeight: 1.1, whiteSpace: 'nowrap' }}>3 W</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main LandingPage ─────────────────────────────────────────────────────────
export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'fortune500' | 'proptech'>('fortune500');
  const [tabOverlayRect, setTabOverlayRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const raf = requestAnimationFrame(() => {
      applyAllFooterCardHovers(container);
      applyFooterLinksHover(container);
      applyNavButtonsHover(container);
      applyScrollReveal(container);
      applyNativeYellowHighlight(container);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Tab click setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let rafId: number;
    const setup = () => {
      const proofSection = container.querySelector('[data-name="6 - Proof"]') as HTMLElement;
      if (!proofSection) { rafId = requestAnimationFrame(setup); return; }
      const allPs = Array.from(proofSection.querySelectorAll('p'));
      const tab1p = allPs.find((p) => p.textContent?.trim() === 'Fortune 500 retailer');
      const tab2p = allPs.find((p) => p.textContent?.includes('prop-tech'));
      const tab1 = tab1p?.parentElement as HTMLElement | null;
      const tab2 = tab2p?.parentElement as HTMLElement | null;
      const mainEl = proofSection.querySelector('[data-name="main"]') as HTMLElement | null;
      if (!tab1 || !tab2 || !mainEl) { rafId = requestAnimationFrame(setup); return; }
      tab2.style.cursor = 'pointer';
      tab1.style.cursor = 'pointer';
      const onTab2 = () => {
        setActiveTab('proptech');
        const cRect = container.getBoundingClientRect();
        const mRect = mainEl.getBoundingClientRect();
        setTabOverlayRect({ top: mRect.top - cRect.top, left: mRect.left - cRect.left, width: mRect.width, height: mRect.height });
        mainEl.style.opacity = '0';
        mainEl.style.transition = 'opacity 0.25s';
        tab1.style.opacity = '0.45';
        tab2.style.opacity = '1';
        tab2.style.background = '#000';
        tab2.style.borderRadius = '14px';
        const p = tab2.querySelector('p'); if (p) p.style.color = '#fff';
      };
      const onTab1 = () => {
        setActiveTab('fortune500');
        setTabOverlayRect(null);
        mainEl.style.opacity = '1';
        tab1.style.opacity = '1';
        tab2.style.opacity = '0.45';
        tab2.style.background = 'transparent';
        const p = tab2.querySelector('p'); if (p) p.style.color = '#000';
      };
      tab2.addEventListener('click', onTab2);
      tab1.addEventListener('click', onTab1);
      return () => { tab2.removeEventListener('click', onTab2); tab1.removeEventListener('click', onTab1); };
    };
    let cleanup: (() => void) | undefined;
    rafId = requestAnimationFrame(() => { cleanup = setup() ?? undefined; });
    return () => { cancelAnimationFrame(rafId); cleanup?.(); };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      <FinalLandingPage />
      <HeroCanvas containerRef={containerRef} />
      {activeTab === 'proptech' && tabOverlayRect && (
        <div style={{ position: 'absolute', top: tabOverlayRect.top, left: tabOverlayRect.left, width: tabOverlayRect.width, height: tabOverlayRect.height, zIndex: 30, borderRadius: 14 }}>
          <PropTechContent />
        </div>
      )}
    </div>
  );
}

// ─── Task 1: ALL footer link card hovers ─────────────────────────────────────
// Shows pressed-in gradient on hover — applied to all 6 link cards in Footer + CTA
function applyAllFooterCardHovers(container: HTMLElement) {
  const footer = container.querySelector('[data-name="Footer"]');
  if (footer) {
    // Find all 4 link cards by their label text
    ['About us', 'Features', 'Articles', 'Contact'].forEach((label) => {
      const p = Array.from(footer.querySelectorAll('p')).find((el) => el.textContent?.trim() === label);
      if (!p) return;
      // From <p> → div.content-stretch → div.overflow-clip → card div
      const card = p.parentElement?.parentElement?.parentElement as HTMLElement | null;
      if (card) applyCardPressHover(card);
    });
  }

  const cta = container.querySelector('[data-name="CTA"]');
  if (cta) {
    // Frame90: Book a call — items-end + overflow-clip + pl-
    const frame90 = Array.from(cta.querySelectorAll<HTMLElement>('div')).find(
      (el) => el.className.includes('items-end') && el.className.includes('overflow-clip') && el.className.includes('pl-')
    );
    if (frame90) applyCardPressHover(frame90);

    // Frame91: founders@onmarker.com — items-end + justify-between + p-[24px]
    const frame91 = Array.from(cta.querySelectorAll<HTMLElement>('div')).find(
      (el) => el.className.includes('items-end') && el.className.includes('justify-between') && el.className.includes('p-[24px]')
    );
    if (frame91) applyCardPressHover(frame91);
  }
}

function applyCardPressHover(card: HTMLElement) {
  const ariaHiddenEls = Array.from(card.querySelectorAll<HTMLElement>('[aria-hidden]'));
  // First aria-hidden child = gradient bg (if present via inline style)
  const bgEl = ariaHiddenEls.find((el) => el.style.backgroundImage);
  const shadowEl = ariaHiddenEls.find((el) => !el.style.backgroundImage && el !== bgEl);

  const HOVER_BG = 'linear-gradient(140deg, #eaeaea 0.5%, #e0e0e0 99.5%)';
  const HOVER_SHADOW = 'inset 0 0 14px 0 rgba(0,0,0,0.18), inset 0 4px 10px 0 rgba(0,0,0,0.32)';

  card.style.cursor = 'pointer';

  if (bgEl) {
    const origBg = bgEl.style.backgroundImage;
    const origShadow = shadowEl?.style.boxShadow ?? '';
    card.addEventListener('mouseenter', () => {
      bgEl.style.backgroundImage = HOVER_BG;
      bgEl.style.transition = 'background-image 0.18s';
      if (shadowEl) shadowEl.style.boxShadow = HOVER_SHADOW;
    });
    card.addEventListener('mouseleave', () => {
      bgEl.style.backgroundImage = origBg;
      if (shadowEl) shadowEl.style.boxShadow = origShadow;
    });
  } else {
    // No gradient bg element — add bg directly to the card (Frame30/32/34)
    card.addEventListener('mouseenter', () => {
      card.style.background = 'linear-gradient(140deg, #f4f4f4 0%, #ebebeb 100%)';
      card.style.transition = 'background 0.18s, box-shadow 0.18s';
      card.style.boxShadow = 'inset 0 0 12px 0 rgba(0,0,0,0.1), inset 0 4px 8px 0 rgba(0,0,0,0.18)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
      card.style.boxShadow = '';
    });
  }
}

// ─── Task 2: Footer bottom link text → fully black on hover ──────────────────
// Targets the Frame82 grid of 6 <p> elements (Book a call, Privacy Policy, etc.)
function applyFooterLinksHover(container: HTMLElement) {
  // Find the <p> elements by searching for "Book a call" in the last footer section
  const footer = container.querySelector('[data-name="Footer"]');
  if (!footer) return;
  const allPs = Array.from(footer.querySelectorAll('p'));
  const gridPs = allPs.filter((p) =>
    ['Book a call', 'Privacy Policy', 'Cookie Policy', 'Terms of Service', 'Trust Center', 'Manage Cookies'].includes(p.textContent?.trim() ?? '')
  );
  gridPs.forEach((p) => {
    const el = p as HTMLElement;
    el.style.cursor = 'pointer';
    el.style.transition = 'opacity 0.15s';
    el.addEventListener('mouseenter', () => { el.style.opacity = '1'; });
    el.addEventListener('mouseleave', () => { el.style.opacity = ''; });
  });
}

// ─── Task 3 (nav): HOW IT WORKS + BOOK A CALL button hover ──────────────────
function applyNavButtonsHover(container: HTMLElement) {
  // Frame54 — "HOW IT WORKS" pill button
  const howitworks = Array.from(container.querySelectorAll<HTMLElement>('p')).find(
    (p) => p.textContent?.trim().toLowerCase() === 'how it works'
  );
  if (howitworks) {
    const frame54 = howitworks.parentElement as HTMLElement | null;
    if (frame54) {
      const bgEl = frame54.querySelector<HTMLElement>('[aria-hidden]');
      const origBg = bgEl?.style.background ?? '';
      frame54.style.cursor = 'pointer';
      frame54.addEventListener('mouseenter', () => {
        if (bgEl) { bgEl.style.background = '#efefef'; bgEl.style.transition = 'background 0.15s'; }
        frame54.style.filter = 'brightness(0.97)';
      });
      frame54.addEventListener('mouseleave', () => {
        if (bgEl) bgEl.style.background = origBg;
        frame54.style.filter = '';
      });
    }
  }

  // Frame (BOOK A CALL) — dark button; hover lightens it slightly
  const bookCallP = Array.from(container.querySelectorAll<HTMLElement>('p')).find(
    (p) => p.textContent?.trim().toLowerCase() === 'book a call' && (p.className ?? '').includes('text-white')
  );
  if (bookCallP) {
    const frameEl = bookCallP.closest<HTMLElement>('div[class*="h-[40px]"]');
    if (frameEl) {
      // The wrapping Frame55 container
      const frame55 = frameEl.parentElement as HTMLElement | null;
      const bookBtn = frameEl;
      bookBtn.style.cursor = 'pointer';
      bookBtn.addEventListener('mouseenter', () => {
        bookBtn.style.opacity = '0.82';
        bookBtn.style.transition = 'opacity 0.15s';
      });
      bookBtn.addEventListener('mouseleave', () => { bookBtn.style.opacity = ''; });
    }
  }
}

// ─── Task 4: Scroll-to-reveal letter stagger on Frame133 paragraph ───────────
function applyScrollReveal(container: HTMLElement) {
  const targetP = Array.from(container.querySelectorAll('p')).find(
    (el) => el.textContent?.includes('We sold our last') && (el.getAttribute('class') ?? '').includes('40px')
  ) as HTMLParagraphElement | null;
  if (!targetP) return;

  const spans = Array.from(targetP.querySelectorAll('span'));
  if (spans.length < 2) return;

  const [firstSpan, secondSpan] = spans as HTMLSpanElement[];

  function splitToChars(spanEl: HTMLSpanElement, isFirst: boolean): HTMLSpanElement[] {
    const text = spanEl.textContent ?? '';
    spanEl.textContent = '';
    return Array.from(text).map((ch) => {
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.display = 'inline';
      s.style.transition = isFirst ? 'opacity 0.4s ease' : 'color 0.4s ease';
      if (isFirst) s.style.opacity = '0.2';
      else s.style.color = '#b4b4b4';
      spanEl.appendChild(s);
      return s;
    });
  }

  // Strip gradient from firstSpan — animate opacity instead
  firstSpan.style.backgroundImage = 'none';
  firstSpan.style.webkitTextFillColor = '#1a1a1a';
  firstSpan.style.color = '#1a1a1a';

  const firstChars = splitToChars(firstSpan, true);
  const secondChars = splitToChars(secondSpan, false);
  const all = [...firstChars, ...secondChars];
  const total = all.length;
  const SWEEP = 14;

  function update() {
    if (!targetP) return;
    const rect = targetP.getBoundingClientRect();
    const vh = window.innerHeight;
    const raw = (vh - rect.top) / (vh + rect.height);
    const progress = Math.min(1, Math.max(0, raw));
    all.forEach((span, i) => {
      const cp = Math.min(1, Math.max(0, (progress * (total + SWEEP) - i) / SWEEP));
      if (i < firstChars.length) span.style.opacity = String(0.2 + cp * 0.8);
      else {
        const g = Math.round(180 - cp * 154);
        span.style.color = `rgb(${g},${g},${g})`;
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ─── Task 5: Replace rectangle yellow highlights with native CSS ──────────────
// Hides the absolute Highlighter divs and applies background-color directly on span
function applyNativeYellowHighlight(container: HTMLElement) {
  // Find the span with "understand your company,"
  const targetSpan = Array.from(container.querySelectorAll('span')).find(
    (s) => s.textContent?.trim() === 'understand your company,'
  ) as HTMLSpanElement | null;
  if (!targetSpan) return;

  // Apply native highlight
  targetSpan.style.backgroundColor = '#dde830';
  targetSpan.style.color = '#1a1a1a';
  targetSpan.style.borderRadius = '6px';
  targetSpan.style.padding = '2px 6px 2px 4px';
  targetSpan.style.boxDecorationBreak = 'clone';

  // Hide only this span's own two-line rectangle Highlighters (it wraps across
  // lines, so Figma exported one rect per line) — other sections' Highlighters
  // are single-line and render correctly as-is, so they must stay untouched.
  const section = targetSpan.closest('p')?.parentElement;
  const highlighters = section?.querySelectorAll<HTMLElement>('[data-name="Highlighter"]') ?? [];
  highlighters.forEach((el) => { el.style.display = 'none'; });
}
