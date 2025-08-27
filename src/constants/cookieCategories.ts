// src/constants/cookieCategories.ts
export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookieDef {
  key: CookieCategory;
  label: string;
  description: string;
  required: boolean;
}

export const COOKIE_CATEGORIES: ReadonlyArray<CookieDef> = [
  {
    key: 'necessary',
    label: 'Cookie-uri esențiale',
    description: 'Necesare pentru funcționarea corectă a site-ului',
    required: true,
  },
  {
    key: 'analytics',
    label: 'Analytics',
    description: 'Statistici anonime privind utilizarea aplicației',
    required: false,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    description: 'Personalizare reclame și tracking',
    required: false,
  },
] as const;
