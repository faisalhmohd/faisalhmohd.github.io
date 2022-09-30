/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mohdfaisal.xyz',
  generateRobotsTxt: true,
  async additionalPaths(config) {
    return [await config.transform(config, '/spec')];
  }
};
