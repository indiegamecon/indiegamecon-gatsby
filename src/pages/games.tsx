import React, { Component, useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GameForm from '../components/gameForm'
import { Transition, animated } from 'react-spring/renderprops'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GameProps, GameCards } from '../components/gameCards'

const Button = styled.button`
  margin: 3rem auto;
  padding: 1.5rem;
  display: inherit;
  width: auto;
  grid-column: 2 / 3;
  background: #2b2b2b;
  border: none;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #333;
  color: white;
  cursor: pointer;
  font-size: 2rem;

  :active,
  :hover {
    background: #555;
  }
  :active {
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
  }
  :disabled {
    background-color: #aaa;
  }
`
const Games: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false)

  const handleToggle = () => {
    setFormOpen(!formOpen)
  }
  const data = useStaticQuery(graphql`
    query {
      rules: markdownRemark(frontmatter: { title: { eq: "games" } }) {
        html
      }
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
  console.log(games)

  return (
    <Layout>
      <SEO title="Games" />
      <Button onClick={handleToggle}>Submit Your Game!</Button>
      <Transition
        items={formOpen}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {toggle =>
          toggle &&
          (styles => (
            <animated.div style={styles}>
              <GameForm />
            </animated.div>
          ))
        }
      </Transition>
      <div
        dangerouslySetInnerHTML={{
          __html: data.rules.html,
        }}
      />
      <hr />
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
