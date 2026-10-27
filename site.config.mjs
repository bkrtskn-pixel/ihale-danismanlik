// ---------------------------------------------------------------------------
// Yayın adresi ve alt dizin (base path) ayarları — tek merkezi nokta.
//
// GitHub Actions üzerinde bu değerler .github/workflows/deploy.yml tarafından
// depo sahibine ve depo adına göre otomatik olarak ortam değişkeni (SITE_URL,
// BASE_PATH) şeklinde verilir. Bu nedenle depo adını değiştirdiğinizde ek bir
// düzenleme gerekmez.
//
// Aşağıdaki varsayılanlar yalnızca yerel geliştirme / yerel build içindir.
// ---------------------------------------------------------------------------

/** Sitenin kök adresi (protokol + alan adı, sonda / olmadan). */
export const SITE_URL = (process.env.SITE_URL || 'https://kullanici-adi.github.io').replace(/\/+$/, '');

/**
 * Sitenin yayınlandığı alt dizin.
 * - GitHub Pages proje sitesi: '/depo-adi'
 * - Kendi alan adı veya kullanıcı sitesi (kullanici.github.io): '/'
 */
const rawBase = process.env.BASE_PATH ?? '/ihale-danismanlik';
export const BASE_PATH = rawBase === '' || rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;
