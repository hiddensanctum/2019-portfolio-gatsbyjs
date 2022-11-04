module.exports = {
  siteMetadata: {
    title: 'James Chuang',
    author: 'James Chuang',
    description: 'Portfolio Site',
    siteUrl: 'https://www.jlchuang.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'James Chuang\'s Portfolio',
        short_name: 'jlchuang',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#efb697',
        display: 'minimal-ui',
        icon: './content/assets/images/logo.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-gatsby-cloud',
  ],
};
