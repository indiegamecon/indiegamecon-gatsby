import { graphql, StaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Colors } from "../utilities"

const TableWrapper = styled.div`
  table {
    border: 2px solid ${Colors.PRIMARY_LIGHT};
    border-bottom: none;
    margin: 1rem auto;
    font-size: 1.25rem;
  }
  td,
  th {
    border-bottom: 2px solid ${Colors.PRIMARY_LIGHT};
    padding: 0.5rem;
  }
`

const Schedule = () => (
  <Layout>
    <SEO title="Schedule" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          mdx(frontmatter: { title: { eq: "schedule" } }) {
            body
          }
        }
      `}
      render={data => (
        <TableWrapper>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </TableWrapper>
      )}
    />
  </Layout>
)

export default Schedule
