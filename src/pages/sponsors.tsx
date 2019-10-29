import { graphql, useStaticQuery } from "gatsby"
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
      markdownRemark(frontmatter: { title: { eq: "Sponsors" } }) {
        html
      }
      allAirtable(filter: { table: { eq: "Sponsors" } }) {
        edges {
          node {
            data {
              url
              name
              logo {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid_withWebp
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
  console.log(data)
  return (
    <Layout>
      <SEO title="Sponsors" />
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
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default Sponsors
