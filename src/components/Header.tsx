import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="CalcNest Logo" width={32} height={32} />
          <span className="font-heading font-bold text-2xl text-accent">CalcNest</span>
        </Link>
        <nav className="hidden md:flex gap-6 font-medium text-text">
          <Link href="/bmi-calculator" className="hover:text-accent transition-colors">BMI</Link>
          <Link href="/emi-calculator" className="hover:text-accent transition-colors">EMI</Link>
          <Link href="/percentage-calculator" className="hover:text-accent transition-colors">Percentage</Link>
          <Link href="/age-calculator" className="hover:text-accent transition-colors">Age</Link>
          <Link href="/unit-converter" className="hover:text-accent transition-colors">Units</Link>
          <Link href="/gpa-calculator" className="hover:text-accent transition-colors">GPA</Link>
        </nav>
      </div>
    </header>
  );
}
