// ---------------------------------------------------------------------------
// MERKEZİ MARKA VE İLETİŞİM AYARLARI
//
// Marka adı, slogan, iletişim bilgileri, sosyal medya bağlantıları ve prototip
// ibaresi bu dosyadan yönetilir. Değeri `null` olan alanlar sitede gösterilmez;
// doğrulanmış bilgi girildiğinde ilgili bağlantılar otomatik olarak aktifleşir.
//
// ÖNEMLİ: Bu dosya herkese açık depoda yer alır. Buraya yalnızca yayımlanması
// uygun bilgileri girin; parola, API anahtarı vb. gizli bilgi eklemeyin.
// ---------------------------------------------------------------------------

export interface SiteConfig {
  brand: {
    /** Tam marka adı — başlıklarda, meta etiketlerinde ve footer'da kullanılır. */
    name: string;
    /** Logo yanındaki iki satırlı yazı işareti. */
    wordmark: { primary: string; secondary: string };
    tagline: string;
    /** public/ altındaki logo dosyası (yalnızca JSON-LD ve paylaşım için). */
    logoPath: string;
  };
  description: string;
  locale: string;
  contact: {
    /** Örn. '+90 212 000 00 00' — boş bırakılırsa gösterilmez. */
    phone: string | null;
    email: string | null;
    /** Ülke koduyla, yalnızca rakam: örn. '905xxxxxxxxx' */
    whatsapp: string | null;
    address: string | null;
    /** Örn. 'Hafta içi 09.00 – 18.00' — gerçek bilgi yoksa null kalmalı. */
    workingHours: string | null;
  };
  social: {
    linkedin: string | null;
    x: string | null;
    instagram: string | null;
    youtube: string | null;
  };
  /** Yasal metinlerde kullanılacak tüzel kişilik bilgileri. */
  legal: {
    companyTitle: string | null;
    mersisNo: string | null;
    taxOffice: string | null;
    kepAddress: string | null;
  };
  prototype: {
    /** Footer'daki prototip ibaresini gösterir. Gerçek yayında false yapın. */
    showNotice: boolean;
    noticeText: string;
    /**
     * Prototip arama motorlarında dizine eklenmesin mi?
     * true iken tüm sayfalara `noindex` eklenir ve robots.txt taramayı engeller.
     * Gerçek yayına geçişte false yapın.
     */
    noindex: boolean;
  };
  /** İleride sunucu tarafı form eklendiğinde kullanılacak ayarlar. */
  contactForm: {
    enabled: boolean;
    /** Formun gönderileceği uç nokta (ör. kendi sunucunuzdaki /api/iletisim). */
    endpoint: string | null;
  };
}

export const site: SiteConfig = {
  brand: {
    name: 'İhale Danışmanlık',
    wordmark: { primary: 'İhale', secondary: 'Danışmanlık' },
    tagline: 'Kamu ihalelerinde teknik bilgi, stratejik yaklaşım.',
    logoPath: 'images/brand/logo.svg',
  },
  description:
    'Yapım işi ihalelerinde doküman incelemesi, yeterlik değerlendirmesi, teklif hazırlığı, EKAP süreçleri ve sözleşme sonrası aşamalar için kamu ihale danışmanlığı.',
  locale: 'tr_TR',
  contact: {
    phone: null,
    email: null,
    whatsapp: null,
    address: null,
    workingHours: null,
  },
  social: {
    linkedin: null,
    x: null,
    instagram: null,
    youtube: null,
  },
  legal: {
    companyTitle: null,
    mersisNo: null,
    taxOffice: null,
    kepAddress: null,
  },
  prototype: {
    showNotice: true,
    noticeText: 'Bu web sitesi geliştirme ve tanıtım amaçlı hazırlanmış bir prototiptir.',
    noindex: true,
  },
  contactForm: {
    enabled: false,
    endpoint: null,
  },
};

/** Resmî bilgi kaynakları — makalelerde ve sayfalarda ortak kullanılır. */
export const officialSources = {
  kik: { label: 'Kamu İhale Kurumu', url: 'https://www.ihale.gov.tr/' },
  ekap: { label: 'Elektronik Kamu Alımları Platformu (EKAP)', url: 'https://ekap.kik.gov.tr/' },
  mevzuat: { label: 'Mevzuat Bilgi Sistemi', url: 'https://www.mevzuat.gov.tr/' },
} as const;
