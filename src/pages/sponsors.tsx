import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SponsorCard } from "../components/sponsorCard"

const SponsorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 280px));
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  background-color: #ffffff11;
  box-shadow: 0px 0px 30px 30px #ffffff11;
  border-radius: 30px;
`

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    {
      mdx(frontmatter: { title: { eq: "Sponsors" } }) {
        body
      }

      allAirtable(
        filter: { table: { eq: "Sponsors" } }
        sort: { order: ASC, fields: data___order }
      ) {
        edges {
          node {
            data {
              url
              name
              logo {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Sponsors" />
      <h1>A great big thank you to this year's sponsors!</h1>

      <SponsorWrapper>
        {data.allAirtable.edges.map(node => {
          const data = node.node.data
          return (
            <SponsorCard
              key={data.url}
              url={data.url}
              name={data.name}
              logo={data.logo.localFiles[0].childImageSharp.fluid}
            />
          )
        })}
      </SponsorWrapper>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default Sponsors
