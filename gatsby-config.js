module.exports = {
  siteMetadata: {
    title: `Sergio Flores`,
    description: `Sergio Flores personal homepage`,
    author: `@byoigres`,
    siteUrl: "https://byoigr.es",
    contact: {
      twitter: {
        icon: 'FaTwitter',
        link: "http://t.co/byoigres"
      },
      linkedin: {
        icon: 'FaLinkedinIn',
        link: "https://www.linkedin.com/in/byoigres"
      },
      github: {
        icon: 'FaGithub',
        link: "https://www.github.com/byoigres"
      },
      email: {
        icon: 'FaEnvelope',
        link: "sergio@byoigr.es"
      }
    },
    disqusShortname: "byoigres",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Changa+One',
          },
          {
            family: 'Libre+Baskerville',
          },
          {
            family: 'Open+Sans',
            variants: [
              '400',
              '700'
            ]
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
