export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_LABELS: Record<Locale, { native: string; iso: string; dir: 'ltr' | 'rtl' }> = {
  fr: { native: 'Français', iso: 'FR', dir: 'ltr' },
  en: { native: 'English', iso: 'EN', dir: 'ltr' },
};

export const LOCALE_HTML: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
};

/** Returns "/" for fr, "/en/" for en (with trailing slash). */
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
 * Example : on "/en/mentions-legales", localizedTwin('fr') → "/mentions-legales"
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

/** Format a price in EUR with French formatting ("285 000 €") for both FR/EN. */
export function formatPrice(value: number, _lang: Locale): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

/** Plain-number formatting. */
export function formatNumber(value: number, _lang: Locale): string {
  return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(value);
}

/** Format a date (long form). */
export function formatDate(iso: string, lang: Locale): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(LOCALE_HTML[lang] || 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** No-op kept for component compatibility (Arabic was the only RTL locale). */
export function ltrIsolate(s: string, _lang: Locale): string {
  return s;
}
