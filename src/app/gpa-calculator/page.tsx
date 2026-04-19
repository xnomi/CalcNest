import { Metadata } from 'next';
import GPAClient from './GPAClient';

export const metadata: Metadata = {
  title: 'GPA Calculator Online Free — Semester & Cumulative GPA | CalcNest',
  description: 'Calculate your college or high school GPA on a 4.0 or 5.0 scale. Add multiple semesters to calculate your cumulative GPA instantly.',
  alternates: {
    canonical: 'https://calcnest.me/gpa-calculator',
  }
};

export default function GPAPage() {
  return <GPAClient />;
}
