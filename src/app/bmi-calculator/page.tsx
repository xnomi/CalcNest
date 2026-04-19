import { Metadata } from 'next';
import BMIClient from './BMIClient';

export const metadata: Metadata = {
  title: 'Free BMI Calculator Online — Check Your Body Mass Index | CalcNest',
  description: 'Calculate your Body Mass Index (BMI) instantly. Free online tool for checking your healthy weight range with a visual BMI gauge.',
  alternates: {
    canonical: 'https://calcnest.dev/bmi-calculator',
  }
};

export default function BMIPage() {
  return <BMIClient />;
}
