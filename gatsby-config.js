var proxy = require('http-proxy-middleware')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Indie Game Con 2019`,
    description: `Indie Game Con 2019, Eugene OR, Nov 2-3 2019`,
    author: `@mckelveygreg`,
    url: 'https://www.indiegamecon.com',
    image: '/IGC_poster.jpg',
  },
  pathPrefix: '/indiegamecon-gatsby', // for gh-pages
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-bracketed-spans',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /vectors/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appxzIMSRIukQuB1k`, // found in api docs, check the 'show api' button, and is the number '...base('YOUR_BASE ID')
            tableName: `Games`,
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            // //mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
          {
            baseId: `appxzIMSRIukQuB1k`,
            tableName: `Panels`,
          },
          {
            baseId: `appxzIMSRIukQuB1k`,
            tableName: `Sponsors`,
            mapping: { logo: `fileNode` },
          },
          {
            baseId: `appxzIMSRIukQuB1k`,
            tableName: `FAQs`,
          },
          {
            baseId: `appxzIMSRIukQuB1k`,
            tableName: `Leadership`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
}
