import { site } from '@/data/site';

export type ContactChannelType = 'phone' | 'email' | 'whatsapp' | 'address' | 'hours';

export interface ContactChannel {
  type: ContactChannelType;
  label: string;
  /** Gösterilecek değer; tanımlı değilse null. */
  value: string | null;
  /** Tıklanabilir bağlantı (tel:, mailto:, https://wa.me/...) — varsa. */
  link: string | null;
  /** Bağlantı açıklaması (ekran okuyucular için). */
  actionLabel: string;
}

const digits = (v: string) => v.replace(/[^\d+]/g, '');

/**
 * İletişim kanallarını merkezi yapılandırmadan üretir.
 * Değeri girilmemiş kanallar `value: null` döner ve arayüzde pasif gösterilir
 * ya da hiç gösterilmez.
 */
export function getContactChannels(): ContactChannel[] {
  const { phone, email, whatsapp, address, workingHours } = site.contact;
  return [
    {
      type: 'phone',
      label: 'Telefon',
      value: phone,
      link: phone ? `tel:${digits(phone)}` : null,
      actionLabel: 'Telefonla arayın',
    },
    {
      type: 'email',
      label: 'E-posta',
      value: email,
      link: email ? `mailto:${email}` : null,
      actionLabel: 'E-posta gönderin',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: whatsapp ? `+${whatsapp.replace(/\D/g, '')}` : null,
      link: whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}` : null,
      actionLabel: 'WhatsApp üzerinden yazın',
    },
    {
      type: 'address',
      label: 'Adres',
      value: address,
      link: address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : null,
      actionLabel: 'Haritada görüntüleyin',
    },
    {
      type: 'hours',
      label: 'Çalışma saatleri',
      value: workingHours,
      link: null,
      actionLabel: '',
    },
  ];
}

/** En az bir doğrulanmış iletişim kanalı tanımlı mı? */
export const hasAnyContact = () =>
  getContactChannels().some((c) => c.type !== 'hours' && c.value !== null);

export const socialLinks = () =>
  (
    [
      { key: 'linkedin', label: 'LinkedIn', url: site.social.linkedin },
      { key: 'x', label: 'X', url: site.social.x },
      { key: 'instagram', label: 'Instagram', url: site.social.instagram },
      { key: 'youtube', label: 'YouTube', url: site.social.youtube },
    ] as const
  ).filter((s): s is typeof s & { url: string } => Boolean(s.url));
