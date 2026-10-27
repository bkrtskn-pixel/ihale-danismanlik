// ---------------------------------------------------------------------------
// Merkezi URL / yol yardımcıları
//
// Sitedeki tüm iç bağlantılar ve görsel yolları bu fonksiyonlardan geçer.
// Böylece site GitHub Pages alt dizininde (/depo-adi/) veya kök dizinde (/)
// yayımlandığında bağlantılar değişiklik gerektirmeden doğru çalışır.
// ---------------------------------------------------------------------------

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const isExternal = (path: string) => /^([a-z][a-z\d+\-.]*:|\/\/)/i.test(path);

/**
 * Sayfa bağlantısı üretir: base path eklenir, sona `/` konur.
 * `href('/hizmetler')` → `/ihale-danismanlik/hizmetler/`
 * `href('/hizmetler/#kapsam')` → `/ihale-danismanlik/hizmetler/#kapsam`
 */
export function href(path = '/'): string {
  if (isExternal(path) || path.startsWith('#')) return path;

  const [pathAndQuery, hash] = path.split('#');
  const [pathname, query] = pathAndQuery.split('?');
  let clean = pathname.replace(/^\/+/, '');
  if (clean && !clean.endsWith('/') && !/\.[a-z0-9]+$/i.test(clean)) clean += '/';

  return `${BASE}${clean}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
}

/**
 * public/ altındaki statik dosya yolu üretir (sonda `/` eklenmez).
 * `asset('images/brand/logo.svg')` → `/ihale-danismanlik/images/brand/logo.svg`
 */
export function asset(path: string): string {
  if (isExternal(path)) return path;
  return `${BASE}${path.replace(/^\/+/, '')}`;
}

/** Mutlak URL üretir (canonical, Open Graph ve JSON-LD için). */
export function absoluteUrl(pathWithBase: string, site: URL | undefined): string {
  if (isExternal(pathWithBase)) return pathWithBase;
  return new URL(pathWithBase, site ?? 'http://localhost:4321').toString();
}

/** Verilen yol, geçerli sayfa ile eşleşiyor mu? (Menüde aktif sayfa vurgusu) */
export function isActivePath(current: string, target: string): boolean {
  const normalize = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  const c = normalize(current);
  const t = normalize(href(target));
  if (t === BASE) return c === BASE;
  return c.startsWith(t);
}
