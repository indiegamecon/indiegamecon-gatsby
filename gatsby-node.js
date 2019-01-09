const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    // console.log(result.data.allMarkdownRemark.edges)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (!node.frontmatter.path) return
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}