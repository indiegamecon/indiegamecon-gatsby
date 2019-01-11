import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ContactForm from '../components/contactForm'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactSpringTest from '../components/reactSpringTest';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ReactSpringTest />
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "home" } }) {
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
    <h3>Have questions? Contact us!</h3>
    <ContactForm />
  </Layout>
)

export default IndexPage
