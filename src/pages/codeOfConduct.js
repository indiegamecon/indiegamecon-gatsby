import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CodeOfConduct = () => (
  <Layout>
    <SEO title="Code of Conduct" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "Code of Conduct" } }) {
            id
            html
          }
        }
      `}
      render={data => (
        <>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </>
      )}
    />
  </Layout>
)

export default CodeOfConduct
