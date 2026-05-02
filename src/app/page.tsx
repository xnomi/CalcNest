import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import type { Metadata } from 'next';
import {
  Calculator,
  Percent,
  Calendar,
  RefreshCw,
  GraduationCap,
  Coins,
  Zap,
  Shield,
  Smartphone,
  Star,
  ChevronRight,
  Activity,
  TrendingUp,
  Lock,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export const metadata: Metadata = {
  title: 'CalcNest — Free Online Calculators: BMI, EMI, GPA, Percentage & More',
  description:
    'CalcNest offers 6 free online calculators: BMI calculator, loan EMI calculator, GPA calculator, percentage calculator, age calculator, and unit converter. Instant, accurate results — no sign-up needed.',
  keywords: [
    'free online calculator',
    'BMI calculator',
    'loan EMI calculator',
    'GPA calculator',
    'percentage calculator',
    'age calculator',
    'unit converter',
    'online calculator tools',
    'body mass index',
    'calcnest',
  ],
  alternates: {
    canonical: siteUrl + '/',
  },
  openGraph: {
    title: 'CalcNest — Free Online Calculators: BMI, EMI, GPA & More',
    description:
      'Free online calculators for BMI, loan EMI, percentage, age, unit conversion, and GPA. Instant, accurate results.',
    url: siteUrl + '/',
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcNest — Free Online Calculators',
    description: 'BMI, EMI, GPA, Percentage, Age, Unit Converter — all free, instant results.',
    images: [`${siteUrl}/og-image.png`],
  },
};

// ——— JSON-LD Schemas ———

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CalcNest',
  url: siteUrl,
  description: 'Free online calculator suite — BMI, EMI, GPA, Age, Percentage, Unit Converter.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CalcNest',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '312' },
  description:
    'Free online calculator suite featuring BMI, EMI, GPA, Age, Percentage, and Unit Converter tools.',
  url: siteUrl,
  screenshot: `${siteUrl}/og-image.png`,
};

