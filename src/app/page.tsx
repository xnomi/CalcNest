import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calculator, Percent, Calendar, RefreshCw, GraduationCap, Coins } from 'lucide-react';

export const metadata = {
  title: "CalcNest — Free Online Calculators: BMI, EMI, Age, GPA & Unit Converter",
  description: "Free online calculators for your everyday needs. Calculate BMI, loan EMI, percentages, age, convert units, and GPA instantly.",
  alternates: {
    canonical: 'https://calcnest.dev/',
  }
};

const calculators = [
  {
    title: 'BMI Calculator',
    description: 'Check your Body Mass Index and healthy weight range.',
    icon: <Calculator className="w-8 h-8 text-accent" />,
    href: '/bmi-calculator',
    color: 'bg-accent/10',
  },
  {
    title: 'EMI Calculator',
    description: 'Calculate loan EMI, interest, and view amortization schedule.',
    icon: <Coins className="w-8 h-8 text-success" />,
    href: '/emi-calculator',
    color: 'bg-success/10',
  },
  {
    title: 'Percentage Calculator',
    description: 'Find percentages, increases, decreases, and fractions easily.',
    icon: <Percent className="w-8 h-8 text-warning" />,
    href: '/percentage-calculator',
    color: 'bg-warning/10',
  },
  {
    title: 'Age Calculator',
    description: 'Calculate exact age in years, months, and days from DOB.',
    icon: <Calendar className="w-8 h-8 text-danger" />,
    href: '/age-calculator',
    color: 'bg-danger/10',
  },
  {
    title: 'Unit Converter',
    description: 'Convert length, weight, temperature, area, volume, speed, data.',
    icon: <RefreshCw className="w-8 h-8 text-accent2" />,
    href: '/unit-converter',
    color: 'bg-accent2/10',
  },
  {
    title: 'GPA Calculator',
    description: 'Calculate your semester and cumulative GPA on 4.0 or 5.0 scale.',
    icon: <GraduationCap className="w-8 h-8 text-accent" />,
    href: '/gpa-calculator',
    color: 'bg-accent/10',
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-text tracking-tight mb-6">
            Every Calculator You Need<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
              Free, Fast, Accurate
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-muted mx-auto mb-10">
            BMI, EMI, Percentage, Age, Unit Converter, GPA. All in one place. No ads cluttering results, instant answers, and mobile-friendly.
          </p>
        </section>

        {/* Calculators Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calculators.map((calc, idx) => (
              <Link key={idx} href={calc.href} className="group block h-full">
                <div className="bg-surface rounded-2xl p-8 border border-muted/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl ${calc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {calc.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-text mb-3">{calc.title}</h3>
                  <p className="text-muted flex-grow">{calc.description}</p>
                  <div className="mt-6 flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                    Calculate Now <span className="ml-2">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why CalcNest */}
        <section className="py-20 bg-surface mt-12 border-t border-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-12">Why CalcNest?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">100% Free & No Ads</h4>
                <p className="text-muted">Enjoy a clean, distraction-free experience without annoying popups or banners.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Instant Results</h4>
                <p className="text-muted">No page reloads. Everything calculates instantly as you type.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Mobile Optimized</h4>
                <p className="text-muted">Designed to work flawlessly on your phone, tablet, and desktop.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
