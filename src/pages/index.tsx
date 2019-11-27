import { graphql, StaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
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
  <Layout isHomePage={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          mdx(frontmatter: { title: { eq: "home" } }) {
            body
          }
        }
      `}
      render={data => (
        <>
          <StyledHome>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </StyledHome>
        </>
      )}
    />
    <hr />
    <h3>Have questions? Contact us!</h3>
    <ContactForm />
  </Layout>
)

export default IndexPage
