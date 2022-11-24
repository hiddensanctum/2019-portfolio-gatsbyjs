module.exports = {
  siteMetadata: {
    title: 'James Chuang',
    author: 'James Chuang',
    description: 'Portfolio Site',
    siteUrl: 'https://www.jlchuang.com',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          breakpoints: [200, 400, 800, 1200, 1600],
          formats: ['auto', 'webp', 'jpg'],
          quality: 50,
          placeholder: 'blurred',
          backgroundColor: 'transparent',
        },
      },
    },
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
