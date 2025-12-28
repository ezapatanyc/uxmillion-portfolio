export const getSiteUrl = (): string => {
  if (import.meta.env.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL as string;
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return 'https://uxmillion.com';
};

export const siteConfig = {
  title: 'Emiliano Zapata | UX Designer',
  description: 'UX designer crafting intuitive digital experiences powered by empathy and data. 15+ projects delivered in Healthcare, Fintech, and E-commerce.',
  author: 'Emiliano Zapata',
  twitterHandle: '@ezapata_ux',
  email: 'ezapata.nyc@gmail.com',
  defaultOgImage: '/og/default-og.png',
};
