/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.acharyanikhilshastri.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/dashboard/*'],
  transform: async (configPath, path) => {
    if (path.startsWith('/horoscope/daily/')) return { loc: path, changefreq: 'daily', priority: 0.9 };
    return { loc: path, changefreq: 'weekly', priority: 0.7 };
  },
  additionalPaths: async (configPath) => {
    const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
    const dates = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d.toISOString().split('T')[0]);
    }
    return signs.flatMap(sign => dates.map(date => ({
      loc: `/horoscope/daily/${sign}/${date}`,
      changefreq: 'daily',
      priority: 0.9
    })));
  }
};

export default config;
