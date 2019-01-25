import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './navbar'
import spaceship from '../images/IndieGameCon_spaceship.svg'
import logo from '../images/IGC White Logo Stroke Only.svg'
import styled from 'styled-components'

import HamburgerButton from './hamburgerMenu'

import { elevation } from '../utilities'

const StyledHeader = styled.header`
  padding: 2rem 10%;
  background: #2e3192;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-around;
  outline: 1rem dashed #fff200;
  outline-offset: -1.7rem;
  width: 100%;
  ${elevation[2]};
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
const Logo = styled.img`
  width: 100%;
`

const StyledShip = styled.img`
  width: 200px;
  transform: rotate(180deg);

  @media only screen and (max-width: 750px) {
    /* display: none; */
    width: 50%;
  }
`

const Lazer = styled.div`
  min-width: 50%;
  height: 10px;
  background: #ed1c24;

  @media only screen and (max-width: 750px) {
    opacity: 0;
  }
`

class Header extends Component {
  state = {
    headerWidth: 0,
  }

  handleResize = element =>
    this.setState({ headerWidth: element.getBoundingClientRect(element).width })

  refCallback = element => {
    if (element) {
      this.elementRef = element
      this.setState({
        headerWidth: element.getBoundingClientRect(element).width,
      })
    }
  }

  render() {
    return (
      <StyledHeader ref={this.refCallback}>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <div>
          {this.state.headerWidth > 733 ? <Navbar /> : <HamburgerButton />}
          <div
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Lazer />
            <StyledShip src={spaceship} />
          </div>
        </div>
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
