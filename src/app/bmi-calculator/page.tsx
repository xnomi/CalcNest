import { Metadata } from 'next';
import BMIClient from './BMIClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';
const pageUrl = `${siteUrl}/bmi-calculator`;

export const metadata: Metadata = {
  title: 'BMI Calculator Online Free — Body Mass Index Calculator | CalcNest',
  description:
    'Calculate your Body Mass Index (BMI) instantly with our free online BMI calculator. Supports metric (kg/cm) and imperial (lbs/ft) units. Find your healthy weight range, BMI category (underweight, normal, overweight, obese), and more.',
  keywords: [
    'BMI calculator',
    'body mass index calculator',
    'free BMI calculator online',
    'BMI calculator kg cm',
    'BMI calculator lbs feet',
    'healthy weight calculator',
    'overweight BMI',
    'obesity BMI',
    'BMI chart adult',
    'ideal body weight calculator',
    'calcnest BMI',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Free BMI Calculator Online — Check Your Body Mass Index | CalcNest',
    description:
      'Calculate your BMI instantly. Free online tool for checking your healthy weight range with metric and imperial support.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free BMI Calculator Online | CalcNest',
    description: 'Check your Body Mass Index instantly. Free, accurate, and mobile-friendly.',
    images: [`${siteUrl}/og-image.png`],
  },
};

// Rich structured data for this tool
const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'BMI Calculator',
  description:
    'Free online BMI (Body Mass Index) calculator. Enter your height and weight to calculate your BMI and find your healthy weight range.',
  url: pageUrl,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Metric and Imperial units support',
    'Instant real-time calculation',
    'BMI category classification',
    'Healthy weight range display',
    'Mobile-friendly interface',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'BMI Calculator', item: pageUrl },
  ],
};

export default function BMIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BMIClient />
    </>
  );
}
