import { Metadata } from 'next';
import UnitClient from './UnitClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';
const pageUrl = `${siteUrl}/unit-converter`;

export const metadata: Metadata = {
  title: 'Unit Converter Online Free | Length, Weight & More | CalcNest',
  description:
    'Convert length, weight, temperature, area, volume, speed, and digital data units instantly. Free bidirectional converter with metric and imperial units.',
  keywords: [
    'unit converter online free',
    'length converter',
    'weight converter',
    'temperature converter',
    'km to miles converter',
    'kg to lbs converter',
    'celsius to fahrenheit',
    'speed converter',
    'area converter',
    'volume converter',
    'digital data converter',
    'metric to imperial',
    'unit calculator',
    'calcnest unit converter',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Free Unit Converter Online — Length, Weight, Temperature & More | CalcNest',
    description:
      'Convert between 7 unit categories: length, weight, temperature, area, volume, speed, and digital data. Free, instant, no sign-up.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Unit Converter Online | CalcNest',
    description: 'Convert length, weight, temperature, speed & more. Instant bidirectional results.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Unit Converter',
  description:
    'Free online unit converter supporting length, weight, temperature, area, volume, speed, and digital data conversions.',
  url: pageUrl,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Length conversion (km, miles, feet, inches, cm, meters)',
    'Weight conversion (kg, lbs, oz, grams, tonnes)',
    'Temperature conversion (Celsius, Fahrenheit, Kelvin)',
    'Area conversion (m², ft², acres, hectares)',
    'Volume conversion (liters, gallons, ml, cubic feet)',
    'Speed conversion (km/h, mph, m/s, knots)',
    'Digital data conversion (bytes, KB, MB, GB, TB)',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Unit Converter', item: pageUrl },
  ],
};

export default function UnitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <UnitClient />
    </>
  );
}
