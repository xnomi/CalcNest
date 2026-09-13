import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import Script from 'next/script';
import { CookieConsent } from '@/components/CookieConsent';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CalcNest — Free Online Calculators: BMI, EMI, GPA, Age & More',
    template: '%s | CalcNest',
  },
  description:
    'CalcNest offers free, accurate online calculators for BMI, loan EMI, percentage, age, unit conversion, and GPA. Fast, mobile-friendly tools — no sign-up required. Get instant results now.',
  keywords: [
    'free online calculator',
    'BMI calculator online free',
    'loan EMI calculator',
    'GPA calculator online',
    'age calculator',
    'percentage calculator',
    'unit converter online',
    'body mass index calculator',
    'mortgage EMI calculator',
    'CGPA calculator',
    'health calculator',
    'math calculator',
    'calcnest',
    'free calculator tools',
    'online calculator suite',
  ],
  authors: [{ name: 'CalcNest Team', url: siteUrl }],
  creator: 'CalcNest',
  publisher: 'CalcNest',
  category: 'Technology',
  classification: 'Tools & Calculators',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'CalcNest',
    title: 'CalcNest — Free Online Calculators: BMI, EMI, GPA & More',
    description:
      'Free online calculators for BMI, loan EMI, percentage, age, unit conversion, and GPA. Fast, accurate, and mobile-friendly. No sign-up required.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CalcNest — Free Online Calculators',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcNest — Free Online Calculators: BMI, EMI, GPA & More',
    description:
      'Free online calculators for BMI, loan EMI, percentage, age, unit conversion, and GPA. Fast and mobile-friendly.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@calcnest',
    site: '@calcnest',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    ...(process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
      ? { 'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID }
      : {}),
  },
};

// Organization Schema for Google Knowledge Panel
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CalcNest',
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: 'Free online calculator suite — BMI, EMI, GPA, Age, Percentage, Unit Converter.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    url: `${siteUrl}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const adsenseId = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true'
    ? process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
    : undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="color-scheme" content="light dark" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        {/* Google AdSense */}
        {adsenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `}
            </Script>
          </>
        )}

        {/* Theme init — prevents FOUC */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var t = localStorage.getItem('calcnest-theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${nunito.variable} font-sans antialiased text-text bg-bg min-h-screen`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
