// Özgün çizgi ikon seti (24×24, stroke tabanlı). Icon.astro bileşeni tarafından kullanılır.

export const icons = {
  // Hizmet ikonları
  'document-search': `<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21H11"/><path d="M14 3l5 5h-3.5A1.5 1.5 0 0 1 14 6.5V3Z"/><path d="M8.5 9.5h4M8.5 13h3"/><circle cx="16" cy="16" r="3"/><path d="m18.2 18.2 2.3 2.3"/>`,
  'shield-check': `<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m8.8 12.2 2.2 2.2 4.3-4.6"/>`,
  certificate: `<rect x="3.5" y="4" width="17" height="12" rx="1"/><path d="M7 8h10M7 11.5h5"/><circle cx="16" cy="15" r="2.6"/><path d="m14.6 17.2-.9 3.8 2.3-1.2 2.3 1.2-.9-3.8"/>`,
  calculator: `<rect x="5" y="3" width="14" height="18" rx="1.5"/><rect x="8" y="6" width="8" height="3.5" rx=".5"/><path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01"/>`,
  network: `<rect x="3" y="4" width="18" height="12" rx="1.2"/><path d="M8 20h8M12 16v4"/><circle cx="8" cy="10" r="1.4"/><circle cx="16" cy="8" r="1.4"/><circle cx="14" cy="12.5" r="1.4"/><path d="m9.3 9.6 3.6 2.4M15.4 9.3l-.8 1.9"/>`,
  contract: `<path d="M15 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V6.5L15 3Z"/><path d="M15 3v3.5h3.5M9 10h6M9 13.5h6"/><path d="M9 17.5c.8-.9 1.4-.9 2 0s1.2.9 2 0"/>`,
  // Hakkımızda ikonları
  compass: `<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>`,
  ruler: `<path d="M3.5 16.5 16.5 3.5l4 4-13 13-4-4Z"/><path d="m7 13 1.8 1.8M10 10l1.8 1.8M13 7l1.8 1.8"/>`,
  eye: `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>`,
  layers: `<path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8 12 3.5Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/>`,
  timeline: `<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="11" cy="18" r="1.6"/>`,
  lock: `<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5"/>`,
  // Arayüz ikonları
  'arrow-right': `<path d="M4.5 12h15M13.5 6l6 6-6 6"/>`,
  'arrow-up-right': `<path d="M7 17 17 7M8.5 7H17v8.5"/>`,
  'chevron-down': `<path d="m6 9 6 6 6-6"/>`,
  check: `<path d="m5 12.5 4.5 4.5L19 7.5"/>`,
  menu: `<path d="M4 7h16M4 12h16M4 17h10"/>`,
  close: `<path d="M6 6l12 12M18 6 6 18"/>`,
  info: `<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8h.01"/>`,
  book: `<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`,
  phone: `<path d="M5 4h3.5l1.5 4-2 1.5a10 10 0 0 0 6.5 6.5L16 14l4 1.5V19a1.5 1.5 0 0 1-1.5 1.5C10.5 20.5 3.5 13.5 3.5 5.5A1.5 1.5 0 0 1 5 4Z"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>`,
  whatsapp: `<path d="M4 20l1.2-4A8.5 8.5 0 1 1 8.3 19L4 20Z"/><path d="M9 8.8c0 3.1 3 6.2 6.2 6.2l.9-1.6-2-1-1 .8a4.6 4.6 0 0 1-2.3-2.3l.8-1-1-2-1.6.9Z"/>`,
  'map-pin': `<path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>`,
  external: `<path d="M14 4h6v6M20 4l-9 9M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>`,
  linkedin: `<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M8 10.5V16M8 7.5v.01M11.5 16v-5.5M11.5 13c0-1.6 1-2.5 2.3-2.5S16 11.3 16 13v3"/>`,
  x: `<path d="M4.5 4.5 19.5 19.5M19.5 4.5l-6.3 6.6M10.8 13.1 4.5 19.5"/>`,
  instagram: `<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.8"/><path d="M17 7h.01"/>`,
  youtube: `<rect x="2.5" y="5.5" width="19" height="13" rx="3"/><path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z"/>`,
  pending: `<circle cx="12" cy="12" r="8.5" stroke-dasharray="2.5 2.5"/><path d="M12 8v4.5"/><path d="M12 15.8h.01"/>`,
} as const;

export type IconName = keyof typeof icons;
