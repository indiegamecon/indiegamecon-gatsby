import { graphql, StaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Schedule = () => (
  <Layout>
    <SEO title="Schedule" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          mdx(frontmatter: { title: { eq: "schedule" } }) {
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

export default Schedule
