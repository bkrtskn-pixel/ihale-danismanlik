// Paylaşım görseli (Open Graph), apple-touch-icon ve favicon.ico üretir.
// Marka adı veya logo değiştiğinde çalıştırın:  npm run images
// Not: Node.js 22.18+ TypeScript dosyalarını doğrudan çalıştırabilir.
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { site } from '../src/data/site.ts';

const root = new URL('../public/', import.meta.url);
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const mark = (await readFile(new URL('favicon.svg', root), 'utf8'))
  .replace(/^<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '');

// --- Open Graph 1200×630 ---------------------------------------------------
const grid = Array.from({ length: 26 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="630"/>`).join('') +
  Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1200" y2="${i * 48}"/>`).join('');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#10243A"/>
  <g stroke="#FFFFFF" stroke-opacity=".05">${grid}</g>
  <circle cx="1040" cy="300" r="250" fill="none" stroke="#FFFFFF" stroke-opacity=".08"/>
  <circle cx="1040" cy="300" r="170" fill="none" stroke="#C4A46A" stroke-opacity=".4"/>
  <line x1="1040" y1="20" x2="1040" y2="610" stroke="#C4A46A" stroke-opacity=".5" stroke-dasharray="14 6 3 6"/>
  <rect x="79.5" y="79.5" width="65" height="65" rx="6" fill="none" stroke="#FFFFFF" stroke-opacity=".22"/>
  <g transform="translate(80 80) scale(1.6)">${mark}</g>
  <text x="160" y="112" font-family="Inter" font-weight="700" font-size="30" fill="#FFFFFF">${esc(site.brand.wordmark.primary)} <tspan fill="#C4A46A" font-weight="500">${esc(site.brand.wordmark.secondary)}</tspan></text>
  <rect x="80" y="250" width="56" height="3" fill="#C4A46A"/>
  <text font-family="Inter" font-weight="800" font-size="62" fill="#FFFFFF" letter-spacing="-1.5">
    <tspan x="80" y="335">Kamu İhalelerinde Teknik Bilgi.</tspan>
    <tspan x="80" y="410" fill="#C4A46A">Stratejik Yaklaşım.</tspan>
  </text>
  <text x="80" y="540" font-family="Inter" font-size="24" fill="#FFFFFF" fill-opacity=".7">Yapım işi ihaleleri · Doküman inceleme · Yeterlik · Teklif · EKAP · Sözleşme</text>
</svg>`;

await mkdir(new URL('images/og/', root), { recursive: true });
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(new URL('images/og/og-default.png', root).pathname);

// --- apple-touch-icon 180×180 ---------------------------------------------
const touch = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 40 40">${mark.replace('rx="4"', 'rx="0"')}</svg>`;
await sharp(Buffer.from(touch)).png().toFile(new URL('apple-touch-icon.png', root).pathname);

// --- favicon.ico (32×32 PNG gömülü ICO) -----------------------------------
const png32 = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40">${mark}</svg>`))
  .png()
  .toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // planes
header.writeUInt16LE(32, 12); // bpp
header.writeUInt32LE(png32.length, 14); // size
header.writeUInt32LE(22, 18); // offset
await writeFile(new URL('favicon.ico', root), Buffer.concat([header, png32]));

console.log('Görseller üretildi: public/images/og/og-default.png, public/apple-touch-icon.png, public/favicon.ico');
