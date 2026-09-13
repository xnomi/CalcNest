import { Metadata } from 'next';
import AgeClient from './AgeClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';
const pageUrl = `${siteUrl}/age-calculator`;

export const metadata: Metadata = {
  title: 'Age Calculator Online Free | Exact Age | CalcNest',
  description:
    'Find your exact age in years, months, and days from your date of birth. See days until your next birthday with this free online calculator.',
  keywords: [
    'age calculator',
    'age calculator online free',
    'calculate exact age',
    'date of birth age calculator',
    'how old am I calculator',
    'days until birthday',
    'age in days calculator',
    'age in years months days',
    'exact age from birth date',
    'birthday age calculator',
    'calcnest age',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Free Age Calculator Online — Exact Age in Years, Months & Days | CalcNest',
    description:
      'Calculate your exact age from your date of birth. Includes fun facts like hours lived and days until your next birthday.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Age Calculator Online | CalcNest',
    description: 'Find your exact age in years, months, and days. Days until birthday included.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Calculator',
  description:
    'Free online age calculator. Enter date of birth to get exact age in years, months, and days, plus fun stats like total hours lived and days until next birthday.',
  url: pageUrl,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Exact age in years, months, and days',
    'Total weeks, hours, and minutes lived',
    'Days until next birthday',
    'Supports any historical date',
    'Instant real-time result',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Age Calculator', item: pageUrl },
  ],
};

export default function AgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AgeClient />
    </>
  );
}
