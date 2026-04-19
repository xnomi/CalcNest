import { Metadata } from 'next';
import PercentageClient from './PercentageClient';

export const metadata: Metadata = {
  title: 'Percentage Calculator Online Free — 3 Easy Ways to Calculate % | CalcNest',
  description: 'Free online percentage calculator. Quickly calculate what is X% of Y, X is what % of Y, and percentage change (increase/decrease).',
  alternates: {
    canonical: 'https://calcnest.me/percentage-calculator',
  }
};

export default function PercentagePage() {
  return <PercentageClient />;
}
