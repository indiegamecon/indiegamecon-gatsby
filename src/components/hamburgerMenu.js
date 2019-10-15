import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import NavBar from './navbar'
import { Transition, animated } from 'react-spring/renderprops'

class HamburgerMenu extends Component {
  state = {
    showNav: false,
  }
  showNav = () => {
    this.setState(prevState => ({
      showNav: !prevState.showNav,
    }))
  }

  render() {
    return (
      <div className={this.props.className}>
        <button onClick={this.showNav}>
          <FaBars
            className={this.props.className}
            onMouseDown={this.props.handleMouseDown}
            style={{ fontSize: '2rem' }}
          />
        </button>
        <Transition
          items={this.state.showNav}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {showNav =>
            showNav &&
            (styles => (
              <animated.div style={styles}>
                <NavBar />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    )
  }
}

const StyledHamburgerMenu = styled(HamburgerMenu)`
  text-align: right;
  button {
    text-align: right;
    margin-right: 1rem;
    background: none;
    border: none;
    height: 3rem;
    color: white;
    cursor: pointer;
    -webkit-tap-highlight-color: #00000000;
    &:focus,
    :hover,
    :active {
      outline: none;
      background: none;
    }
  }
`

export default StyledHamburgerMenu
