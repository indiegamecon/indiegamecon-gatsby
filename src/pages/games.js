import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GameForm from '../components/gameForm'
import { Transition, animated } from 'react-spring'
import styled from 'styled-components'

const Button = styled.button`
  margin: 0 auto;
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
      <Layout>
        <SEO title="Games" />
        <Button onClick={this.handleToggle}>
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
        Games are coming soon!
      </Layout>
    )
  }
}

export default Games
