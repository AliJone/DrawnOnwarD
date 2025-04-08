
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  keywords?: string;
  image?: string;
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'DrawnOnwarD - Professional Software Development Agency',
  description = 'DrawnOnwarD is a leading software development agency specializing in custom web development, mobile apps, real estate websites, and UI/UX design services.',
  canonical = 'https://www.drawnonward.org/',
  type = 'website',
  keywords = 'software development agency, custom web development, real estate website development, mobile app development company, UI/UX design services',
  image = 'https://www.drawnonward.org/og-image.png',
  structuredData,
}) => {
  const site = 'DrawnOnwarD';
  const fullTitle = title.includes(site) ? title : `${title} | ${site}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
