// Ana sayfa metinleri — başlıklar ve bölüm içerikleri buradan düzenlenir.

export const hero = {
  eyebrow: 'Kamu İhale ve Yapım İşleri Danışmanlığı',
  titleLines: ['Kamu İhalelerinde Teknik Bilgi.', 'Stratejik Yaklaşım.'],
  lead: 'Yapım işi ihalelerinde doküman incelemesinden teklif hazırlığına, yeterlik değerlendirmesinden sözleşme süreçlerine kadar kapsamlı danışmanlık.',
  primaryCta: { label: 'Danışmanlık Talep Et', path: '/iletisim/' },
  secondaryCta: { label: 'Hizmetlerimizi İnceleyin', path: '/hizmetler/' },
  /** Hero altındaki kısa çalışma alanı etiketleri (iddia değil, kapsam bilgisi). */
  facets: ['Yapım işleri', 'Doküman inceleme', 'Yeterlik', 'Maliyet analizi', 'EKAP süreçleri', 'Sözleşme yönetimi'],
};

export const approach = {
  eyebrow: 'Yaklaşım',
  title: 'İhale Süreçlerinde Sistematik ve Analitik Yaklaşım',
  paragraphs: [
    'Bir yapım işi ihalesine hazırlanmak; yüzlerce sayfalık dokümanın doğru okunmasını, teknik gerekliliklerin maliyete dönüştürülmesini ve yeterlik belgelerinin eksiksiz düzenlenmesini gerektirir. Bu adımların her biri farklı bir uzmanlık ve dikkat düzeyi ister.',
    'Danışmanlık yaklaşımımız, bu süreci kişisel deneyime ya da sezgiye bırakmak yerine tekrarlanabilir, kontrol edilebilir ve belgeye dayalı bir çalışma düzenine oturtmaya dayanır. Her değerlendirme, ilgili ihalenin kendi dokümanı ve mevzuatın güncel hâli esas alınarak yapılır.',
  ],
  principles: [
    {
      number: '01',
      title: 'Mevzuat odaklı inceleme',
      text: 'Değerlendirmeler, ilgili kanun, yönetmelik ve ihale dokümanı hükümleri esas alınarak yapılır; mevzuatın güncel hâli resmî kaynaklardan kontrol edilir.',
    },
    {
      number: '02',
      title: 'Teknik ve mali değerlendirme',
      text: 'Proje, şartname ve cetveller yalnızca hukuki çerçevede değil; uygulama, miktar ve maliyet etkileriyle birlikte okunur.',
    },
    {
      number: '03',
      title: 'Sistematik belge kontrolü',
      text: 'Teklif ve yeterlik belgeleri kontrol listeleri ile madde madde doğrulanır; her tespit yazılı ve izlenebilir şekilde kayda alınır.',
    },
    {
      number: '04',
      title: 'Süreç bazlı danışmanlık',
      text: 'Destek tek bir belgeyle sınırlı kalmaz; ilan aşamasından sözleşmenin tamamlanmasına kadar süreç adımları bir bütün olarak planlanır.',
    },
  ],
};

export const processSteps = [
  {
    number: '01',
    title: 'Ön İnceleme',
    text: 'İhalenin konusu, kapsamı, son teklif tarihi ve firmanın ihtiyacı birlikte değerlendirilir; çalışmanın kapsamı ve takvimi netleştirilir.',
  },
  {
    number: '02',
    title: 'Teknik ve Mevzuatsal Değerlendirme',
    text: 'İhale dokümanı, yeterlik kriterleri ve teknik gereklilikler ilgili mevzuat çerçevesinde incelenir; riskler ve eksikler raporlanır.',
  },
  {
    number: '03',
    title: 'Doküman ve Teklif Hazırlık Desteği',
    text: 'Yeterlik belgelerinin kontrolü, maliyet analizi ve teklif hazırlığı kontrol listeleriyle desteklenir; nihai karar firmada kalır.',
  },
  {
    number: '04',
    title: 'Süreç Takibi ve Danışmanlık',
    text: 'Teklif sonrası değerlendirme aşaması ve sözleşme dönemindeki süreler, bildirimler ve belge yükümlülükleri takip edilir.',
  },
];

export const finalCta = {
  title: 'İhale Sürecinizi Birlikte Değerlendirelim.',
  text: 'Katılmayı planladığınız ihale ya da yürüttüğünüz sözleşme hakkında ön görüşme talep edin. Kapsamı ve ihtiyacınızı birlikte netleştirelim.',
  cta: { label: 'İletişime Geçin', path: '/iletisim/' },
};
