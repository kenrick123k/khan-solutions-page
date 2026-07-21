// Client-side i18n: populates [data-i18n] elements when language changes.
// This runs after page load and on langchange events.

import { translations, detectLocale, type Locale } from './index.js';

function applyTranslations(locale: Locale) {
  const t = translations[locale];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n');
    if (!path) return;
    const value = getNestedValue(t, path);
    if (value && typeof value === 'string') {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const path = el.getAttribute('data-i18n-placeholder');
    if (!path) return;
    const value = getNestedValue(t, path);
    if (value && typeof value === 'string') {
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = value;
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = locale;
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Initialize
const locale = detectLocale();
applyTranslations(locale);

// Listen for language changes from the switcher
window.addEventListener('langchange', ((e: CustomEvent) => {
  applyTranslations(e.detail.lang);
}) as EventListener);
