import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './navbar'
import spaceship from '../images/IndieGameCon_spaceship.svg'
import logo from '../images/IGC White Logo Stroke Only.svg'
import styled, { css } from 'styled-components'

import HamburgerButton from './hamburgerMenu'
import BitforestLogo from '../images/bitforest.png'

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
  transition: .2s;
  ${elevation[2]};
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  ${({ home }) =>
    home &&
    css`
      justify-content: center;
      height: 100vh;
      text-align: center;
      grid-template-columns: 5fr 1fr;
      align-content: center;
      @media only screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        height: auto;
      }
    `}
`

const Bitforest = styled.img`
  width: 400px;
  margin: 0 auto;
  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`

const Logo = styled.img`
  width: 100%;
  @media only screen and (max-width: 750px) {
    
  }
`

const StyledShip = styled.img`
  width: 200px;
  transform: rotate(180deg);

  @media only screen and (max-width: 750px) {
    /* width: 50%; */
    display: none;
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
    console.log(this.props.pathname)
    const homeHeader = this.props.pathname && 'homeHeader'
    return (
      <StyledHeader ref={this.refCallback} home={homeHeader}>
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
          {homeHeader && (
            <div>
              <h2>Presented by...</h2>
              <a href="https://www.bitforest.co">
                <Bitforest src={BitforestLogo} />
              </a>
            </div>
          )}
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
