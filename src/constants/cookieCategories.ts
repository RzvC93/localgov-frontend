// constants/cookieCategories.ts

export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export const COOKIE_CATEGORIES: {
  key: CookieCategory;
  label: string;
  description: string;
  required: boolean;
}[] = [
  {
    key: 'necessary',
    label: 'Cookie-uri esențiale',
    description: 'Necesare pentru funcționarea corectă a site-ului',
    required: true,
  },
  {
    key: 'analytics',
    label: 'Analytics',
    description: 'Ajută la colectarea de statistici anonime privind utilizarea aplicației',
    required: false,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    description: 'Permite personalizarea reclamelor și urmărirea activității',
    required: false,
  },
];
