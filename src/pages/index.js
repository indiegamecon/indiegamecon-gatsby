import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components' 
import ContactForm from '../components/contactForm'

import Layout from '../components/layout'
import SEO from '../components/seo'

const StyledHome = styled.div`

  p {
    text-align: center;
  }
  img {
    margin: 0 auto;
    display: block;
  }

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
          <StyledHome 
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </>
      )}
    />
    <h3>Have questions? Contact us!</h3>
    <ContactForm />
  </Layout>
)

export default IndexPage
