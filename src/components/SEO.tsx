import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RESORT_CONFIG } from '../config/resortConfig';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Experience peaceful stays, scenic misty mountain views, and luxury Kerala hospitality at Velvet Haven Resort, Vagamon. Book your mountain getaway today.",
  keywords = "Resort in Vagamon, Best resort in Vagamon, Luxury resort in Vagamon, Resort stay in Vagamon, Vagamon resort, Family resort in Vagamon, Couple resort in Vagamon, Stay in Vagamon Kerala",
  canonicalPath = "",
  ogImage = RESORT_CONFIG.images.hero1,
  breadcrumbs
}) => {
  const siteTitle = title ? `${title} | ${RESORT_CONFIG.name}, Vagamon` : `${RESORT_CONFIG.name} | Luxury Resort in Vagamon, Kerala`;
  const baseUrl = RESORT_CONFIG.siteUrl.replace(/\/$/, '');
  const currentUrl = `${baseUrl}${canonicalPath}`;

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": RESORT_CONFIG.name,
    "image": [
      RESORT_CONFIG.images.hero1,
      RESORT_CONFIG.images.roomMain,
      RESORT_CONFIG.images.resortPanorama
    ],
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": RESORT_CONFIG.contactPhone,
    "email": RESORT_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Velvet Haven Road",
      "addressLocality": "Vagamon",
      "addressRegion": "Kerala",
      "postalCode": RESORT_CONFIG.pinCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.6865,
      "longitude": 76.8661
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "priceRange": "₹8,500 - ₹14,500"
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.path}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={RESORT_CONFIG.name} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
