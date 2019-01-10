import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import axios from 'axios' 
import ContactForm from '../components/contactForm' 

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <ContactForm />
    <hr />
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
  </Layout>
)


export default IndexPage
