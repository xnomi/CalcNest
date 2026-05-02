import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export const metadata: Metadata = {
  title: 'Privacy Policy — CalcNest',
  description:
    'Learn how CalcNest collects, uses, and protects your information. Read our full privacy policy including our use of Google AdSense and Google Analytics.',
  alternates: {
    canonical: siteUrl + '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      {/* Page header */}
      <div
        className="relative overflow-hidden py-10 px-4 sm:px-6 border-b border-border"
        style={{ background: 'linear-gradient(135deg, var(--bg2) 0%, var(--bg) 100%)' }}
      >
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted">Last updated: May 2, 2025</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="prose prose-lg max-w-none space-y-8 text-text">
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">Introduction</h2>
            <p className="text-muted leading-relaxed">
              Welcome to CalcNest (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Your privacy is important to
              us. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{' '}
              <strong>calcnest.me</strong> (the &quot;Site&quot;). Please read this policy
              carefully. If you do not agree with the terms of this policy, please
              discontinue use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We may collect the following types of information when you use CalcNest:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>
                <strong className="text-text">Usage Data:</strong> Information such as
                your IP address, browser type, operating system, referring URLs, pages
                visited, and time spent on pages — collected automatically by Google
                Analytics.
              </li>
              <li>
                <strong className="text-text">Cookie Data:</strong> Cookies set by
                Google AdSense and Google Analytics to serve ads and analyze traffic
                patterns.
              </li>
              <li>
                <strong className="text-text">Calculator Inputs:</strong> Any values you
                enter into our calculators (e.g., weight, height, loan amount) are
                processed entirely in your browser and are <em>never</em> transmitted
                to our servers.
              </li>
              <li>
                <strong className="text-text">Contact Form Data:</strong> If you submit
                our contact form, we collect your name, email address, and message
                content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>To operate and maintain the CalcNest website.</li>
              <li>
                To analyze site usage and improve the user experience using Google
                Analytics.
              </li>
              <li>
                To display relevant advertisements using Google AdSense (our advertising
                partner).
              </li>
              <li>To respond to inquiries submitted through our contact form.</li>
              <li>To detect and prevent fraudulent activity or misuse of the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Cookies &amp; Tracking Technologies
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              CalcNest uses cookies — small data files stored on your device — for the
              following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>
                <strong className="text-text">Google Analytics Cookies:</strong> We use
                Google Analytics to understand how visitors interact with our Site.
                Google Analytics uses cookies to collect anonymous data such as page
                views, session duration, and user geography. You can opt out of Google
                Analytics by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong className="text-text">Google AdSense Cookies:</strong> We use
                Google AdSense to serve advertisements on our Site. Google AdSense uses
                cookies to serve ads based on a user&apos;s prior visits to this website or
                other websites. Users may opt out of personalized advertising by
                visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  Google&apos;s Ads Settings
                </a>
                .
              </li>
              <li>
                <strong className="text-text">Consent Cookie:</strong> We store a
                cookie to remember your cookie consent choice.
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              You can control and/or delete cookies through your browser settings.
              Note that disabling cookies may affect the functionality of some features
              of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Third-Party Advertisers
            </h2>
            <p className="text-muted leading-relaxed">
              CalcNest uses <strong>Google AdSense</strong> as our third-party
              advertising partner. Google, as a third-party vendor, uses cookies to
              serve ads on our Site. Google&apos;s use of advertising cookies enables it and
              its partners to serve ads to users based on their visit to our Site and/or
              other sites on the Internet. To learn more about how Google uses data when
              you use our site, visit{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                How Google uses data from sites that use our services
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Data Sharing &amp; Disclosure
            </h2>
            <p className="text-muted leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share anonymized, aggregated data (such as overall site
              traffic statistics) with our analytics provider (Google). We may disclose
              information if required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Your Rights (GDPR &amp; CCPA)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding
              your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>
                <strong className="text-text">Right to Access:</strong> Request a copy
                of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-text">Right to Deletion:</strong> Request that
                we delete your personal data.
              </li>
              <li>
                <strong className="text-text">Right to Opt-Out:</strong> California
                residents have the right to opt out of the sale of personal information.
                We do not sell personal information.
              </li>
              <li>
                <strong className="text-text">Right to Object:</strong> Object to
                processing of your personal data for direct marketing purposes.
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              To exercise any of these rights, please contact us at the information
              provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Children&apos;s Privacy
            </h2>
            <p className="text-muted leading-relaxed">
              CalcNest is not directed to children under the age of 13. We do not
              knowingly collect personal information from children under 13. If you
              believe we have inadvertently collected such information, please contact
              us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-muted leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Changes
              will be reflected on this page with an updated &quot;Last updated&quot; date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-3">Contact Us</h2>
            <p className="text-muted leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <ul className="list-none mt-3 space-y-1 text-muted">
              <li>
                <strong className="text-text">Website:</strong>{' '}
                <a href="/contact" className="text-accent underline">
                  calcnest.me/contact
                </a>
              </li>
              <li>
                <strong className="text-text">Email:</strong> privacy@calcnest.me
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
