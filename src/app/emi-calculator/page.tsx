import { Metadata } from 'next';
import EMIClient from './EMIClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';
const pageUrl = `${siteUrl}/emi-calculator`;

export const metadata: Metadata = {
  title: 'EMI Calculator Online Free | Loan EMI | CalcNest',
  description:
    'Calculate loan EMI, total interest, and repayment for home, car, or personal loans. Get a free amortization schedule and instant results.',
  keywords: [
    'EMI calculator',
    'loan EMI calculator online',
    'free EMI calculator',
    'home loan EMI calculator',
    'car loan EMI calculator',
    'personal loan EMI',
    'amortization schedule',
    'equated monthly installment',
    'mortgage calculator',
    'loan repayment calculator',
    'interest rate calculator',
    'calcnest EMI',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Free EMI Calculator Online — Loan EMI, Interest & Amortization | CalcNest',
    description:
      'Calculate monthly EMI, total interest, and view your full amortization schedule. Free loan calculator for home, car, and personal loans.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Loan EMI Calculator Online | CalcNest',
    description: 'Calculate EMI, total interest, and full amortization schedule instantly.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'EMI Calculator',
  description:
    'Free online EMI (Equated Monthly Installment) calculator for home loans, car loans, and personal loans. Includes amortization schedule and interest breakdown.',
  url: pageUrl,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Home loan, car loan, personal loan EMI calculation',
    'Total interest and total payment summary',
    'Full amortization schedule table',
    'Interactive pie chart breakdown',
    'Multiple currency support (USD, INR, EUR, GBP, PKR)',
    'Years or months tenure selection',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'EMI Calculator', item: pageUrl },
  ],
};

export default function EMIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EMIClient />
    </>
  );
}
