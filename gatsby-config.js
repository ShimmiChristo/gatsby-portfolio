/**
 This is the main configuration file for a Gatsby site. This is where you can specify 
 information about your site (metadata) like the site title and description, 
 which Gatsby plugins you’d like to include, etc. 
 (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
**/

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Chris`,
    footer: 'Portfolio Page - Created with GatsbyJS'
  },
  plugins: [
    {
      start_url: `/portfolio`,
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-transformer-remark`,
    'gatsby-transformer-javascript-frontmatter',
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
  ],
}