const faqData = [
  {
    question: 'What calculators does CalcNest offer?',
    answer:
      'CalcNest offers six free online calculators: BMI Calculator (body mass index), EMI Calculator (loan equated monthly installment), Percentage Calculator, Age Calculator, Unit Converter, and GPA Calculator.',
  },
  {
    question: 'Are CalcNest calculators completely free?',
    answer:
      'Yes, every tool on CalcNest is 100% free. No account, subscription, or payment is ever required. We are supported by non-intrusive Google AdSense ads.',
  },
  {
    question: 'How accurate are the calculations?',
    answer:
      'All CalcNest tools use industry-standard, peer-reviewed formulas. Calculations happen in real-time as you type, delivering precise results instantly.',
  },
  {
    question: 'Does CalcNest work on mobile devices?',
    answer:
      'Absolutely. CalcNest is fully responsive and mobile-optimized. All calculators work seamlessly on smartphones, tablets, and desktops.',
  },
  {
    question: 'Is my data stored or shared?',
    answer:
      'No. All calculations run entirely in your browser. Your inputs are never sent to any server, stored, or shared with third parties. We respect your privacy.',
  },
  {
    question: 'Can I use CalcNest offline?',
    answer:
      'Once the page is loaded, our calculators run entirely client-side and do not require further internet requests to compute results.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

// ——— Data ———

const calculators = [
  {
    title: 'BMI Calculator',
    slug: 'bmi-calculator',
    description:
      'Check your Body Mass Index instantly. Supports metric (kg/cm) and imperial (lbs/ft) units with a visual healthy-weight range.',
    keywords: 'body mass index, healthy weight, overweight, obesity screening',
    icon: Activity,
    href: '/bmi-calculator',
    gradient: 'from-violet-500 to-indigo-500',
    bg: 'bg-accent/10',
    color: 'text-accent',
    badge: 'Health',
    badgeColor: 'bg-accent/10 text-accent',
  },
  {
    title: 'EMI Calculator',
    slug: 'emi-calculator',
    description:
      'Calculate loan EMI, total interest paid, and view a full amortization schedule. Supports home loans, car loans & personal loans.',
    keywords: 'equated monthly installment, loan EMI, amortization, home loan, car loan',
    icon: Coins,
    href: '/emi-calculator',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'bg-success/10',
    color: 'text-success',
    badge: 'Finance',
    badgeColor: 'bg-success/10 text-success',
  },
  {
    title: 'Percentage Calculator',
    slug: 'percentage-calculator',
    description:
      'Find percentages three ways: What is X% of Y? X is what % of Y? Percentage increase or decrease between two numbers.',
    keywords: 'percentage, percent calculator, increase decrease, fraction to percent',
    icon: Percent,
    href: '/percentage-calculator',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-warning/10',
    color: 'text-warning',
    badge: 'Math',
    badgeColor: 'bg-warning/10 text-warning',
  },
  {
    title: 'Age Calculator',
    slug: 'age-calculator',
    description:
      'Calculate your exact age in years, months, and days from your date of birth. Includes days until next birthday and life stats.',
    keywords: 'age calculator, date of birth, exact age, days lived, birthday countdown',
    icon: Calendar,
    href: '/age-calculator',
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-danger/10',
    color: 'text-danger',
    badge: 'Utility',
    badgeColor: 'bg-danger/10 text-danger',
  },
  {
    title: 'Unit Converter',
    slug: 'unit-converter',
    description:
      'Convert between 7 categories: length, weight, temperature, area, volume, speed, and digital data. Bidirectional & instant.',
    keywords: 'unit converter, length converter, weight converter, temperature converter, km to miles',
    icon: RefreshCw,
    href: '/unit-converter',
    gradient: 'from-cyan-500 to-sky-500',
    bg: 'bg-accent2/10',
    color: 'text-accent2',
    badge: 'Conversion',
    badgeColor: 'bg-accent2/10 text-accent2',
  },
  {
    title: 'GPA Calculator',
    slug: 'gpa-calculator',
    description:
      'Calculate semester and cumulative GPA on 4.0 or 5.0 scales. Add multiple courses with grades and credit hours.',
    keywords: 'GPA calculator, CGPA, semester GPA, college GPA, 4.0 scale, academic GPA',
    icon: GraduationCap,
    href: '/gpa-calculator',
    gradient: 'from-purple-500 to-violet-500',
    bg: 'bg-accent/10',
    color: 'text-accent',
    badge: 'Academic',
    badgeColor: 'bg-accent/10 text-accent',
  },
];

const stats = [
  { label: 'Monthly Users', value: '50K+', icon: TrendingUp, color: 'text-accent' },
  { label: 'Tools Available', value: '6', icon: Calculator, color: 'text-success' },
  { label: 'Sign-up Required', value: 'Zero', icon: Lock, color: 'text-warning' },
  { label: 'User Rating', value: '4.8★', icon: Star, color: 'text-danger' },
];

const features = [
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Real-time calculations as you type — no page reloads or waiting.',
    color: 'text-warning',
    bg: 'bg-warning/10',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'All inputs stay in your browser. We never store or send your data.',
    color: 'text-success',
    bg: 'bg-success/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Seamless experience on phones, tablets, and desktop screens.',
    color: 'text-accent2',
    bg: 'bg-accent2/10',
  },
  {
    icon: Star,
    title: 'Trusted & Accurate',
    description: 'Built on industry-standard formulas trusted by thousands daily.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen flex flex-col bg-bg text-text">
        <Header />

        <main className="flex-grow">





          {/* ——— CALCULATOR GRID ——— */}
          <section
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            aria-label="Available free online calculators"
          >
            <div className="text-center mb-12">
              <div className="section-badge mx-auto w-fit mb-4">
                <Zap className="w-3.5 h-3.5" />
                All Tools
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-text mb-4">
                Pick Your Calculator
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Every tool is purpose-built for accuracy, speed, and ease of use. No clutter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calc) => {
                const Icon = calc.icon;
                return (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    className="group block"
                    aria-label={`Open ${calc.title} — ${calc.description}`}
                  >
                    <article
                      className="card h-full flex flex-col p-7"
                      itemScope
                      itemType="https://schema.org/SoftwareApplication"
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className={`w-14 h-14 rounded-2xl ${calc.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`w-7 h-7 ${calc.color}`} aria-hidden="true" />
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${calc.badgeColor}`}
                        >
                          {calc.badge}
                        </span>
                      </div>

                      <h3
                        className="text-xl font-heading font-bold text-text mb-2"
                        itemProp="name"
                      >
                        {calc.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed flex-grow" itemProp="description">
                        {calc.description}
                      </p>
                      <p className="sr-only" itemProp="keywords">{calc.keywords}</p>

                      <div className="mt-5 flex items-center gap-1.5 font-semibold text-sm text-accent group-hover:gap-3 transition-all duration-200">
                        Open Calculator
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* ——— AD SLOT — Below Calculator Grid ——— */}
          <div className="max-w-5xl mx-auto px-4 pb-6">
            <AdSlot slot="LEADERBOARD_SLOT_ID" format="leaderboard" label="Advertisement" />
          </div>

          {/* ——— WHY CALCNEST ——— */}
          <section
            className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
            style={{ background: 'var(--surface)' }}
            aria-label="Why choose CalcNest"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <div className="section-badge mx-auto w-fit mb-4">
                  <Star className="w-3.5 h-3.5" />
                  Why CalcNest
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-text mb-4">
                  Built for Everyone, Every Day
                </h2>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                  CalcNest was designed for real people who need fast, reliable answers without the clutter or sign-up walls.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="p-7 rounded-2xl border border-border text-center"
                      style={{ background: 'var(--bg)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mx-auto mb-5`}
                      >
                        <Icon className={`w-7 h-7 ${feat.color}`} aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-text mb-2">{feat.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{feat.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Extended about paragraph */}
              <div className="mt-16 max-w-3xl mx-auto text-center">
                <p className="text-muted text-lg leading-relaxed mb-4">
                  Whether you&apos;re checking your body weight health, planning a home loan, converting
                  units for a school project, or computing your semester GPA — CalcNest gives you
                  instant answers in seconds.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  Every calculator runs entirely in your browser, meaning{' '}
                  <strong className="text-text">your data never leaves your device</strong>. No accounts,
                  no stored data, no complicated steps — just enter values and get your answer.
                </p>
              </div>
            </div>
          </section>

          {/* ——— FAQ ——— */}
          <section
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
            aria-label="Frequently Asked Questions about CalcNest calculators"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-text mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted">Everything you need to know about CalcNest.</p>
            </div>

            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-border overflow-hidden"
                  style={{ background: 'var(--surface)' }}
                >
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-text list-none gap-4 hover:bg-surface2 transition-colors">
                    <span className="text-base">{faq.question}</span>
                    <span
                      className="faq-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg leading-none"
                      style={{ background: 'var(--gradient-accent)', minWidth: 28 }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 pt-4 text-muted leading-relaxed border-t border-border">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ——— CTA Banner ——— */}
          <section className="py-14 px-4 sm:px-6 lg:px-8" aria-label="Call to action">
            <div
              className="max-w-4xl mx-auto rounded-3xl p-10 text-center text-white relative overflow-hidden"
              style={{ background: 'var(--gradient-cta)' }}
            >
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-4">
                  Ready to Calculate?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Jump into any of our six free tools. No account, no fees, no nonsense.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/bmi-calculator"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white font-bold rounded-xl text-accent hover:bg-white/90 transition-colors text-sm shadow-lg"
                  >
                    <Activity className="w-4 h-4" /> BMI Calculator
                  </Link>
                  <Link
                    href="/emi-calculator"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 font-bold rounded-xl text-white border border-white/30 hover:bg-white/25 transition-colors text-sm"
                  >
                    <Coins className="w-4 h-4" /> EMI Calculator
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
