import React from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import { AdSlot } from './AdSlot';
import { ChevronRight, Home } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CalcLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  formula?: React.ReactNode;
  faqs?: FAQ[];
  breadcrumbs?: BreadcrumbItem[];
  /** Pass the tool's ad slot IDs */
  adSlotTop?: string;
  adSlotBottom?: string;
  /** Sidebar ad */
  adSlotSide?: string;
  /** Structured data (JSON-LD) */
  schema?: object;
}

const relatedTools: Record<string, { name: string; href: string }> = {
  'BMI Calculator': { name: 'Age Calculator', href: '/age-calculator' },
  'EMI Calculator': { name: 'Percentage Calculator', href: '/percentage-calculator' },
  'Percentage Calculator': { name: 'GPA Calculator', href: '/gpa-calculator' },
  'Age Calculator': { name: 'BMI Calculator', href: '/bmi-calculator' },
  'Unit Converter': { name: 'Percentage Calculator', href: '/percentage-calculator' },
  'GPA Calculator': { name: 'EMI Calculator', href: '/emi-calculator' },
};

export default function CalcLayout({
  title,
  description,
  children,
  formula,
  faqs,
  breadcrumbs,
  adSlotTop,
  adSlotBottom,
  schema,
}: CalcLayoutProps) {
  const primaryRelatedTool = relatedTools[title];
  const secondaryRelatedTool = title === 'BMI Calculator'
    ? { name: 'Unit Converter', href: '/unit-converter' }
    : { name: 'BMI Calculator', href: '/bmi-calculator' };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />

      <main className="flex-grow w-full">
        {/* Page Header with gradient background */}
        <div
          className="relative overflow-hidden py-10 px-4 sm:px-6 border-b border-border"
          style={{ background: 'linear-gradient(135deg, var(--bg2) 0%, var(--bg) 100%)' }}
        >
          {/* Decorative bg */}
          <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-1.5 text-xs text-muted mb-4 flex-wrap"
              >
                <Link href="/" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Home className="w-3.5 h-3.5" />
                  Home
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <React.Fragment key={i}>
                    <ChevronRight className="w-3 h-3 text-muted2" />
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-accent transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-text2 font-medium">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-text mb-3">
              {title}
            </h1>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
          {/* Top Ad Slot */}
          {adSlotTop && (
            <div className="mb-6">
              <AdSlot slot={adSlotTop} format="leaderboard" label="Advertisement" />
            </div>
          )}

          {/* Main Calculator Card */}
          <div
            className="rounded-2xl p-5 sm:p-8 mb-8"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {children}
          </div>

          {/* Formula Section */}
          {formula && (
            <div className="mb-8">
              <h2 className="text-xl font-heading font-bold mb-4 text-text2 flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold text-white"
                  style={{ background: 'var(--gradient-accent)' }}
                >
                  f
                </span>
                Formula Explained
              </h2>
              <div
                className="p-6 rounded-2xl border border-border overflow-x-auto"
                style={{ background: 'var(--surface)' }}
              >
                {formula}
              </div>
            </div>
          )}

          {/* In-Article Ad between formula and FAQ */}
          {faqs && faqs.length > 0 && (
            <div className="mb-4 py-4">
              <AdSlot
                slot={adSlotBottom || 'INLINE_AD_SLOT'}
                format="in-article"
                label="Advertisement"
                style={{ minHeight: 100 }}
              />
            </div>
          )}

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-heading font-bold mb-6 text-text">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-xl border border-border overflow-hidden"
                    style={{ background: 'var(--surface)' }}
                  >
                    <summary
                      className="flex justify-between items-center p-5 cursor-pointer font-semibold text-text list-none gap-4 hover:bg-surface2 transition-colors"
                    >
                      <span className="text-base">{faq.question}</span>
                      <span
                        className="faq-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg leading-none"
                        style={{ background: 'var(--gradient-accent)', minWidth: 28 }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-muted leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Ad */}
          {adSlotBottom && (
            <div className="mt-6">
              <AdSlot slot={adSlotBottom} format="rectangle" label="Advertisement" />
            </div>
          )}

          <nav aria-label="Related calculators" className="mb-8">
            <h2 className="text-lg font-heading font-bold text-text mb-3">Related Calculators</h2>
            <div className="flex flex-wrap gap-3">
              {[primaryRelatedTool, secondaryRelatedTool].map((tool) => (
                <Link key={tool.href} href={tool.href} className="btn-secondary text-sm">
                  {tool.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Back to all tools */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted mb-3">Explore other free tools</p>
            <Link
              href="/"
              className="btn-secondary text-sm"
            >
              ← All Calculators
            </Link>
          </div>
        </div>
      </main>

      {/* JSON-LD Schema if provided */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />
      )}

      <Footer />
    </div>
  );
}
