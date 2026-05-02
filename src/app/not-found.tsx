import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '404 — Page Not Found | CalcNest',
  description: 'The page you are looking for could not be found. Return to CalcNest for free online calculators.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <p className="text-8xl font-heading font-extrabold text-accent/20 mb-4">404</p>
          <h1 className="text-3xl font-heading font-bold text-text mb-4">
            Page Not Found
          </h1>
          <p className="text-muted text-lg mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors"
          >
            Back to Home
          </Link>
          <p className="mt-6 text-sm text-muted">
            Or try one of our calculators:{' '}
            <Link href="/bmi-calculator" className="text-accent hover:underline">BMI</Link>,{' '}
            <Link href="/emi-calculator" className="text-accent hover:underline">EMI</Link>,{' '}
            <Link href="/gpa-calculator" className="text-accent hover:underline">GPA</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
