/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://calcnest.me',
  generateRobotsTxt: false, // We use app/robots.ts
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  // Custom transform for different priorities
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('-calculator') || path.includes('converter')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/about' || path === '/contact' || path === '/privacy-policy' || path === '/terms-of-service') {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
