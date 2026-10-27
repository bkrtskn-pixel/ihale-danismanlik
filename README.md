# İhale Danışmanlık — Kurumsal Web Sitesi (Prototip)

Türkiye'de kamu ihale danışmanlığı ve özellikle **yapım işi ihale süreçleri** alanında hizmet verecek bir danışmanlık kuruluşu için hazırlanmış, tamamen statik çalışan kurumsal web sitesi.

Bu sürüm, tasarımın değerlendirilmesi amacıyla **GitHub Pages** üzerinde ücretsiz yayımlanacak bir **prototiptir**. Ticari işlem, kullanıcı hesabı, veritabanı, form veya kişisel veri toplama içermez. “İhale Danışmanlık” adı geçici marka adıdır.

---

## İçindekiler

1. [Kullanılan teknolojiler](#kullanılan-teknolojiler)
2. [Gereksinimler](#gereksinimler)
3. [Kurulum ve komutlar](#kurulum-ve-komutlar)
4. [Proje klasör yapısı](#proje-klasör-yapısı)
5. [GitHub'a yükleme](#githuba-yükleme)
6. [GitHub Pages'te yayınlama](#github-pagesde-yayınlama)
7. [İçerik ve marka düzenleme](#i̇çerik-ve-marka-düzenleme)
8. [Repo adı ve base path](#repo-adı-ve-base-path)
9. [Prototipten gerçek yayına geçiş](#prototipten-gerçek-yayına-geçiş)
10. [Ticari hosting sistemine taşıma](#ticari-hosting-sistemine-taşıma)

---

## Sayfalar

| Sayfa | Adres |
| --- | --- |
| Ana Sayfa | `/` |
| Hizmetlerimiz | `/hizmetler/` |
| 6 hizmet detay sayfası | `/hizmetler/<hizmet-adi>/` |
| Hakkımızda | `/hakkimizda/` |
| Bilgi Merkezi + 3 makale | `/bilgi-merkezi/`, `/bilgi-merkezi/<makale>/` |
| İletişim | `/iletisim/` |
| KVKK Aydınlatma Metni (iskelet) | `/kvkk/` |
| Gizlilik Politikası (iskelet) | `/gizlilik/` |
| 404 | `/404.html` |

Ayrıca `sitemap-index.xml`, `robots.txt`, Open Graph görseli ve favicon üretilir.

## Kullanılan teknolojiler

- **[Astro 7](https://astro.build/)** — statik site üretimi (`output: 'static'`)
- **TypeScript** (strict)
- **[Tailwind CSS 4](https://tailwindcss.com/)** — resmî `@tailwindcss/vite` eklentisiyle
- **@astrojs/sitemap** — site haritası
- **Fontsource** — Manrope (başlık) ve Inter (gövde) yazı tipleri sitenin içinden sunulur; Google Fonts'a istek gönderilmez
- **GitHub Actions + GitHub Pages** — otomatik yayın

React veya başka bir arayüz kütüphanesi kullanılmaz. Sitedeki tek JavaScript dosyası (`src/scripts/main.ts`, sıkıştırılmış hâliyle birkaç KB) sticky header, mobil menü, kaydırma animasyonları ve içindekiler vurgusunu yönetir. Görsellerin tamamı projeye özel SVG kompozisyonlardır; harici stok fotoğraf kullanılmaz.

## Gereksinimler

- **Node.js 22.23.4 veya üzeri** (önerilen: **Node.js 24 LTS**). Astro 7 daha eski sürümlerde çalışmaz.
  Sürümünüzü `node -v` ile kontrol edin. Gerekirse [nodejs.org](https://nodejs.org/) üzerinden LTS sürümünü kurun.
- npm (Node.js ile birlikte gelir)
- Git ve bir GitHub hesabı (yayın için)

## Kurulum ve komutlar

```bash
npm install        # bağımlılıkları kurar (package-lock.json ile)
npm run dev        # geliştirme sunucusu: http://localhost:4321/ihale-danismanlik/
npm run build      # üretim derlemesi → dist/
npm run preview    # dist/ klasörünü yerelde önizler
npm run check      # TypeScript ve Astro tip kontrolü
npm run images     # OG görseli, favicon.ico ve apple-touch-icon'u yeniden üretir
```

> Geliştirme sunucusunda adres, yayındakiyle aynı alt dizini (`/ihale-danismanlik/`) kullanır. Böylece yerelde gördüğünüz bağlantılar GitHub Pages'tekiyle birebir aynıdır.

## Proje klasör yapısı

```
ihale-danismanlik/
├── .github/workflows/deploy.yml   # GitHub Pages otomatik yayın
├── public/                        # Olduğu gibi kopyalanan dosyalar
│   ├── favicon.svg / favicon.ico / apple-touch-icon.png
│   └── images/
│       ├── brand/                 # logo.svg, logo-mark.svg
│       └── og/                    # sosyal paylaşım görseli
├── scripts/generate-images.ts     # OG görseli ve ikon üretimi
├── src/
│   ├── components/                # Yeniden kullanılabilir Astro bileşenleri
│   ├── content/articles/          # Bilgi Merkezi makaleleri (Markdown)
│   ├── content.config.ts          # Makale şeması
│   ├── data/
│   │   ├── site.ts                # ★ Marka, iletişim, sosyal medya, prototip ayarları
│   │   ├── services.ts            # ★ Altı hizmetin tüm metinleri
│   │   ├── home.ts                # Ana sayfa metinleri
│   │   ├── about.ts               # Hakkımızda metinleri
│   │   └── navigation.ts          # Menü bağlantıları
│   ├── layouts/                   # BaseLayout, LegalLayout
│   ├── lib/                       # URL yardımcıları, JSON-LD, iletişim, ikonlar
│   ├── pages/                     # Sayfalar (dosya adı = URL)
│   ├── scripts/main.ts            # İstemci tarafı betik
│   └── styles/global.css          # Tasarım belirteçleri ve ortak stiller
├── astro.config.mjs
├── site.config.mjs                # ★ Yayın adresi (site) ve alt dizin (base)
└── package.json / package-lock.json
```

## GitHub'a yükleme

1. GitHub'da oturum açın ve sağ üstteki **+ › New repository** ile yeni bir depo oluşturun.
   - Depo adı örneği: `ihale-danismanlik`
   - Ücretsiz GitHub Pages için depo **Public** olmalıdır.
   - README, .gitignore veya lisans eklemeyin (proje bunları zaten içerir).
2. Proje klasöründe terminal açıp aşağıdaki komutları çalıştırın (`KULLANICI_ADI` kısmını kendi kullanıcı adınızla değiştirin):

   ```bash
   git init                 # ZIP'ten açtıysanız ve .git klasörü yoksa
   git add .
   git commit -m "İlk sürüm"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADI/ihale-danismanlik.git
   git push -u origin main
   ```

   Komut satırı kullanmak istemezseniz [GitHub Desktop](https://desktop.github.com/) ile de aynı işlemi yapabilirsiniz.

## GitHub Pages'te yayınlama

1. Depo sayfasında **Settings** sekmesine girin.
2. Sol menüden **Pages** sayfasını açın.
3. **Build and deployment › Source** alanında **GitHub Actions** seçeneğini seçin.
4. **Actions** sekmesine geçin. `main` dalına yapılan gönderimle başlayan **“GitHub Pages'e Yayınla”** iş akışının yeşil onay ile tamamlandığını kontrol edin. (İlk gönderim Pages ayarından önce yapıldıysa iş akışını **Run workflow** düğmesiyle elle başlatın.)
5. İş akışı tamamlandığında yayın bağlantısı hem iş akışı özetinde hem de **Settings › Pages** sayfasında görünür:
   `https://KULLANICI_ADI.github.io/ihale-danismanlik/`
6. Bundan sonra `main` dalına gönderdiğiniz her değişiklik otomatik olarak yeniden yayınlanır.

> **Not:** İş akışı, depo sahibini ve depo adını otomatik algılar ve `SITE_URL` / `BASE_PATH` değerlerini buna göre ayarlar. Herhangi bir dosya değiştirmeniz gerekmez.

## İçerik ve marka düzenleme

### Marka adını değiştirme

`src/data/site.ts` dosyasında:

```ts
brand: {
  name: 'Yeni Firma Adı',
  wordmark: { primary: 'Yeni', secondary: 'Firma Adı' },
  tagline: '...',
},
```

Ardından paylaşım görselini yeni adla üretmek için `npm run images` komutunu çalıştırın.

### İletişim bilgilerini ekleme

Aynı dosyadaki `contact` alanına **yalnızca doğrulanmış** bilgileri girin. Değeri `null` olan alanlar sitede gösterilmez; bilgi girildiğinde telefon (`tel:`), e-posta (`mailto:`), WhatsApp (`wa.me`) ve adres (harita) bağlantıları otomatik oluşur. Çalışma saatleri yalnızca değer girildiğinde gösterilir.

```ts
contact: {
  phone: '+90 212 000 00 00',
  email: 'info@ornekfirma.com.tr',
  whatsapp: '905000000000',   // ülke koduyla, yalnızca rakam
  address: 'Mahalle, Cadde No, İlçe / İl',
  workingHours: 'Hafta içi 09.00 – 18.00',
},
```

Sosyal medya bağlantıları `social`, yasal metinlerde kullanılacak unvan/MERSİS/KEP bilgileri `legal` alanındadır.

### Hizmet metinlerini değiştirme

Altı hizmetin tüm içerikleri (kart özeti, detay sayfası, kapsam, yöntem, SSS) `src/data/services.ts` dosyasındadır. Diziye yeni bir hizmet eklendiğinde detay sayfası, hizmetler sayfası, ana sayfa kartı ve footer bağlantısı otomatik oluşur.

### Makale ekleme

`src/content/articles/` klasörüne yeni bir `.md` dosyası ekleyin. Başlık bilgileri (frontmatter) mevcut makalelerdekiyle aynı yapıda olmalıdır (`title`, `description`, `summary`, `relatedService`, `order`, `cover`, `sources`). Dosya adı makalenin adresi olur. Okuma süresi metinden otomatik hesaplanır.

### Logo ve görselleri değiştirme

- Logo işareti: `src/components/Logo.astro` (sitede kullanılan satır içi SVG) ve `public/images/brand/*.svg`
- Favicon: `public/favicon.svg` — değiştirdikten sonra `npm run images` ile `favicon.ico`, `apple-touch-icon.png` ve OG görseli yeniden üretilir.
- Fotoğraf eklemek isterseniz dosyaları `public/images/` altına koyun ve bağlantıları `asset('images/dosya.webp')` yardımcısıyla verin. Lisansı uygun, kaynağı belli görseller kullanın; WebP/AVIF biçimi ve `width`/`height` niteliklerini belirtmeniz önerilir.

### Renk ve yazı tipleri

Tüm renkler ve yazı tipleri `src/styles/global.css` dosyasının başındaki `@theme` bloğunda tanımlıdır.

## Repo adı ve base path

GitHub Pages proje siteleri `https://KULLANICI_ADI.github.io/REPO_ADI/` adresinde yayınlanır. Sitedeki tüm bağlantılar `src/lib/paths.ts` içindeki `href()` ve `asset()` yardımcılarından geçtiği için alt dizin otomatik eklenir.

- **GitHub Actions ile yayında:** Hiçbir şey yapmanız gerekmez; depo adı değişirse iş akışı yeni adı algılar.
- **Yerel geliştirmede:** Varsayılan değerler `site.config.mjs` dosyasındadır:

  ```js
  SITE_URL  = 'https://kullanici-adi.github.io'
  BASE_PATH = '/ihale-danismanlik'
  ```

  Bunları dosyadan değiştirebilir veya komut başında ortam değişkeni olarak verebilirsiniz:

  ```bash
  SITE_URL=https://ornek.github.io BASE_PATH=/yeni-repo npm run build
  ```

- **Kullanıcı sitesi (`KULLANICI_ADI.github.io` adlı depo) veya kendi alan adı:** `BASE_PATH=/` olmalıdır. İş akışı kullanıcı sitesini otomatik algılar. Kendi alan adınız için depo **Settings › Secrets and variables › Actions › Variables** bölümünde `SITE_URL` (ör. `https://www.ornekfirma.com.tr`) ve `BASE_PATH` (`/`) değişkenlerini tanımlayın.

## Prototipten gerçek yayına geçiş

`src/data/site.ts` içinde:

| Ayar | Prototip | Gerçek yayın |
| --- | --- | --- |
| `prototype.showNotice` | `true` — footer'da prototip ibaresi | `false` |
| `prototype.noindex` | `true` — tüm sayfalarda `noindex`, `robots.txt` taramayı engeller | `false` |

> Prototip, gerçek firma yayına alınmadan arama sonuçlarında görünmesin diye varsayılan olarak **dizine kapalıdır**. Bu nedenle Lighthouse SEO kategorisi prototipte “sayfa dizine eklenmeye engellenmiş” uyarısı verir. Bu ayar kapatıldığında aynı ölçüm 100 puan vermiştir.

Gerçek yayından önce ayrıca:

- `/kvkk/` ve `/gizlilik/` sayfalarındaki **“Yayından önce doldurulacak”** alanları, tercihen hukuki destek alınarak tamamlayın. Bu sayfalar tamamlanana kadar `noindex` olarak işaretlidir (`src/layouts/LegalLayout.astro`).
- Doğrulanmış iletişim bilgilerini girin.
- Gerçek kurumsal bilgiler (kuruluş, ekip, belgeler) için `src/data/about.ts` içindeki `company` alanını doldurun; dolu alanlar Hakkımızda sayfasında otomatik görünür.
- Makalelerdeki mevzuat bilgilerini resmî kaynaklardan ([ihale.gov.tr](https://www.ihale.gov.tr/), [ekap.kik.gov.tr](https://ekap.kik.gov.tr/), [mevzuat.gov.tr](https://www.mevzuat.gov.tr/)) yeniden kontrol edin.

### İletişim formu eklemek

Prototipte kişisel veri toplanmaması için form gösterilmez. Hazır form bileşeni `src/components/ContactForm.astro` dosyasındadır. Etkinleştirmek için:

1. KVKK ve gizlilik metinlerini tamamlayın.
2. Formu işleyecek güvenli bir sunucu tarafı uç nokta hazırlayın (kendi sunucunuz veya sunucusuz bir fonksiyon).
3. `site.ts` içinde `contactForm: { enabled: true, endpoint: 'https://.../iletisim' }` ayarını yapın.

## Ticari hosting sistemine taşıma

`npm run build` komutunun ürettiği `dist/` klasörü tamamen statiktir; herhangi bir web sunucusunda çalışır:

1. Kendi alan adınız için `SITE_URL=https://www.ornekfirma.com.tr` ve `BASE_PATH=/` değerleriyle derleyin:
   ```bash
   SITE_URL=https://www.ornekfirma.com.tr BASE_PATH=/ npm run build
   ```
2. `dist/` klasörünün **içeriğini** hosting'inizin web kök dizinine (genellikle `public_html/`) FTP/SFTP ile yükleyin.
3. Sunucunun `404.html` dosyasını hata sayfası olarak kullanmasını sağlayın (Apache için `.htaccess` içinde `ErrorDocument 404 /404.html`).
4. HTTPS sertifikasının etkin olduğunu kontrol edin.

Netlify, Vercel, Cloudflare Pages gibi statik hosting servislerinde derleme komutu `npm run build`, yayın klasörü `dist` olarak ayarlanır; `SITE_URL` ve `BASE_PATH` ortam değişkenleri servis panelinden tanımlanır. İleride form, içerik yönetimi veya sunucu tarafı işlem gerekirse Astro'nun resmî adaptörleriyle aynı proje üzerinde genişletme yapılabilir.

---

### Önemli notlar

- Bu site Kamu İhale Kurumu (KİK) veya EKAP ile resmî bir bağlantı içermez; resmî logo kullanılmaz.
- Sitede doğrulanmamış istatistik, referans, ekip veya kuruluş bilgisi bulunmaz.
- Depoya parola, API anahtarı veya gizli bilgi eklemeyin; depo herkese açıktır.
