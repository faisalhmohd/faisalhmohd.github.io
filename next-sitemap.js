/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://faisalhmohd.github.io/notes',
  generateRobotsTxt: true,
  async additionalPaths(config) {
    return [await config.transform(config, '/spec')];
  }
};
