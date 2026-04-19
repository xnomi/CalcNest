import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calcnest.me';

  const routes = [
    '',
    '/bmi-calculator',
    '/emi-calculator',
    '/percentage-calculator',
    '/age-calculator',
    '/unit-converter',
    '/gpa-calculator',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.9,
  }));
}
