import { graphql, useStaticQuery } from "gatsby"
import React, { Component, useState } from "react"

import { GameCards } from "../components/gameCards"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Games: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      games: allAirtable(filter: { table: { eq: "Games" } }) {
        edges {
          node {
            data {
              gameDescription
              teamMembers
              teamName
              gameName
              gameLink
              confirmed
            }
          }
        }
      }
    }
  `)
  const games = data.games.edges
    .filter(({ node }) => node.data.confirmed)
    .map(({ node }) => node.data)

  return (
    <Layout>
      <SEO title="Games" />

      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          textShadow: '1px 1px 4px 4px black',
        }}
      >
        IGC 2019 Featured Games
      </h2>
      <GameCards games={games} />
    </Layout>
  )
}

export default Games
