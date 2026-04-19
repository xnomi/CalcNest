import { Metadata } from 'next';
import EMIClient from './EMIClient';

export const metadata: Metadata = {
  title: 'Free EMI Calculator Online — Loan EMI, Interest & Amortization | CalcNest',
  description: 'Calculate your monthly EMI, total interest, and total payment for your loan. Includes a detailed amortization schedule and interactive charts.',
  alternates: {
    canonical: 'https://calcnest.me/emi-calculator',
  }
};

export default function EMIPage() {
  return <EMIClient />;
}
