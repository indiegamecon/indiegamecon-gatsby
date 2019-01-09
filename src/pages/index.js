import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import axios from 'axios' 

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
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

axios
      .patch("/.netlify/functions/api-proxy", {
        params: {
          url: `https://api.airtable.com/v0/${
            process.env.REACT_APP_AIRTABLE_BASE_ID
          }`
        },
        data: {
          fields: {
            "Name": "stan"
          }
        }
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });

export default IndexPage
