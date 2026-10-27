import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Bilgi Merkezi makaleleri: src/content/articles/*.md
// Not: Makalelerde doğrulanmamış tarih veya yazar bilgisi kullanılmaz.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    /** SEO meta açıklaması */
    description: z.string().max(170),
    /** Makale başında ve kartlarda gösterilen özet */
    summary: z.string(),
    /** İlgili hizmetin slug değeri (src/data/services.ts) */
    relatedService: z.string(),
    /** Listeleme sırası */
    order: z.number().int(),
    /** Kapak kompozisyonu varyantı */
    cover: z.enum(['document', 'certificate', 'network']),
    /** Makalede yönlendirilen resmî kaynaklar */
    sources: z.array(z.object({ label: z.string(), url: z.url() })).min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
