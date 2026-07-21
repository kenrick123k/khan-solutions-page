// Professional SVG icon set. Each returns a string of SVG markup.
// Designed to be used with `set:html` in Astro components.

export const Icons = {
  logo: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="currentColor" fill-opacity="0.08"/><path d="M12 26V14l8 6-8 6z" fill="currentColor"/><path d="M20 14l8 6-8 6V14z" fill="currentColor" fill-opacity="0.65"/></svg>`,

  chevronRight: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l8 6-8 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  chevronDown: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  arrowRight: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M2 7l9 7a2 2 0 002.4 0L22 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

  check: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,

  send: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 2L10 10M18 2l-6 16-2-7-5-3L18 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  // Feature icons — clean geometric line style
  inventory: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" stroke-width="2"/><path d="M4 14h24" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="21" r="2" fill="currentColor"/><circle cx="18" cy="21" r="2" fill="currentColor"/><circle cx="26" cy="21" r="2" fill="currentColor"/><path d="M10 14V6" stroke="currentColor" stroke-width="2"/><path d="M18 14V6" stroke="currentColor" stroke-width="2"/></svg>`,

  clinical: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="4" width="20" height="24" rx="4" stroke="currentColor" stroke-width="2"/><line x1="12" y1="10" x2="20" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="16" x2="20" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="22" x2="16" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="24" r="4" stroke="currentColor" stroke-width="2"/><path d="M22 24h2.5l1.5-1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  pos: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" stroke-width="2"/><path d="M4 13h24" stroke="currentColor" stroke-width="2"/><rect x="16" y="16" width="8" height="6" rx="1" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="19" r="2" fill="currentColor"/><path d="M7 7l2-3M25 7l-2-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

  analytics: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 28V16M12 28V12M20 28V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M20 18l6-8 2 4v14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="28" r="0" fill="currentColor"/></svg>`,

  realtime: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"/><path d="M16 8v8l5.5 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 4l2-2M22 4l-2-2M4 10l-2-2M4 22l-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/></svg>`,

  security: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3L5 7.5v9.5c0 8.5 5.5 16.5 11 18.5 5.5-2 11-10 11-18.5V7.5L16 3z" stroke="currentColor" stroke-width="2"/><path d="M10 16l4.5 4.5L22 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  // Loading spinner
  spinner: `<svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"/><path d="M12 2a10 10 0 019.95 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
};
