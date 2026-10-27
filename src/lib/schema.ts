// JSON-LD yapılandırılmış veri yardımcıları.
import { site } from '@/data/site';
import { absoluteUrl, asset, href } from '@/lib/paths';

export function organizationSchema(siteUrl: URL | undefined) {
  const { phone, email, address } = site.contact;
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@type': 'ProfessionalService',
    '@id': `${absoluteUrl(href('/'), siteUrl)}#organization`,
    name: site.brand.name,
    description: site.description,
    url: absoluteUrl(href('/'), siteUrl),
    logo: absoluteUrl(asset(site.brand.logoPath), siteUrl),
    image: absoluteUrl(asset('images/og/og-default.png'), siteUrl),
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    knowsLanguage: 'tr',
    ...(phone ? { telephone: phone } : {}),
    ...(email ? { email } : {}),
    ...(address ? { address: { '@type': 'PostalAddress', streetAddress: address, addressCountry: 'TR' } } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(siteUrl: URL | undefined) {
  return {
    '@type': 'WebSite',
    '@id': `${absoluteUrl(href('/'), siteUrl)}#website`,
    name: site.brand.name,
    url: absoluteUrl(href('/'), siteUrl),
    inLanguage: 'tr-TR',
    publisher: { '@id': `${absoluteUrl(href('/'), siteUrl)}#organization` },
  };
}

export interface Crumb {
  label: string;
  path: string;
}

export function breadcrumbSchema(items: Crumb[], siteUrl: URL | undefined) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: absoluteUrl(href(item.path), siteUrl),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export const withContext = (...graph: Record<string, unknown>[]) => ({
  '@context': 'https://schema.org',
  '@graph': graph,
});
