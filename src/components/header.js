import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar'
import spaceship from '../images/IndieGameCon_spaceship.svg'
import logo from '../images/IGC White Logo Stroke Only.svg'
import styled from 'styled-components'

const StyledHeader = styled.div`
  /* position: absolute; */
  z-index: -5;
  top: 0;
  width: 100%;
  background: #2e3192;
  background-size: cover;
  display: flex;
  flex-direction: column;
  
  &:first-child div {
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
const Logo = styled.img`
  width: 200px;
`

const StyledShip = styled.img`
  width: 300px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <Link to="/">
        <Logo src={logo} />
        {/* {siteTitle} */}
      </Link>
      <Navbar />
    </div>
    <StyledShip src={spaceship} />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
