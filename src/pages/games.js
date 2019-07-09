import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GameForm from '../components/gameForm'
import { Transition, animated } from 'react-spring/renderprops'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import GameCards from '../components/gameCards'

const Button = styled.button`
  margin: 10px auto;
  display: inherit;
  width: 250px;
  grid-column: 2 / 3;
  background: #2b2b2b;
  border: none;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #333;
  color: white;
  cursor: pointer;

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
class Games extends Component {
  state = {
    toggleForm: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm,
    }))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
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
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <SEO title="Games" />
            <div
              dangerouslySetInnerHTML={{
                __html: data.rules.html,
              }}
            />
            <Button onClick={this.handleToggle} style={{ fontSize: '1rem' }}>
              Click Here to Sign Up Your Team!
            </Button>
            <Transition
              items={this.state.toggleForm}
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
            <hr />
            <h2>Games that are signed up</h2>
            <GameCards games={data.games.edges} />
          </Layout>
        )}
      />
    )
  }
}

export default Games
