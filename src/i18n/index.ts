import { en } from './translations/en.js';
import { es } from './translations/es.js';
import { pt } from './translations/pt.js';

export type Locale = 'en' | 'es' | 'pt';

export const translations: Record<Locale, typeof en> = { en, es, pt };

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

const supportedLocales: Locale[] = ['en', 'es', 'pt'];
const defaultLocale: Locale = 'en';

/**
 * Detect the best language from available sources:
 * 1. URL query param ?lang=es
 * 2. localStorage 'lang'
 * 3. Browser's navigator.language
 * 4. Fallback to 'en'
 */
export function detectLocale(): Locale {
  // 1. URL query param
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam && isLocale(langParam)) {
      localStorage.setItem('lang', langParam);
      return langParam;
    }

    // 2. localStorage
    const stored = localStorage.getItem('lang');
    if (stored && isLocale(stored)) return stored;

    // 3. Browser preference
    const browserLang = navigator.language.split('-')[0];
    if (browserLang && isLocale(browserLang)) return browserLang;
  }

  return defaultLocale;
}

function isLocale(val: string): val is Locale {
  return supportedLocales.includes(val as Locale);
}

export function t(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}
