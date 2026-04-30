export const LOCALES = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_LABELS: Record<Locale, { native: string; iso: string; dir: 'ltr' | 'rtl' }> = {
  fr: { native: 'Français', iso: 'FR', dir: 'ltr' },
  en: { native: 'English', iso: 'EN', dir: 'ltr' },
  ar: { native: 'العربية', iso: 'ع', dir: 'rtl' },
};

export const LOCALE_HTML: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  ar: 'ar',
};

/** Returns "/" for fr, "/en/" for en, "/ar/" for ar (with trailing slash). */
export function localeBasePath(lang: Locale): string {
  return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
}

/** Build a localized internal path. e.g. localizedPath('/mentions-legales', 'en') → '/en/mentions-legales' */
export function localizedPath(path: string, lang: Locale): string {
  const clean = path.replace(/^\/+/, '');
  if (lang === DEFAULT_LOCALE) return '/' + clean;
  return `/${lang}/${clean}`;
}

/** Reads the locale from an URL pathname. Defaults to 'fr'. */
export function detectLocale(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

/**
 * For the current path, return the equivalent path in the target locale.
 * Example : on "/en/mentions-legales", localizedTwin('ar') → "/ar/mentions-legales"
 *           on "/", localizedTwin('en') → "/en/"
 */
export function localizedTwin(currentPath: string, targetLang: Locale): string {
  const segs = currentPath.split('/').filter(Boolean);
  const first = segs[0];
  const stripped = (LOCALES as readonly string[]).includes(first)
    ? '/' + segs.slice(1).join('/')
    : currentPath;
  const tail = stripped === '' ? '/' : stripped;
  if (targetLang === DEFAULT_LOCALE) {
    return tail || '/';
  }
  return `/${targetLang}${tail === '/' ? '' : tail}`;
}

/** LRI / PDI : Unicode markers to isolate a LTR-formatted block within RTL flow.
 * Used to keep "175 000 €" rendering left-to-right inside Arabic text. */
const LRI = '⁦';
const PDI = '⁩';

/** Format a price in EUR. Always uses the French formatting ("175 000 €")
 * for brand consistency, and wraps the result in LRI/PDI for Arabic
 * so the browser keeps the digits + currency sign in LTR order within RTL flow. */
export function formatPrice(value: number, lang: Locale): string {
  const intl = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });
  const formatted = intl.format(value);
  return lang === 'ar' ? `${LRI}${formatted}${PDI}` : formatted;
}

/** Same idea for plain-number formatting (without currency). */
export function formatNumber(value: number, lang: Locale): string {
  const formatted = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(value);
  return lang === 'ar' ? `${LRI}${formatted}${PDI}` : formatted;
}

/** Format a date (long form). Wrapped in LRI/PDI for Arabic to keep
 * digits + month name in a stable order inside RTL flow. */
export function formatDate(iso: string, lang: Locale): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const formatted = d.toLocaleDateString(LOCALE_HTML[lang] || 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return lang === 'ar' ? `${LRI}${formatted}${PDI}` : formatted;
}

/** Wraps a snippet (digits, currency, lot ref) in LRI/PDI for AR to
 * preserve LTR order inside RTL paragraphs. No-op for FR/EN. */
export function ltrIsolate(s: string, lang: Locale): string {
  return lang === 'ar' ? `${LRI}${s}${PDI}` : s;
}
