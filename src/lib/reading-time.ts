/** Okuma süresi (dakika). Türkçe metinler için ortalama 180 kelime/dk esas alınır. */
export function readingTime(text: string | undefined, wpm = 180): number {
  if (!text) return 1;
  const words = text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#>*_\-`[\]()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}
