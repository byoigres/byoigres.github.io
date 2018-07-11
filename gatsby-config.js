module.exports = {
  siteMetadata: {
    url: 'https://byoigr.es',
    title: 'Sergio Flores',
    disqusShortname: 'byoigres',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-module-local-ident-name',
      options: {
        localIdentName: 'sergio-flores-[folder]-[local]-[hash:base64:5]',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        filename: false,
      },
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
  ],
};
