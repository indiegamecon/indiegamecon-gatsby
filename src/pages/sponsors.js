import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Sponsors = () => (
  <Layout>
    <SEO title="Sponsors" />
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "Sponsors" } }) {
            html
          }
        }
      `}
      render={data => (
        <>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </>
      )}
    />{' '}
  </Layout>
)

export default Sponsors
