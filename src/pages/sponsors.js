import { graphql, StaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Sponsors = () => (
  <Layout>
    <SEO title="Sponsors" />
    <StaticQuery
      query={graphql`
        {
          mdx(frontmatter: { title: { eq: "Sponsors" } }) {
            body
          }
        }
      `}
      render={data => (
        <>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </>
      )}
    />
  </Layout>
)

export default Sponsors
