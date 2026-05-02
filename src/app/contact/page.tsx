import type { Metadata } from 'next';
import ContactClient from './ContactClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export const metadata: Metadata = {
  title: 'Contact Us — CalcNest',
  description:
    'Get in touch with the CalcNest team. Report bugs, suggest new calculators, or ask us anything. We respond within 1–2 business days.',
  alternates: {
    canonical: siteUrl + '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
