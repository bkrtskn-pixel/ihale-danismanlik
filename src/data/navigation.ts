export interface NavItem {
  label: string;
  path: string;
}

/** Üst menü ve footer'daki ana sayfa bağlantıları. */
export const mainNav: NavItem[] = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Hizmetlerimiz', path: '/hizmetler/' },
  { label: 'Hakkımızda', path: '/hakkimizda/' },
  { label: 'Bilgi Merkezi', path: '/bilgi-merkezi/' },
  { label: 'İletişim', path: '/iletisim/' },
];

export const legalNav: NavItem[] = [
  { label: 'KVKK Aydınlatma Metni', path: '/kvkk/' },
  { label: 'Gizlilik Politikası', path: '/gizlilik/' },
];
