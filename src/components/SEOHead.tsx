import { Helmet } from 'react-helmet-async';
import { getSiteUrl, siteConfig } from '@/lib/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  jsonLd?: object | object[];
  noIndex?: boolean;
}

export function SEOHead({
  title,
  description,
  path = '',
  ogImage,
  jsonLd,
  noIndex = false,
}: SEOHeadProps) {
  const siteUrl = getSiteUrl();
  const fullTitle = title ? `${title} | ${siteConfig.author}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const canonicalUrl = `${siteUrl}${path}`;
  const ogImageUrl = ogImage 
    ? `${siteUrl}${ogImage}` 
    : `${siteUrl}${siteConfig.defaultOgImage}`;

  const jsonLdArray = jsonLd 
    ? Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImageUrl} />
      <meta property="twitter:creator" content={siteConfig.twitterHandle} />
      
      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}

export default SEOHead;
