import { graphql, StaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Media = () => (
  <Layout>
    <SEO title="Media" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          mdx(frontmatter: { title: { eq: "media" } }) {
            body
          }
        }
      `}
      render={data => (
        <>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </>
      )}
    />{' '}
  </Layout>
)

export default Media
