const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  __experimentalThemes: ['gatsby-theme-egghead-blog'],
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['Video Blogger'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        <strong>egghead</strong> is the premier place on the internet for 
        experienced developers to enhance their skills and stay current
        in the fast-faced field of web development.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      twitterUrl: config.twitter,
      githubUrl: config.github,
      linkedinUrl: config.linkedin,
      fbAppID: '',
    },
  },
}
