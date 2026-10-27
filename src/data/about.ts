// Hakkımızda sayfası içerikleri.
// Gerçek şirket bilgileri (kuruluş, ekip, belgeler) netleştiğinde `company`
// alanı doldurulabilir; dolu alanlar sayfada otomatik olarak görünür.

import type { IconName } from '@/lib/icons';

export const aboutIntro = {
  title: 'Doküman, analiz ve süreç disipliniyle çalışan bir danışmanlık anlayışı.',
  lead: 'Kamu yapım işi ihalelerinde doğru kararın, dokümanın eksiksiz okunmasına ve her adımın kontrol edilebilir biçimde yürütülmesine bağlı olduğuna inanıyoruz.',
};

export interface AboutPillar {
  id: string;
  icon: IconName;
  title: string;
  text: string;
  points: string[];
}

export const aboutPillars: AboutPillar[] = [
  {
    id: 'calisma-anlayisi',
    icon: 'compass',
    title: 'Çalışma anlayışımız',
    text: 'Danışmanlığı, firmanın kendi karar sürecini güçlendiren bir destek olarak görüyoruz. Teklif ve sözleşmeye ilişkin nihai kararlar her zaman firmada kalır; bizim görevimiz bu kararların doğru ve eksiksiz bilgiye dayanmasını sağlamaktır.',
    points: ['Kararı destekleyen, karar vermeyen bir rol', 'Kapsamı baştan netleştirilmiş çalışma', 'Gerçekçi takvim ve açık iletişim'],
  },
  {
    id: 'teknik-yaklasim',
    icon: 'ruler',
    title: 'Teknik ve analitik yaklaşımımız',
    text: 'İhale dokümanını yalnızca idari bir metin olarak değil; projeleri, miktarları ve maliyet etkileriyle birlikte bir mühendislik dokümanı olarak ele alıyoruz.',
    points: ['Proje, şartname ve cetvellerin birlikte okunması', 'Miktar ve maliyet etkilerinin görünür kılınması', 'Varsayımların açıkça yazılması'],
  },
  {
    id: 'seffaflik',
    icon: 'eye',
    title: 'Şeffaflık',
    text: 'Her değerlendirmede hangi belgeye ve hangi varsayıma dayandığımızı açıkça belirtiriz. Belirsiz olan hususları kesinmiş gibi sunmayız; danışmanlığın sınırlarını baştan paylaşırız.',
    points: ['Tespitlerin kaynağıyla birlikte raporlanması', 'Belirsizliklerin açıkça işaretlenmesi', 'Sonuç garantisi verilmemesi'],
  },
  {
    id: 'dokuman-odakli',
    icon: 'layers',
    title: 'Doküman odaklı inceleme',
    text: 'Her ihale kendi dokümanıyla değerlendirilir. Genel kabuller yerine, somut ihalenin şartnamesi, sözleşme tasarısı ve ekleri esas alınır; zeyilnameler incelemeye eksiksiz yansıtılır.',
    points: ['İhaleye özgü değerlendirme', 'Belgeler arası çapraz kontrol', 'Zeyilname ve açıklamaların takibi'],
  },
  {
    id: 'surec-yonetimi',
    icon: 'timeline',
    title: 'Süreç yönetimi',
    text: 'İhale ve sözleşme süreçleri, kaçırılmaması gereken tarihler ve bildirimlerden oluşur. Çalışmalarımızı kontrol listeleri, takvimler ve sorumluluk dağılımlarıyla yapılandırırız.',
    points: ['Kritik tarihlerin takvime bağlanması', 'Adım bazlı kontrol listeleri', 'Firma ekipleriyle net rol paylaşımı'],
  },
  {
    id: 'gizlilik',
    icon: 'lock',
    title: 'Gizlilik ve profesyonellik',
    text: 'Teklif bilgileri, maliyet yapıları ve firma belgeleri ticari açıdan hassas bilgilerdir. Bu bilgileri yalnızca çalışmanın amacı doğrultusunda kullanır, üçüncü kişilerle paylaşmayız.',
    points: ['Bilgilerin yalnızca çalışma amacıyla kullanılması', 'EKAP şifresi veya e-imza bilgisi talep edilmemesi', 'Gerektiğinde gizlilik sözleşmesi'],
  },
];

export const serviceBoundaries = {
  title: 'Hizmet sınırlarımız',
  lead: 'Güvenilir bir danışmanlık ilişkisi, neyin yapılıp neyin yapılmadığının baştan bilinmesiyle başlar.',
  items: [
    'Hukuki temsil veya avukatlık hizmeti verilmez.',
    'Resmî kurumlar nezdinde firma adına işlem yapılmaz; EKAP işlemleri firmanın kendi yetkili kullanıcılarınca yürütülür.',
    'İhale kazanımına veya idare kararlarına ilişkin herhangi bir garanti ya da taahhüt verilmez.',
    'Kamu İhale Kurumu veya EKAP ile resmî bir bağlantı bulunmaz.',
  ],
};

/**
 * Gerçek şirket bilgileri — doğrulandığında doldurun.
 * Değeri null olan alanlar sayfada gösterilmez.
 */
export const company: {
  story: string | null;
  team: { name: string; role: string; bio: string }[];
  credentials: string[];
} = {
  story: null,
  team: [],
  credentials: [],
};
