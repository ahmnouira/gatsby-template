module.exports = {
  siteMetadata: {
    title: `Innovant Website`,
    description: `Innovant is a digital transfornation accelerator specialised in providing innovative entreprise and fintech solutions and applications. We are hot on fintech, ERP, gaming, AR, web development, mobile development, UX, UI`,
    author: `@ahmnouira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // It simply turn off the Lighthouse alert.
    `gatsby-plugin-preload-link-crossorigin`,
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options hres
      },
    },
  ],
}
