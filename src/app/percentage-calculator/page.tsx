import { Metadata } from 'next';
import PercentageClient from './PercentageClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';
const pageUrl = `${siteUrl}/percentage-calculator`;

export const metadata: Metadata = {
  title: 'Percentage Calculator Online Free — 3 Easy Ways to Calculate % | CalcNest',
  description:
    'Free online percentage calculator. Quickly find: What is X% of Y? X is what % of Y? Percentage increase or decrease between two values. Instant results for students, teachers, and everyday math.',
  keywords: [
    'percentage calculator',
    'percent calculator online free',
    'what is X percent of Y',
    'percentage increase calculator',
    'percentage decrease calculator',
    'percentage change calculator',
    'fraction to percent',
    'percent of total calculator',
    'math percentage calculator',
    'discount calculator percentage',
    'calcnest percentage',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Free Percentage Calculator Online — 3 Ways to Calculate % | CalcNest',
    description:
      'Calculate percentages three easy ways: X% of Y, X is what % of Y, and percentage change. Free, instant, no sign-up.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Percentage Calculator Online | CalcNest',
    description: 'Calculate X% of Y, percentage change, and more. Free, instant results.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Percentage Calculator',
  description:
    'Free online percentage calculator with 3 modes: calculate what X% of Y is, find what percentage X is of Y, and calculate percentage increase or decrease.',
  url: pageUrl,
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Calculate X% of Y',
    'Find what % one number is of another',
    'Percentage increase/decrease',
    'Instant real-time results',
    'Copy result to clipboard',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Percentage Calculator', item: pageUrl },
  ],
};

export default function PercentagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PercentageClient />
    </>
  );
}
