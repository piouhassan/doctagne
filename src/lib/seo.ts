import { Metadata } from 'next';

// Configuration SEO de base pour le site
export const siteConfig = {
  name: 'Doctagne',
  description: 'Plateforme de prise de rendez-vous en ligne - Trouvez des pharmacies de garde, consultez nos services médicaux et restez informé des actualités santé.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://doctagne.vercel.app',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/doctagne',
    facebook: 'https://facebook.com/doctagne',
  },
  keywords: [
    'rendez-vous médical',
    'rendez-vous',
    'soins de santé en ligne',
    'pharmacie de garde',
    'santé',
    'urgences médicales',
    'actualités santé',
    'soins de santé',
    'pharmacie',
    'médecine',
  ],
};

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};


export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url,
  keywords = siteConfig.keywords,
  noIndex = false,
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: SeoProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title: pageTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors ? authors.map(name => ({ name })) : [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || pageUrl,
    },
    openGraph: {
      title: title || siteConfig.name,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'fr_FR',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.name,
      description,
      images: [imageUrl],
      creator: '@doctagne',
      site: '@doctagne',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      // yandex: 'yandex',
      // bing: 'bing',
    },
  };
}


export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['French'],
    },
  };
}

/**
 * Génère les données structurées JSON-LD pour un article
 */
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author || siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    },
  };
}


export function generatePharmacySchema({
  name,
  description,
  image,
  address,
  phone,
  openingHours,
  url,
}: {
  name: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  openingHours: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name,
    description,
    image: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    telephone: phone,
    openingHours,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
  };
}


export function generateMedicalServiceSchema({
  name,
  description,
  provider,
  url,
}: {
  name: string;
  description: string;
  provider?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name,
    description,
    provider: {
      '@type': 'MedicalOrganization',
      name: provider || siteConfig.name,
    },
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
  };
}


export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}


export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}
