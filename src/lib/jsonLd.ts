import { getSiteUrl, siteConfig } from './siteConfig';

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  author: PersonSchema;
}

export interface PersonSchema {
  '@context'?: string;
  '@type': string;
  name: string;
  url?: string;
  jobTitle?: string;
  email?: string;
  sameAs?: string[];
}

export interface CreativeWorkSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string;
  author: PersonSchema;
  datePublished?: string;
}

export function generatePersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: getSiteUrl(),
    jobTitle: 'UX Designer',
    email: siteConfig.email,
    sameAs: [
      'https://linkedin.com/in/ezapata',
    ],
  };
}

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: getSiteUrl(),
    description: siteConfig.description,
    author: generatePersonSchema(),
  };
}

export function generateCreativeWorkSchema(
  name: string,
  description: string,
  path: string,
  image?: string
): CreativeWorkSchema {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url: `${siteUrl}${path}`,
    image: image ? `${siteUrl}${image}` : undefined,
    author: generatePersonSchema(),
  };
}
