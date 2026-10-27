import type { APIRoute } from 'astro';
import { site } from '@/data/site';

// Not: GitHub Pages proje sitelerinde (kullanici.github.io/depo-adi/) arama
// motorları yalnızca alan adının kökündeki robots.txt dosyasını okur. Bu dosya,
// site kendi alan adına veya kök dizine taşındığında doğrudan geçerli olur.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}sitemap-index.xml`, siteUrl).href;
  const body = site.prototype.noindex
    ? `# Prototip aşaması: dizine ekleme kapalı (src/data/site.ts → prototype.noindex)\nUser-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
