import { Metadata } from 'next';
import GPAClient from './GPAClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';
const pageUrl = `${siteUrl}/gpa-calculator`;

export const metadata: Metadata = {
  title: 'GPA Calculator Online Free | GPA & CGPA | CalcNest',
  description:
    'Calculate semester GPA and cumulative CGPA on 4.0 or 5.0 scales. Add courses, grades, and credit hours for fast, accurate results.',
  keywords: [
    'GPA calculator',
    'GPA calculator online free',
    'CGPA calculator',
    'cumulative GPA calculator',
    'semester GPA calculator',
    'college GPA calculator',
    'high school GPA calculator',
    '4.0 GPA scale',
    '5.0 GPA scale',
    'grade point average calculator',
    'GPA calculator with credit hours',
    'weighted GPA calculator',
    'calcnest GPA',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Free GPA Calculator Online — Semester & Cumulative CGPA | CalcNest',
    description:
      'Calculate your semester and cumulative GPA on 4.0 or 5.0 scales. Add courses, grades, and credit hours for instant results.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free GPA & CGPA Calculator Online | CalcNest',
    description: 'Calculate semester GPA and cumulative CGPA on 4.0 or 5.0 scales instantly.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'GPA Calculator',
  description:
    'Free online GPA calculator. Calculate semester GPA and cumulative CGPA on 4.0 or 5.0 scale by adding courses with grades and credit hours.',
  url: pageUrl,
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Semester GPA calculation',
    'Cumulative CGPA calculation',
    '4.0 and 5.0 GPA scale support',
    'Add multiple courses with credit hours',
    'Letter grade and GPA point conversion table',
    'Instant real-time calculation',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'GPA Calculator', item: pageUrl },
  ],
};

export default function GPAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GPAClient />
    </>
  );
}
