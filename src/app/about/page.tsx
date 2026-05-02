import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calculator, GraduationCap, Coins, Percent, Calendar, RefreshCw } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export const metadata: Metadata = {
  title: 'About CalcNest — Free Online Calculators for Everyone',
  description:
    'Learn about CalcNest — who we are, why we built this free calculator suite, and our commitment to accurate, privacy-first tools for BMI, EMI, GPA, and more.',
  alternates: {
    canonical: siteUrl + '/about',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About CalcNest',
  url: siteUrl + '/about',
  description:
    'CalcNest is a free online calculator suite providing accurate BMI, EMI, GPA, Age, Percentage, and Unit Converter tools for everyday use.',
  mainEntity: {
    '@type': 'Organization',
    name: 'CalcNest',
    url: siteUrl,
    description:
      'CalcNest is a free online calculator suite designed for students, professionals, and everyday users.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="min-h-screen flex flex-col bg-bg text-text">
        <Header />
        <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
          <h1 className="text-4xl font-heading font-bold text-accent mb-4">
            About CalcNest
          </h1>
          <p className="text-muted text-lg mb-10">
            Your go-to destination for free, fast, and accurate online calculators.
          </p>

          <div className="space-y-8 text-text">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-3">
                What Is CalcNest?
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                CalcNest is a free online calculator suite built for students,
                professionals, and everyday users who need quick, reliable answers. Our
                platform offers six carefully crafted tools — a BMI Calculator, EMI
                (Loan) Calculator, Percentage Calculator, Age Calculator, Unit
                Converter, and GPA Calculator — all available for free with no account
                or sign-up required.
              </p>
              <p className="text-muted leading-relaxed">
                Whether you&apos;re checking whether your weight falls within a healthy
                range, planning a home loan repayment, converting metric units for a
                school assignment, or computing your semester GPA, CalcNest delivers
                instant and accurate results in a clean, distraction-free interface.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-3">
                Why We Built CalcNest
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We noticed that most online calculators are cluttered with ads that
                make results hard to read, require sign-ups for basic features, or
                produce inaccurate results due to oversimplified formulas. We decided
                to build something better.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                CalcNest was designed from scratch with a singular focus: give users
                the most accurate calculation possible, presented as clearly as
                possible. Every formula we implement is verified against industry
                standards. Our BMI calculator uses the WHO formula, our EMI calculator
                uses the standard banking amortization formula, and our GPA calculator
                supports both 4.0 and 5.0 scales.
              </p>
              <p className="text-muted leading-relaxed">
                We believe access to accurate mathematical tools should be free and
                available to everyone, regardless of technical background or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-3">
                Our Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: <Calculator className="w-5 h-5" />, name: 'BMI Calculator', href: '/bmi-calculator', desc: 'Check your Body Mass Index and healthy weight range.' },
                  { icon: <Coins className="w-5 h-5" />, name: 'EMI Calculator', href: '/emi-calculator', desc: 'Loan EMI, interest, and amortization schedule.' },
                  { icon: <Percent className="w-5 h-5" />, name: 'Percentage Calculator', href: '/percentage-calculator', desc: 'Percentages, increases, decreases, and fractions.' },
                  { icon: <Calendar className="w-5 h-5" />, name: 'Age Calculator', href: '/age-calculator', desc: 'Exact age in years, months, and days.' },
                  { icon: <RefreshCw className="w-5 h-5" />, name: 'Unit Converter', href: '/unit-converter', desc: 'Length, weight, temperature, data, speed & more.' },
                  { icon: <GraduationCap className="w-5 h-5" />, name: 'GPA Calculator', href: '/gpa-calculator', desc: 'Semester and cumulative GPA on 4.0 or 5.0 scale.' },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-muted/10 hover:border-accent/30 hover:shadow-sm transition-all"
                  >
                    <span className="text-accent mt-0.5">{tool.icon}</span>
                    <div>
                      <p className="font-semibold text-text">{tool.name}</p>
                      <p className="text-sm text-muted">{tool.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-3">
                Privacy &amp; Data
              </h2>
              <p className="text-muted leading-relaxed">
                At CalcNest, your privacy is a priority. All calculator computations
                happen entirely within your browser — your inputs are never sent to our
                servers or stored anywhere. We use Google Analytics to understand
                aggregate site usage and Google AdSense to display advertisements that
                help keep the service free. You can review how we use your data in our{' '}
                <Link href="/privacy-policy" className="text-accent underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-3">
                Who Operates CalcNest?
              </h2>
              <p className="text-muted leading-relaxed">
                CalcNest is operated by a small independent development team passionate
                about building useful, high-quality web tools. We are committed to
                maintaining and improving the platform, adding new calculators, and
                responding to user feedback.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Have a suggestion for a new calculator or found an issue? We&apos;d love
                to hear from you —{' '}
                <Link href="/contact" className="text-accent underline">
                  get in touch with us
                </Link>
                .
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
