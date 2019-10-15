import { Link } from 'gatsby'
import React, { Component } from 'react'
import Navbar from './navbar'
import IGCLogo from '../images/IGC White Logo Stroke Only.svg'
import styled, { css } from 'styled-components'

import HamburgerButton from './hamburgerMenu'
import BitforestSrc from '../images/vectors/bitforestBlack.svg'
import { Colors } from '../utilities'
import { Bar } from './bar'

const BitforestLogo = styled(BitforestSrc)`
  margin-right: auto;
  height: 30px;
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  width: auto;
  path {
    fill: ${Colors.PRIMARY_LIGHT} !important;
    stroke: ${Colors.PRIMARY_LIGHT} !important;
  }
`

const StyledHeader = styled.header<{ home: boolean }>`
  position: relative;
  height: 120px;
  padding: 0 1%;
  max-width: 960px;
  margin: 0 auto;
  ${({ home }) =>
    home &&
    css`
      height: auto;
      padding: 0 0 3rem 0;
      display: flex;
    `}
`

const Logo = styled.img`
  height: 100%;
  max-width: 100%;
`

const Date = styled.div`
  align-self: center;
  margin-top: 2rem;

  h4 {
    font-size: 2rem;
  }

  & > * {
    margin: 0;
    padding: 0;
  }
`

const Year = styled.h2`
  text-shadow: 5px 5px 0 ${Colors.PINK_SHADOW};
  font-size: 5rem;
`

const Transparent = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    opacity: 0.2;
    max-height: 300px;
  }
`

class Header extends Component<{ isHomePage: boolean }> {
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
  elementRef: any

  render() {
    const homeHeader = this.props.isHomePage
    return (
      <>
        {this.state.headerWidth > 733 ? <Navbar /> : <HamburgerButton />}
        <StyledHeader ref={this.refCallback} home={homeHeader}>
          <Link to="/">
            <Logo src={IGCLogo} />
          </Link>
          {homeHeader && (
            <Date>
              <h4>November 2nd and 3rd</h4>
              <Year>2019</Year>
            </Date>
          )}
          <Transparent>
            {homeHeader && <img src={require('../images/igcphoto.png')} />}{' '}
          </Transparent>
          <a href="https://www.bitforest.co">
            <BitforestLogo />
          </a>
        </StyledHeader>
        <Bar />
      </>
    )
  }
}

export default Header
