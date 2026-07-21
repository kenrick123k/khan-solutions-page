export const SITE = {
  name: 'KHAN Solutions',
  title: 'KHAN',
  description:
    'Multi-tenant veterinary practice management platform with multi-branch inventory, clinical records, cash register, real-time analytics, and role-based access control. Built for modern veterinary clinics.',
  url: 'https://khan-solutions.com',
  contactEmail: 'administration@khan-solutions.com',
  locale: 'en_US',
  ogImage: '/og-image.png',
};

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  badge: 'Veterinary Practice Platform',
  headline: 'Everything Your Clinic Needs.',
  headlineAccent: 'In One Place.',
  subheadline:
    'Multi-branch inventory, clinical records, point of sale, and real-time analytics — engineered for veterinary clinics that demand precision, speed, and growth.',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'Explore Features',
};

export const FEATURES = [
  {
    icon: 'inventory',
    title: 'Multi-Branch Inventory',
    description:
      'Track stock levels across all your clinic locations in real time. Batch and lot management with expiration alerts — never lose a product again.',
  },
  {
    icon: 'clinical',
    title: 'Complete Clinical Records',
    description:
      'SOAP-style medical records. Consultations, emergencies, surgeries, hospitalizations, vaccinations, and lab results — all in one secure place.',
  },
  {
    icon: 'pos',
    title: 'Integrated Point of Sale',
    description:
      'Open and close cash registers per branch. Every sale automatically links to inventory, updating stock and financial reports instantly.',
  },
  {
    icon: 'analytics',
    title: 'Business Intelligence',
    description:
      'Revenue, COGS, gross profit, margins, ROI — with daily breakdowns and top-product rankings. Know exactly how your clinic is performing.',
  },
  {
    icon: 'realtime',
    title: 'Real-Time Across All Branches',
    description:
      'WebSocket-powered live updates. See inventory changes, sales, and clinical records as they happen — across every branch, instantly.',
  },
  {
    icon: 'security',
    title: 'Enterprise-Grade Security',
    description:
      'Role-based access control, JWT authentication, API-key gated services, and encrypted file storage. Your data stays yours.',
  },
];

export const MODULES = [
  {
    title: 'Inventory & Stock',
    tagline: 'Never lose track.',
    items: [
      'Product catalog with categories',
      'Batch & lot tracking with expiration alerts',
      'Stock entries, exits, and transfers',
      'Multi-branch real-time stock levels',
      'Automated movement type classification',
      'Dashboard alerts: expired, low stock',
    ],
  },
  {
    title: 'Cash Register',
    tagline: 'Every cent accounted for.',
    items: [
      'Open/close till per branch per shift',
      'Automatic sales-to-inventory linking',
      'Real-time accumulated amount tracking',
      'Closing difference calculation',
      'Full session audit logs',
      'Tax-inclusive movement recording',
    ],
  },
  {
    title: 'Clinical Records',
    tagline: 'Patients first.',
    items: [
      'Client & pet registry with profiles',
      'SOAP consultations with diagnosis',
      'Emergency triage & stabilization records',
      'Surgery & anesthesia documentation',
      'Hospitalization admission/discharge',
      'Vaccination & lab result tracking',
    ],
  },
  {
    title: 'Taxes & Compliance',
    tagline: 'Taxes made simple.',
    items: [
      'Configurable tax rates per tenant',
      'Time-bound tax validity periods',
      'Automatic tax calculation on movements',
      'Tax breakdowns in financial reports',
      'Historical tax rate snapshots',
      'Multi-country tax support',
    ],
  },
];

export const STATS = [
  { value: 100, suffix: '%', label: 'Real-Time' },
  { value: 4, suffix: '', label: 'Core Modules' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  { value: 256, suffix: '-bit', label: 'Encryption' },
];

export const CTA = {
  headline: 'Ready to Transform Your Clinic?',
  subheadline:
    'Join veterinary clinics already running on VETEK. Multi-branch, real-time, and built for growth.',
  buttonText: 'Contact Sales',
};
