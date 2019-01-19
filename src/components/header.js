import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar'
import spaceship from '../images/IndieGameCon_spaceship.svg'
import logo from '../images/IGC White Logo Stroke Only.svg'
import styled from 'styled-components'
import HamburgerButton from './hamburgerButton'



const StyledHeader = styled.header`
  /* position: absolute; */
  padding: 2rem;
  background: #2e3192;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: space-around;
  outline: 1rem dashed #fff200;
  outline-offset: -1.7rem;
  &:first-child div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
const Logo = styled.img`
  width: 100%;
`

const StyledShip = styled.img`
  width: 300px;
  margin-left: auto;
  margin-right: 10px;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Logo src={logo} />
    </Link>
    <div>
      <Navbar />
      <HamburgerButton />
      <StyledShip src={spaceship} />
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
