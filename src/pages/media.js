import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Media = () => (
  <Layout>
    <SEO title="Media" keywords={[`gatsby`, `application`, `react`]}/>
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "media" } }) {
            html
          }
        }
      `}
      render={data => (
        <>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </>
      )}
    />  </Layout>
)

export default Media
