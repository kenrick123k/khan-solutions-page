// Centralized configuration — all values come from environment or defaults.
// NO hardcoded values in components.

export const CONFIG = {
  site: {
    name: 'KHAN Solutions',
    title: 'VETEK by KHAN Solutions — Veterinary Practice Management',
    description:
      'Veterinary clinic management software for multi-branch practices. Inventory, clinical records, cash register, and real-time analytics — all in one platform.',
    url: import.meta.env.SITE_URL || 'https://khan-solutions.com',
    locale: 'en_US',
    ogImage: '/og-image.png',
  },
  contact: {
    email: import.meta.env.CONTACT_EMAIL || 'administration@khan-solutions.com',
    apiUrl: import.meta.env.PUBLIC_API_URL || 'http://localhost:3100',
  },
};
