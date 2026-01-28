// SEO utilities for structured data (JSON-LD)
// Safe to add - does not conflict with existing metadata

import type { PageData } from './content';

const SITE_NAME = 'Oraciones por los estudios';
const SITE_DESCRIPTION = 'Oraciones y reflexiones para estudiantes, exámenes y momentos de estudio con fe, calma y confianza.';

export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://oracion-estudios-site.vercel.app';
}

// WebSite schema for homepage
export function generateWebSiteSchema() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: baseUrl,
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Organization schema
export function generateOrganizationSchema() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    sameAs: [
      'https://www.jesuscontigo.org/',
    ],
  };
}

// BreadcrumbList schema for article pages
export function generateBreadcrumbSchema(page: PageData) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.category.charAt(0).toUpperCase() + page.category.slice(1),
        item: `${baseUrl}/?category=${page.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.title,
        item: `${baseUrl}/${page.slug}`,
      },
    ],
  };
}

// Article schema for prayer pages
export function generateArticleSchema(page: PageData) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.metaDescription,
    keywords: page.keywords.join(', '),
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
    inLanguage: 'es',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${page.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: baseUrl,
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

// Combined schema for homepage
export function generateHomePageSchema() {
  return [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
  ];
}

// Combined schema for article pages
export function generateArticlePageSchema(page: PageData) {
  if (page.category === 'legal') {
    // Legal pages get simpler schema
    return [generateWebSiteSchema()];
  }
  return [
    generateArticleSchema(page),
    generateBreadcrumbSchema(page),
  ];
}
