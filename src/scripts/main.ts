// Sitenin tek istemci tarafı betiği: sticky header durumu, mobil menü,
// kaydırmaya bağlı görünüm animasyonları ve içindekiler bölüm vurgusu.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -------------------------------------------------------------- Header */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const update = () => header.setAttribute('data-scrolled', String(window.scrollY > 8));
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------------------------------------------------------- Mobil menü */
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
const label = document.querySelector<HTMLElement>('[data-menu-label]');

if (toggle && panel) {
  const focusables = () =>
    [toggle, ...panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter(Boolean);

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.setAttribute('data-open', String(open));
    if (label) label.textContent = open ? 'Menüyü kapat' : 'Menüyü aç';
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) {
      window.setTimeout(() => panel.querySelector<HTMLElement>('a[href]')?.focus(), reducedMotion ? 0 : 150);
    }
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

  panel.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
      return;
    }
    // Odak tuzağı: menü açıkken sekme tuşu menü içinde kalır.
    if (e.key === 'Tab') {
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Masaüstü genişliğine geçildiğinde menüyü kapat.
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (mq) => {
    if (mq.matches) setOpen(false);
  });
}

/* ---------------------------------------------------- Scroll reveal */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ------------------------------------- İçindekiler: aktif bölüm vurgusu */
const tocLinks = document.querySelectorAll<HTMLAnchorElement>('[data-toc] a[href^="#"]');
if (tocLinks.length && 'IntersectionObserver' in window) {
  const map = new Map<Element, HTMLAnchorElement>();
  tocLinks.forEach((link) => {
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (target) map.set(target, link);
  });

  const visible = new Set<Element>();
  const setActive = () => {
    // Görünür bölümler arasında sayfada en üstte olanı seç.
    const first = [...map.keys()].find((el) => visible.has(el));
    tocLinks.forEach((l) => l.removeAttribute('aria-current'));
    if (first) map.get(first)?.setAttribute('aria-current', 'location');
  };

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setActive();
    },
    { rootMargin: '-30% 0px -55% 0px' },
  );
  map.forEach((_, el) => spy.observe(el));
}
