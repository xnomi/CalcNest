import { Metadata } from 'next';
import AgeClient from './AgeClient';

export const metadata: Metadata = {
  title: 'Age Calculator Online — Calculate Exact Age in Years, Months, Days | CalcNest',
  description: 'Calculate your exact age in years, months, and days. Discover fun facts like how many hours you have lived and days until your next birthday.',
  alternates: {
    canonical: 'https://calcnest.dev/age-calculator',
  }
};

export default function AgePage() {
  return <AgeClient />;
}
