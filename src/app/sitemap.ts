import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = [
    '/bmi-calculator',
    '/emi-calculator',
    '/percentage-calculator',
    '/age-calculator',
    '/unit-converter',
    '/gpa-calculator',
  ];

  const staticPages = [
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...calculators.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...staticPages.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  return sitemap;
}
