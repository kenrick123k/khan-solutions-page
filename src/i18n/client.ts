// Client-side i18n: handles runtime language switching via LangSwitcher.
// Server already rendered correct text — this only reacts to user-initiated
// langchange events for in-place text swapping without page reload.

import { translations } from './index.js';
import type { Locale } from './index.js';

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function applyTranslations(locale: Locale) {
  const t = translations[locale];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n');
    if (!path) return;
    const value = getNestedValue(t, path);
    if (value && typeof value === 'string') {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const path = el.getAttribute('data-i18n-placeholder');
    if (!path) return;
    const value = getNestedValue(t, path);
    if (value && typeof value === 'string') {
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = value;
    }
  });

  document.documentElement.lang = locale;
}

// React to language switcher events — server already rendered correct text
window.addEventListener('langchange', ((e: CustomEvent) => {
  applyTranslations(e.detail.lang);
}) as EventListener);
