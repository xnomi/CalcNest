import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-muted/20 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} CalcNest. All rights reserved.
          <p className="mt-1">Free online calculators for everyone.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/bmi-calculator" className="hover:text-accent">BMI</Link>
          <Link href="/emi-calculator" className="hover:text-accent">EMI</Link>
          <Link href="/percentage-calculator" className="hover:text-accent">Percentage</Link>
        </div>
      </div>
    </footer>
  );
}
