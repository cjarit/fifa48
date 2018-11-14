module.exports = {
  siteMetadata: {
    title: 'Fifa BNK48 Fansite | ทำความรู้จัก ฟีฟ่า BNK48 ไอดอลเสียงใสที่สุดของวง',
    siteUrl: `https://www.fifabnk48.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128888836-1",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
  pathPrefix: `/src/img`,
  
}
