// ---------------------------------------------------------------------------
// HİZMET İÇERİKLERİ
//
// Hizmetler sayfası, ana sayfadaki kartlar, footer bağlantıları ve altı hizmet
// detay sayfası bu dosyadan üretilir. Yeni bir hizmet eklemek için diziye yeni
// bir nesne eklemeniz yeterlidir; detay sayfası otomatik olarak oluşturulur.
// ---------------------------------------------------------------------------

import type { IconName } from '@/lib/icons';

export interface ServiceTopic {
  title: string;
  text: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  number: string;
  icon: IconName;
  title: string;
  /** Kartlarda kullanılan kısa açıklama (2–3 cümle). */
  summary: string;
  /** Detay sayfası hero alt metni. */
  lead: string;
  /** SEO meta açıklaması (≈150–160 karakter). */
  metaDescription: string;
  /** Hizmet özeti paragrafları. */
  overview: string[];
  /** "Değerlendirilen konular" listesi. */
  topics: ServiceTopic[];
  /** "Hizmetin kapsamı": çalışma sonunda sunulan çıktılar. */
  scope: string[];
  /** "Çalışma yöntemi" adımları. */
  method: ServiceTopic[];
  /** "Hedeflenen müşteri ihtiyaçları". */
  needs: string[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'yapim-isi-ihale-dosyasi-inceleme',
    number: '01',
    icon: 'document-search',
    title: 'Yapım İşi İhale Dosyası İnceleme',
    summary:
      'İdari ve teknik şartnameler, sözleşme tasarısı, projeler ve zeyilnameler birlikte okunarak ihale koşulları sistematik biçimde çıkarılır. Teklif kararını etkileyebilecek belge, süre ve risk unsurları raporlanır.',
    lead:
      'İhale dokümanını bölüm bölüm değil, bir bütün olarak okuyoruz. Şartname, sözleşme tasarısı, proje ve cetveller arasındaki ilişkiyi kurarak teklif kararına esas olacak koşulları açık bir rapora dönüştürüyoruz.',
    metaDescription:
      'Yapım işi ihale dokümanının idari ve teknik şartname, sözleşme tasarısı, proje, cetvel ve zeyilnameler bakımından sistematik incelemesi ve risk değerlendirmesi.',
    overview: [
      'Bir yapım işi ihale dokümanı; idari şartname, sözleşme tasarısı, teknik şartnameler, projeler, mahal listeleri ve teklif cetvelleri gibi birbirine atıf yapan çok sayıda belgeden oluşur. Bu belgelerden birindeki tek bir hüküm, teklif bedelini, yeterlik durumunu veya sözleşme dönemindeki yükümlülükleri doğrudan etkileyebilir.',
      'İnceleme çalışmasında amacımız, dokümanda yer alan koşulları eksiksiz biçimde çıkarmak, belgeler arasındaki tutarsızlıkları tespit etmek ve firmanın ihaleye katılım kararını sağlıklı bilgiyle vermesine yardımcı olmaktır. Değerlendirme, her zaman ilgili ihalenin kendi dokümanı ve mevzuatın güncel hâli esas alınarak yapılır.',
    ],
    topics: [
      {
        title: 'İdari şartname',
        text: 'İhale usulü, teklif türü, yeterlik kriterleri, benzer iş tanımı, teminat, süre ve teklif geçerlilik hükümleri gibi temel koşulların çıkarılması.',
      },
      {
        title: 'Teknik şartname',
        text: 'Malzeme, imalat, test ve kalite gerekliliklerinin uygulama yöntemi ve maliyet üzerindeki etkileri bakımından incelenmesi.',
      },
      {
        title: 'Sözleşme tasarısı',
        text: 'Ödeme, fiyat farkı, iş programı, gecikme cezası, teminat ve kabul hükümlerinin yüklenici yükümlülükleri açısından okunması.',
      },
      {
        title: 'Projeler ve teknik dokümanlar',
        text: 'Mimari, statik, mekanik ve elektrik projeler ile mahal listeleri ve detayların teklif hazırlığına esas bilgiler bakımından incelenmesi.',
      },
      {
        title: 'Birim fiyat teklif cetvelleri',
        text: 'Birim fiyat esaslı ihalelerde cetvel kalemlerinin iş tanımları, pozlar ve projelerle tutarlılığının kontrolü.',
      },
      {
        title: 'Zeyilnameler',
        text: 'İhale dokümanında yapılan değişikliklerin ilgili tüm bölümlere yansıtılması ve inceleme raporunun güncellenmesi.',
      },
      {
        title: 'Belge ve süre gereklilikleri',
        text: 'Teklifle birlikte sunulacak belgelerin ve dokümanda belirtilen kritik tarihlerin takip edilebilir bir kontrol listesine dönüştürülmesi.',
      },
      {
        title: 'İhale koşullarına bağlı riskler',
        text: 'Belirsiz, çelişkili veya yüklenici aleyhine sonuç doğurabilecek düzenlemelerin tespiti ve gerektiğinde açıklama talebi konusu olabilecek hususların belirlenmesi.',
      },
    ],
    scope: [
      'Doküman bütününe ilişkin yazılı inceleme raporu',
      'Teklifle sunulacak belgeler ve kritik tarihler için kontrol listesi',
      'Belgeler arası çelişki ve belirsizlik tespit listesi',
      'Teklif kararına esas özet değerlendirme ve öncelikli risk başlıkları',
      'Zeyilname yayımlanması hâlinde rapor güncellemesi',
    ],
    method: [
      {
        title: 'Kapsam tespiti',
        text: 'İhale dokümanının tamamı teslim alınır; ihalenin türü, teklif esası ve son teklif tarihine göre inceleme planı oluşturulur.',
      },
      {
        title: 'Bölüm bazlı inceleme',
        text: 'Şartnameler, sözleşme tasarısı, projeler ve cetveller kendi içinde ayrıntılı olarak okunur, tespitler kayda alınır.',
      },
      {
        title: 'Çapraz kontrol',
        text: 'Belgeler birbirleriyle karşılaştırılır; tanımlar, miktarlar, süreler ve yükümlülükler arasındaki uyum kontrol edilir.',
      },
      {
        title: 'Raporlama ve değerlendirme',
        text: 'Bulgular önem derecesine göre sıralanarak raporlanır ve firmanın teklif ekibiyle birlikte değerlendirilir.',
      },
    ],
    needs: [
      'İhaleye katılıp katılmama kararını kısa sürede ve sağlıklı bilgiyle vermek isteyen firmalar',
      'Yoğun ihale döneminde teknik ofisine doküman inceleme desteği arayan yükleniciler',
      'Benzer iş ve yeterlik koşullarına uygunluğunu baştan teyit etmek isteyen ihale hazırlık ekipleri',
      'Sözleşme döneminde sürpriz yaşamamak için risk unsurlarını önceden görmek isteyen işletmeler',
    ],
    faqs: [
      {
        q: 'İnceleme için hangi dokümanlar gereklidir?',
        a: 'EKAP üzerinden erişilen ihale dokümanının tamamı (idari şartname, sözleşme tasarısı, teknik şartnameler, projeler, cetveller ve ekler) ile varsa yayımlanmış zeyilnameler ve idare açıklamaları gereklidir. Eksik belgeyle yapılan inceleme, sonuçları yanıltıcı hâle getirebilir.',
      },
      {
        q: 'İnceleme ne kadar sürer?',
        a: 'Süre; dokümanın hacmine, işin niteliğine ve son teklif tarihine kalan zamana göre değişir. Ön görüşmede doküman kapsamı birlikte değerlendirilerek gerçekçi bir çalışma takvimi belirlenir.',
      },
      {
        q: 'Dokümanda sorun tespit edilirse ne yapılabilir?',
        a: 'Tespit edilen belirsizlik ve çelişkiler raporda ayrıca belirtilir. İdareden açıklama talep edilmesi veya şikâyet başvurusu gibi işlemler mevzuatta belirlenen süre ve usullere tabidir; bu işlemler firmanın kendi iradesiyle yürütülür. Hukuki temsil hizmeti verilmez; gerekli durumlarda avukat desteği alınması önerilir.',
      },
      {
        q: 'İnceleme, ihalenin kazanılmasını garanti eder mi?',
        a: 'Hayır. İnceleme, karar sürecini daha sağlıklı bilgiye dayandırmayı amaçlar. İhalenin sonucu; tekliflerin değerlendirilmesine, diğer isteklilerin tekliflerine ve idarenin kararlarına bağlıdır.',
      },
    ],
  },
  {
    slug: 'ihaleye-katilim-ve-yeterlik',
    number: '02',
    icon: 'shield-check',
    title: 'İhaleye Katılım ve Yeterlik',
    summary:
      'Katılım şartları ile mesleki, teknik, ekonomik ve mali yeterlik kriterleri firmanın mevcut belgeleriyle karşılaştırılır. Teminat, temsil ve belge uygunluğu teklif öncesinde madde madde kontrol edilir.',
    lead:
      'Yeterlik eksikliği, çoğu zaman teklif fiyatından önce değerlendirme dışı kalma sebebidir. İhale dokümanında istenen kriterleri firmanın belge yapısıyla karşılaştırıyor, eksikleri teklif öncesinde görünür kılıyoruz.',
    metaDescription:
      'Yapım işi ihalelerinde katılım şartları, mesleki-teknik ve ekonomik-mali yeterlik, teminat, temsil yetkisi ve belge uygunluğu kontrolü için danışmanlık.',
    overview: [
      'Kamu ihalelerinde istekliler, ihale dokümanında belirlenen katılım şartlarını ve yeterlik kriterlerini sağladıklarını mevzuatta öngörülen belgelerle ortaya koymak zorundadır. Kriterler ihaleden ihaleye farklılık gösterebilir ve aynı firmanın bir ihalede yeterli olduğu bir belge, başka bir ihalede yeterli olmayabilir.',
      'Bu hizmette ihale dokümanındaki katılım ve yeterlik koşulları ayrıştırılır, firmanın mevcut belgeleri bu koşullarla tek tek karşılaştırılır. Amaç, eksik veya uyumsuz bir belge nedeniyle teklifin değerlendirme dışı kalma riskini teklif hazırlığının erken aşamasında ortaya koymaktır.',
    ],
    topics: [
      {
        title: 'Katılım şartları',
        text: 'İhaleye katılamayacak olanlara ilişkin hükümler, ortak girişim koşulları ve ihaleye özgü katılım kurallarının firma durumuyla karşılaştırılması.',
      },
      {
        title: 'Mesleki ve teknik yeterlik',
        text: 'İş deneyimi, benzer iş, teknik personel, makine-ekipman ve istenmesi hâlinde kalite ve standart belgelerine ilişkin kriterlerin değerlendirilmesi.',
      },
      {
        title: 'Ekonomik ve mali yeterlik',
        text: 'Dokümanda istenmesi hâlinde banka referans mektubu, bilanço veya eşdeğer belgeler ile iş hacmine ilişkin belgeler ve bunlara bağlı kriterlerin kontrolü.',
      },
      {
        title: 'Teminat gereklilikleri',
        text: 'Geçici teminatın tutarı, türü, geçerlilik süresi ve sunuluş şeklinin ihale dokümanına uygunluğunun kontrolü.',
      },
      {
        title: 'Yetkilendirme ve temsil bilgileri',
        text: 'İmza sirküleri, vekâletname, ortaklık ve yönetim yapısına ilişkin bilgilerin teklif belgeleri ve EKAP kayıtlarıyla tutarlılığı.',
      },
      {
        title: 'İhaleye katılım belgesi süreçleri',
        text: 'Katılım için istenen belgelerin hazırlanma, temin ve geçerlilik sürelerinin son teklif tarihine göre planlanması.',
      },
      {
        title: 'Belge kontrol ve uygunluk değerlendirmesi',
        text: 'Hazırlanan belgelerin, teklif sunulmadan önce ihale dokümanındaki gereklilikler esas alınarak madde madde kontrol edilmesi.',
      },
    ],
    scope: [
      'İhaleye özgü katılım ve yeterlik kriterleri tablosu',
      'Firma belgeleri ile kriterlerin karşılaştırmalı uygunluk değerlendirmesi',
      'Eksik veya güncellenmesi gereken belgeler listesi',
      'Teminat ve temsil yetkisine ilişkin kontrol notları',
      'Teklif öncesi son belge kontrolü',
    ],
    method: [
      {
        title: 'Kriterlerin ayrıştırılması',
        text: 'İdari şartnamedeki katılım ve yeterlik hükümleri tek tek çıkarılarak bir kriter tablosuna dönüştürülür.',
      },
      {
        title: 'Belge envanteri',
        text: 'Firmanın mevcut belge ve kayıtları derlenir; geçerlilik tarihleri ve içerikleri not edilir.',
      },
      {
        title: 'Karşılaştırma',
        text: 'Her kriter için mevcut belgenin yeterliliği değerlendirilir; eksik, belirsiz veya riskli noktalar işaretlenir.',
      },
      {
        title: 'Tamamlama ve son kontrol',
        text: 'Eksiklerin giderilmesi için yapılacaklar planlanır, teklif sunulmadan önce tüm belgeler yeniden kontrol edilir.',
      },
    ],
    needs: [
      'Kamu yapım işi ihalelerine ilk kez katılmayı planlayan işletmeler',
      'Ortak girişim olarak teklif vermeyi değerlendiren firmalar',
      'Belge eksikliği nedeniyle daha önce değerlendirme dışı kalmış ve süreci güçlendirmek isteyen yükleniciler',
      'Birden fazla ihaleye eş zamanlı hazırlanan teklif ve sözleşme birimleri',
    ],
    faqs: [
      {
        q: 'Yeterlik kriterleri her ihalede aynı mıdır?',
        a: 'Hayır. Mevzuat genel çerçeveyi belirler; ancak hangi belgelerin isteneceği, benzer iş tanımı ve asgari tutarlar gibi kriterler her ihalenin kendi dokümanında düzenlenir. Bu nedenle değerlendirme ihale bazında yapılır.',
      },
      {
        q: 'Ortak girişimlerde yeterlik nasıl değerlendirilir?',
        a: 'Ortak girişimlerde yeterlik kriterlerinin ortaklar tarafından nasıl sağlanacağı, mevzuat ve ihale dokümanındaki düzenlemelere göre belirlenir. Ortaklık oranları ve pilot ortağın sağlaması gereken koşullar dokümana göre ayrıca incelenir.',
      },
      {
        q: 'Belgeleri sizin adınıza EKAP\'a yüklüyor musunuz?',
        a: 'Hayır. EKAP işlemleri firmanın kendi yetkili kullanıcıları tarafından yürütülür. Danışmanlık; belgelerin uygunluğunun değerlendirilmesi ve sürecin doğru planlanmasıyla sınırlıdır.',
      },
    ],
  },
  {
    slug: 'is-deneyim-belgesi-degerlendirme',
    number: '03',
    icon: 'certificate',
    title: 'İş Deneyim Belgesi Değerlendirme',
    summary:
      'İş bitirme, iş durum, iş denetleme ve iş yönetme belgeleri, ihale dokümanındaki benzer iş tanımı ve asgari tutar koşuluna göre değerlendirilir. Belge tutarlarının güncellenmesi hesap bazında kontrol edilir.',
    lead:
      'İş deneyim belgesi, yapım işi ihalelerinde mesleki yeterliğin en belirleyici unsurlarından biridir. Belgenin türünü, içeriğini ve güncellenmiş tutarını ihale dokümanındaki koşullarla birlikte değerlendiriyoruz.',
    metaDescription:
      'İş bitirme, iş durum, iş denetleme ve iş yönetme belgelerinin benzer iş, belge tutarı güncellemesi ve ihale bazında yeterlik açısından değerlendirilmesi.',
    overview: [
      'Yapım işi ihalelerinde istekliden, ihale konusu işe veya benzer işlere ilişkin belirli bir tutarda iş deneyimini belgelemesi istenir. Belgenin kabul edilebilirliği; belge türüne, belgede yer alan işin benzer iş tanımıyla örtüşmesine, belge sahibinin kim olduğuna ve güncellenmiş tutarın asgari koşulu karşılayıp karşılamadığına bağlıdır.',
      'Bu hizmette firmanın iş deneyim belgeleri ilgili ihalenin koşullarıyla birlikte incelenir. Benzer iş değerlendirmesi, ihale dokümanı ve yürürlükteki benzer iş grupları düzenlemesi esas alınarak yapılır; tutar güncellemesi ise mevzuatta öngörülen yöntem doğrultusunda hesap bazında kontrol edilir.',
    ],
    topics: [
      {
        title: 'İş bitirme belgesi',
        text: 'Kabulü yapılmış işler için düzenlenen belgelerin içerik, tutar, iş tanımı ve belge sahibi bilgileri bakımından incelenmesi.',
      },
      {
        title: 'İş durum belgesi',
        text: 'Devam eden işler için düzenlenen belgelerin, hangi koşullarda düzenlenebildiği ve yeterlikte nasıl dikkate alındığı yönünden değerlendirilmesi.',
      },
      {
        title: 'İş denetleme belgesi',
        text: 'Yapım işlerinde denetim görevi üstlenmiş kişilere düzenlenen belgelerin kullanılabilirlik koşullarının incelenmesi.',
      },
      {
        title: 'İş yönetme belgesi',
        text: 'Yapım işlerinde yönetim görevi üstlenmiş kişilere düzenlenen belgelerin kullanılabilirlik koşullarının incelenmesi.',
      },
      {
        title: 'Benzer iş değerlendirmesi',
        text: 'Belgedeki işin, ihale dokümanında tanımlanan benzer iş grubu veya tanımıyla örtüşüp örtüşmediğinin değerlendirilmesi.',
      },
      {
        title: 'Belge tutarının güncellenmesi',
        text: 'Belge tutarının mevzuatta öngörülen yöntem ve endeksler kullanılarak güncellenmesine ilişkin hesabın kontrolü.',
      },
      {
        title: 'İhale bazında yeterlik',
        text: 'Güncellenmiş tutarın ihalede istenen asgari iş deneyimi tutarını karşılayıp karşılamadığının ve ortak girişimlerde ortaklara düşen payların değerlendirilmesi.',
      },
    ],
    scope: [
      'Firmanın iş deneyim belgeleri için belge bazında değerlendirme notu',
      'İlgili ihalenin benzer iş tanımına göre uygunluk görüşü',
      'Belge tutarı güncelleme hesabının kontrolü',
      'Asgari tutar karşılaştırması ve olası riskler',
      'Gelecek ihaleler için belge portföyü özet tablosu (talep hâlinde)',
    ],
    method: [
      {
        title: 'Belge derleme',
        text: 'Firmanın elindeki iş deneyim belgeleri ve bunlara dayanak teşkil eden sözleşme ve kabul bilgileri derlenir.',
      },
      {
        title: 'Tür ve içerik kontrolü',
        text: 'Her belgenin türü, belge sahibi, iş tanımı ve tutar bilgileri ayrı ayrı incelenir.',
      },
      {
        title: 'Benzer iş ve tutar analizi',
        text: 'Belgeler ihale dokümanındaki benzer iş tanımı ile karşılaştırılır; güncel tutar hesaplanarak asgari koşulla kıyaslanır.',
      },
      {
        title: 'Değerlendirme raporu',
        text: 'Kullanılabilecek belge, olası riskler ve dikkat edilmesi gereken hususlar yazılı olarak raporlanır.',
      },
    ],
    needs: [
      'Hangi iş deneyim belgesinin hangi ihalede kullanılabileceğini netleştirmek isteyen yükleniciler',
      'Belge tutarının güncellemeden sonra asgari koşulu karşılayıp karşılamadığını teyit etmek isteyen firmalar',
      'Ortak girişimlerde iş deneyimi paylaşımını planlayan ortaklıklar',
      'Belge portföyünü düzenli olarak takip etmek isteyen teklif birimleri',
    ],
    faqs: [
      {
        q: 'Benzer iş değerlendirmesi neye göre yapılır?',
        a: 'Benzer iş, her ihalenin dokümanında ayrıca tanımlanır. Yapım işlerinde bu tanım, yürürlükteki benzer iş gruplarına ilişkin düzenleme dikkate alınarak yapılır. Değerlendirme, ilgili ihalenin dokümanı ve düzenlemenin güncel hâli birlikte okunarak gerçekleştirilir.',
      },
      {
        q: 'Belge tutarı neden güncellenir?',
        a: 'İş deneyim belgelerindeki tutarlar, belgenin düzenlendiği dönemin fiyatlarını yansıtır. Mevzuat, bu tutarların ihale tarihine göre belirli bir yöntemle güncellenmesini öngörür. Güncelleme hesabının doğru yapılması, asgari tutarın karşılanıp karşılanmadığının belirlenmesinde önemlidir.',
      },
      {
        q: 'Belge düzenlenmesi için idare nezdinde işlem yapıyor musunuz?',
        a: 'Hayır. Belge düzenleme talepleri ve resmî yazışmalar firmanın kendisi tarafından yürütülür. Danışmanlık, belgenin değerlendirilmesi ve sürecin doğru planlanmasıyla sınırlıdır.',
      },
    ],
  },
  {
    slug: 'teklif-hazirlama-ve-maliyet-analizi',
    number: '04',
    icon: 'calculator',
    title: 'Teklif Hazırlama ve Maliyet Analizi',
    summary:
      'Metraj kontrolünden birim fiyat analizine, işçilik, malzeme ve ekipman giderlerinden genel gidere kadar maliyet kalemleri yapılandırılmış biçimde ele alınır. Sınır değer ve aşırı düşük teklif açıklamalarına hazırlık desteklenir.',
    lead:
      'Rekabetçi bir teklif, gerçekçi bir maliyet tabanına dayanmalıdır. Metraj, analiz ve gider kalemlerini izlenebilir bir yapıda kuruyor, teklif stratejisinin bu temel üzerinde değerlendirilmesine destek oluyoruz.',
    metaDescription:
      'Yapım işi ihalelerinde metraj kontrolü, birim fiyat analizi, işçilik-malzeme-ekipman ve genel gider değerlendirmesi, sınır değer ve aşırı düşük teklif açıklaması hazırlığı.',
    overview: [
      'Yapım işi tekliflerinde fiyat; proje ve şartnamelerden çıkarılan miktarlar, imalat yöntemine uygun analizler ve firmanın kendi maliyet yapısının birleşiminden oluşur. Bu zincirin herhangi bir halkasındaki hata, ya rekabet gücünü kaybettiren yüksek bir teklife ya da sözleşme döneminde zarar doğuran düşük bir teklife yol açabilir.',
      'Bu hizmette maliyet kalemleri izlenebilir bir yapıda oluşturulur ve kontrol edilir. Teklif stratejisine ilişkin değerlendirmeler, firmanın kendi verileri ve ihale dokümanı esas alınarak yapılır. Teklif fiyatına ilişkin nihai karar her zaman istekliye aittir.',
    ],
    topics: [
      {
        title: 'Metraj çalışmaları',
        text: 'Proje ve detaylardan miktar çıkarılması veya idarece verilen miktarların kontrolü; ölçü birimleri ve tanımlar arasındaki tutarlılığın sağlanması.',
      },
      {
        title: 'Birim fiyat analizleri',
        text: 'İmalat kalemlerinin işçilik, malzeme ve makine bileşenlerine ayrılarak yapılandırılmış analizlerle fiyatlandırılması.',
      },
      {
        title: 'İşçilik ve malzeme giderleri',
        text: 'Güncel piyasa verileri ve firmanın tedarik koşulları dikkate alınarak işçilik ve malzeme girdilerinin değerlendirilmesi.',
      },
      {
        title: 'Ekipman giderleri',
        text: 'Makine ve ekipmanın sahiplik veya kiralama durumuna göre çalışma, amortisman ve nakliye giderlerinin analizlere yansıtılması.',
      },
      {
        title: 'Genel gider değerlendirmesi',
        text: 'Şantiye genel giderleri, finansman, sigorta, teminat ve vergi gibi doğrudan imalata bağlı olmayan giderlerin hesaba katılması.',
      },
      {
        title: 'Teklif stratejisi',
        text: 'Maliyet tabanı, risk payı ve iş programı birlikte değerlendirilerek teklif kararına esas senaryoların hazırlanması.',
      },
      {
        title: 'Sınır değer değerlendirmeleri',
        text: 'İhale dokümanında sınır değer uygulaması öngörülmüşse, bu uygulamanın teklif kararına olası etkilerinin genel çerçevede değerlendirilmesi.',
      },
      {
        title: 'Aşırı düşük teklif açıklamalarına hazırlık',
        text: 'İdarece açıklama istenmesi ihtimaline karşı, teklifin dayandığı maliyet bileşenlerinin belgelendirilebilir biçimde düzenlenmesi.',
      },
    ],
    scope: [
      'Metraj kontrol tablosu ve tespit edilen farklılıklar',
      'Kalem bazında birim fiyat analizleri',
      'Gider kalemlerinin özet maliyet tablosu',
      'Teklif senaryoları ve duyarlılık değerlendirmesi',
      'Aşırı düşük teklif açıklaması için dayanak belge listesi',
    ],
    method: [
      {
        title: 'Girdi toplama',
        text: 'Proje, şartname ve cetveller ile firmanın tedarik, ekipman ve organizasyon bilgileri derlenir.',
      },
      {
        title: 'Miktar ve analiz',
        text: 'Metrajlar kontrol edilir, imalat kalemleri için analizler oluşturulur veya mevcut analizler gözden geçirilir.',
      },
      {
        title: 'Maliyet tabanı',
        text: 'Doğrudan ve genel giderler bir araya getirilerek izlenebilir bir maliyet tabanı oluşturulur.',
      },
      {
        title: 'Senaryo ve karar desteği',
        text: 'Farklı varsayımlarla teklif senaryoları hazırlanır ve teklif ekibiyle birlikte değerlendirilir.',
      },
    ],
    needs: [
      'Teklif hazırlık süresi kısa olan ve analiz kapasitesini desteklemek isteyen teknik ofisler',
      'Maliyet yapısını kalem bazında görünür kılmak isteyen yükleniciler',
      'Aşırı düşük teklif sorgulamasına önceden hazırlıklı olmak isteyen firmalar',
      'Teklif kararını farklı senaryolarla değerlendirmek isteyen yönetim ekipleri',
    ],
    faqs: [
      {
        q: 'Teklif fiyatını siz mi belirliyorsunuz?',
        a: 'Hayır. Maliyet analizi ve senaryolar karar desteği amacıyla hazırlanır. Teklif fiyatına ilişkin nihai karar ve sorumluluk istekliye aittir.',
      },
      {
        q: 'Sınır değerin ne olacağını önceden söyleyebilir misiniz?',
        a: 'Hayır. Sınır değer, mevzuatta öngörülen yönteme göre ve ihaleye sunulan geçerli teklifler dikkate alınarak hesaplanır; teklifler açılmadan kesin olarak bilinemez. Danışmanlık kapsamında yalnızca uygulamanın genel çerçevesi ve teklif kararına olası etkileri değerlendirilir.',
      },
      {
        q: 'Aşırı düşük teklif açıklamasını sizin hazırlamanız mümkün mü?',
        a: 'Açıklamanın içeriğinin ve dayanak belgelerinin düzenlenmesine teknik destek verilebilir. Açıklama, firma tarafından ve firmanın kendi belgelerine dayanılarak idareye sunulur; idarenin değerlendirmesine ilişkin bir taahhütte bulunulmaz.',
      },
    ],
  },
  {
    slug: 'ekap-danismanligi',
    number: '05',
    icon: 'network',
    title: 'EKAP Danışmanlığı',
    summary:
      'Elektronik Kamu Alımları Platformu üzerindeki kullanım, yetkilendirme, elektronik imza ve e-teklif süreçleri hakkında süreç odaklı danışmanlık verilir. İşlemler firmanın kendi yetkili kullanıcıları tarafından yürütülür.',
    lead:
      'Kamu ihale süreçlerinin önemli bir bölümü artık elektronik ortamda yürütülüyor. Firmanızın EKAP üzerindeki iş akışlarını doğru kurmasına, yetkilendirme ve e-teklif adımlarını planlı biçimde yönetmesine destek oluyoruz.',
    metaDescription:
      'EKAP kullanım süreçleri, yetkilendirme, elektronik imza, ihale dokümanı erişimi, elektronik teklif hazırlığı ve bildirim takibi hakkında süreç danışmanlığı.',
    overview: [
      'Elektronik Kamu Alımları Platformu (EKAP), Kamu İhale Kurumu tarafından işletilen ve ihale ilanlarından doküman erişimine, elektronik teklif sunumundan bildirimlere kadar pek çok işlemin yürütüldüğü platformdur. Platformdaki iş akışları ve ekranlar zaman içinde güncellenebilir.',
      'Bu hizmette firmanın EKAP üzerindeki süreçleri; kullanıcı yapısı, yetkilendirme, elektronik imza, teklif hazırlığı ve bildirim takibi başlıklarında değerlendirilir. Danışmanlık süreç bilgisi ve kontrol desteğiyle sınırlıdır: EKAP hesaplarına erişim, şifre veya elektronik imza bilgisi talep edilmez; işlemler firmanın kendi yetkili kullanıcıları tarafından yapılır.',
    ],
    topics: [
      {
        title: 'EKAP kullanım süreçleri',
        text: 'Firma kaydı, kullanıcı tanımları ve platformun temel ekranları üzerinden iş akışlarının anlaşılır hâle getirilmesi.',
      },
      {
        title: 'Yetkilendirme işlemleri',
        text: 'Firma adına işlem yapacak kullanıcıların rol ve yetkilerinin, şirketin temsil yapısıyla uyumlu biçimde planlanması.',
      },
      {
        title: 'Elektronik imza süreçleri',
        text: 'Elektronik imzanın temini, geçerlilik süresi ve kullanımına ilişkin hazırlıkların teklif takvimine göre planlanması.',
      },
      {
        title: 'İhale dokümanlarının incelenmesi',
        text: 'Doküman erişimi, zeyilname ve açıklamaların takibi ile elektronik ortamda sunulan belgelerin eksiksiz derlenmesi.',
      },
      {
        title: 'Elektronik teklif hazırlığı',
        text: 'Teklif mektubu, cetveller ve yeterlik bilgilerinin elektronik ortamda hazırlanma adımlarının kontrol listesine bağlanması.',
      },
      {
        title: 'Elektronik bildirim ve süreç takibi',
        text: 'İhale sürecinde EKAP üzerinden yapılan bildirim ve tebligatların takibi ile bunlara bağlı sürelerin izlenmesi.',
      },
      {
        title: 'Güncel elektronik ihale iş akışları',
        text: 'Platformdaki güncellemelerin firmanın iç süreçlerine yansıtılması ve ekiplerin güncel iş akışları hakkında bilgilendirilmesi.',
      },
    ],
    scope: [
      'Firmaya özgü EKAP iş akışı ve sorumluluk dağılımı önerisi',
      'Yetkilendirme ve elektronik imza hazırlık kontrol listesi',
      'Elektronik teklif öncesi adım adım kontrol listesi',
      'Bildirim ve süre takibi için iç süreç önerisi',
      'Teklif ekibine yönelik süreç bilgilendirmesi',
    ],
    method: [
      {
        title: 'Mevcut durum',
        text: 'Firmanın EKAP kullanımı, kullanıcı yapısı ve teklif süreçlerindeki rol dağılımı birlikte değerlendirilir.',
      },
      {
        title: 'İş akışı tasarımı',
        text: 'Doküman erişiminden teklif sunumuna kadar adımlar, sorumlu kişiler ve kontrol noktalarıyla tanımlanır.',
      },
      {
        title: 'Hazırlık kontrolü',
        text: 'Yetkilendirme ve elektronik imza gibi ön koşullar, teklif takviminden yeterli süre önce kontrol edilir.',
      },
      {
        title: 'Uygulama desteği',
        text: 'İhale sürecinde ortaya çıkan sorularda süreç bilgisiyle destek verilir; işlemler firma kullanıcıları tarafından yürütülür.',
      },
    ],
    needs: [
      'Elektronik ihale süreçlerine yeni geçen veya ilk kez e-teklif verecek firmalar',
      'Teklif ekibinde görev değişikliği yaşayan ve iş akışını yeniden kurmak isteyen işletmeler',
      'Son gün yaşanabilecek teknik ve yetki kaynaklı aksaklıkları önlemek isteyen yükleniciler',
      'Bildirim ve sürelerin takibini sistematik hâle getirmek isteyen sözleşme birimleri',
    ],
    faqs: [
      {
        q: 'EKAP şifremizi veya elektronik imzamızı paylaşmamız gerekir mi?',
        a: 'Hayır. Bu bilgiler hiçbir aşamada talep edilmez ve paylaşılmamalıdır. Danışmanlık, işlemlerin firma kullanıcıları tarafından doğru ve zamanında yapılmasına yönelik süreç desteğidir.',
      },
      {
        q: 'Kamu İhale Kurumu veya EKAP ile resmî bir bağlantınız var mı?',
        a: 'Hayır. Bu site ve sunulan danışmanlık hizmeti Kamu İhale Kurumu veya EKAP ile resmî bir bağlantı içermez. Resmî bilgi ve duyurular için Kamu İhale Kurumu\'nun ve EKAP\'ın kendi internet sitelerini takip etmenizi öneririz.',
      },
      {
        q: 'Platformda yaşanan teknik sorunları çözebilir misiniz?',
        a: 'Platformun kendisine ilişkin teknik sorunlar için resmî destek kanallarına başvurulması gerekir. Danışmanlık kapsamında, firma tarafındaki hazırlık ve iş akışı kaynaklı sorunların önlenmesine odaklanılır.',
      },
    ],
  },
  {
    slug: 'sozlesme-ve-ihale-sonrasi',
    number: '06',
    icon: 'contract',
    title: 'Sözleşme ve İhale Sonrası Süreçler',
    summary:
      'Sözleşme imzalama hazırlığından kesin teminata, yer tesliminden hakediş ve fiyat farkına kadar ihale sonrası süreçler planlı biçimde ele alınır. Süre uzatımı, iş programı ve kabul aşamalarında dokümana dayalı destek sağlanır.',
    lead:
      'İhalenin kazanılması, sürecin sonu değil yeni bir aşamanın başlangıcıdır. Sözleşme döneminde ortaya çıkan yükümlülükleri, süreleri ve belge gerekliliklerini sözleşme ve eklerine dayanarak takip edilebilir hâle getiriyoruz.',
    metaDescription:
      'Yapım işi sözleşmelerinde imza öncesi hazırlık, kesin teminat, yer teslimi, hakediş, fiyat farkı, süre uzatımı, iş programı ve geçici-kesin kabul süreçlerine destek.',
    overview: [
      'Yapım işi sözleşmesinin uygulanması; sözleşme, genel şartname, özel şartname ve ilgili mevzuatta yer alan çok sayıda süre, bildirim ve belge yükümlülüğünü içerir. Bu yükümlülüklerin zamanında ve usulüne uygun yerine getirilmemesi, hak kaybına veya uyuşmazlıklara yol açabilir.',
      'Bu hizmette sözleşme dönemine ilişkin süreçler, sözleşme belgeleri esas alınarak planlanır ve takip edilir. Uygulanacak işlemler; sözleşmenin kendi hükümlerine, ihale dokümanına ve mevzuatın güncel hâline göre değişebilir. Uyuşmazlık durumlarında hukuki değerlendirme için avukat desteği alınması önerilir.',
    ],
    topics: [
      {
        title: 'Sözleşme imzalama öncesi hazırlık',
        text: 'Kesinleşen ihale kararı sonrasında sözleşme imzası için istenen belgelerin ve sürelerin planlanması.',
      },
      {
        title: 'Kesin teminat',
        text: 'Kesin teminatın tutarı, türü ve geçerlilik koşullarının sözleşme ve dokümanla uyumunun kontrolü.',
      },
      {
        title: 'Yer teslimi',
        text: 'Yer teslimine hazırlık, tutanak içeriği ve yer teslimine bağlı olarak başlayan sürelerin takibi.',
      },
      {
        title: 'Hakediş',
        text: 'Hakediş dönemleri, ataşman ve metrajların sözleşme hükümlerine uygun hazırlanması ve kontrolü.',
      },
      {
        title: 'Fiyat farkı',
        text: 'Sözleşmede fiyat farkı öngörülmüşse, uygulanacak esasların ve hesap girdilerinin sözleşmeye göre kontrolü.',
      },
      {
        title: 'Süre uzatımı',
        text: 'Süre uzatımı gerektirebilecek durumların belgelendirilmesi ve başvuruların sözleşmede öngörülen sürelerde yapılmasının takibi.',
      },
      {
        title: 'İş programı',
        text: 'İş programının sözleşme koşullarına uygun hazırlanması, revizyon gereksinimlerinin ve gerçekleşmenin izlenmesi.',
      },
      {
        title: 'Geçici ve kesin kabul süreçleri',
        text: 'Kabul başvurusu, eksik ve kusurların giderilmesi ile kabul tutanaklarına bağlı süreçlerin planlanması.',
      },
    ],
    scope: [
      'Sözleşmeye özgü yükümlülük ve süre takvimi',
      'Hakediş ve fiyat farkı hesaplarına yönelik kontrol notları',
      'Süre uzatımı ve bildirimler için belge hazırlık listesi',
      'Kabul aşamalarına ilişkin kontrol listesi',
      'Sözleşme dönemi boyunca süreç bazlı danışmanlık',
    ],
    method: [
      {
        title: 'Sözleşme analizi',
        text: 'Sözleşme ve ekleri incelenerek yükümlülükler, süreler ve bildirim gereklilikleri çıkarılır.',
      },
      {
        title: 'Takvim ve sorumluluk',
        text: 'Yükümlülükler bir takvime bağlanır; firma içinde sorumlu kişiler ve kontrol noktaları belirlenir.',
      },
      {
        title: 'Dönemsel kontrol',
        text: 'Hakediş, iş programı ve yazışmalar belirli aralıklarla sözleşme hükümleriyle karşılaştırılır.',
      },
      {
        title: 'Kapanış',
        text: 'Kabul süreçleri ve sözleşmenin tamamlanmasına ilişkin adımlar planlanarak takip edilir.',
      },
    ],
    needs: [
      'İhaleyi kazanmış ve sözleşme dönemine düzenli bir yapıyla başlamak isteyen yükleniciler',
      'Hakediş ve fiyat farkı hesaplarında ikinci bir kontrol arayan şantiye ve merkez ofis ekipleri',
      'Süre uzatımı ve bildirim yükümlülüklerini sistematik biçimde takip etmek isteyen firmalar',
      'Birden fazla sözleşmeyi eş zamanlı yöneten sözleşme birimleri',
    ],
    faqs: [
      {
        q: 'Sözleşme dönemindeki süreler nereden belirlenir?',
        a: 'Süreler; sözleşme, ihale dokümanı, ilgili genel şartname ve mevzuat hükümlerinden belirlenir. Somut sözleşmede yer alan özel düzenlemeler de dikkate alınmalıdır. Bu nedenle takvim, her sözleşme için ayrıca oluşturulur.',
      },
      {
        q: 'İdareyle yaşanan uyuşmazlıklarda temsil hizmeti veriyor musunuz?',
        a: 'Hayır. Hukuki temsil ve resmî kurumlar nezdinde firma adına işlem yapma hizmeti verilmez. Uyuşmazlıklar için avukat desteği alınması önerilir; danışmanlık kapsamında teknik ve belgesel hazırlık desteklenebilir.',
      },
      {
        q: 'Fiyat farkı her sözleşmede uygulanır mı?',
        a: 'Fiyat farkının uygulanıp uygulanmayacağı ve hangi esaslara göre hesaplanacağı ihale dokümanı ve sözleşmede belirlenir. Değerlendirme, ilgili sözleşmenin hükümleri ve yürürlükteki düzenlemeler esas alınarak yapılır.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Tüm hizmet sayfalarında gösterilen mevzuat ve kapsam notu. */
export const serviceDisclaimer =
  'Bu sayfadaki bilgiler genel niteliktedir. Uygulanacak işlemler, ilgili mevzuatın güncel hâline ve somut ihalenin dokümanına göre değişebilir. Danışmanlık hizmeti; hukuki temsil, resmî kurumlar adına işlem yapma veya ihale sonucuna ilişkin herhangi bir garanti içermez.';
