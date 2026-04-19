import { Metadata } from 'next';
import UnitClient from './UnitClient';

export const metadata: Metadata = {
  title: 'Free Unit Converter Online — Length, Weight, Temperature & More | CalcNest',
  description: 'Convert units for length, weight, temperature, speed, area, volume, and data. Free and fast bidirectional unit converter.',
  alternates: {
    canonical: 'https://calcnest.dev/unit-converter',
  }
};

export default function UnitPage() {
  return <UnitClient />;
}
