import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export const metadata: Metadata = {
  title: 'Disclaimer — CalcNest',
  description:
    'Read the CalcNest disclaimer for health, financial, academic, and general calculation results.',
  alternates: { canonical: `${siteUrl}/disclaimer` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'CalcNest Disclaimer',
  url: `${siteUrl}/disclaimer`,
  description: 'Important limitations and intended use of CalcNest calculator results.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <h1 className="text-4xl font-heading font-bold text-accent mb-4">Disclaimer</h1>
        <p className="text-muted text-lg mb-8">
          CalcNest provides free calculation tools for general informational and educational use.
        </p>
        <div className="space-y-8 text-text">
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">Not Professional Advice</h2>
            <p className="text-muted leading-relaxed">
              Calculator results are estimates and are not medical, financial, legal, academic, or other professional advice. Consult a qualified professional before making decisions based on a result.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">Accuracy and Availability</h2>
            <p className="text-muted leading-relaxed">
              We work to keep our formulas accurate, but we do not guarantee that every result is complete, current, error-free, or suitable for a particular purpose. You are responsible for checking inputs and independently confirming important results.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">Health and Finance</h2>
            <p className="text-muted leading-relaxed">
              BMI results are screening estimates and do not diagnose health conditions. EMI results are illustrative estimates and may not include lender fees, taxes, insurance, or changing rates.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
