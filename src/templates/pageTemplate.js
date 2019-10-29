import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "../components/layout"

export default function Template({
  data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <Layout>
      <div className="blog-post">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
      }
    }
  }
`
