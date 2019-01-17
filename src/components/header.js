import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar'
import spaceship from '../images/IndieGameCon_spaceship.svg'
import logo from '../images/IGC White Logo Stroke Only.svg'
import styled from 'styled-components'

const StyledHeader = styled.div`
  /* position: absolute; */
  padding: 10px;
  background: #2e3192;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  &:first-child div {
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
const Logo = styled.img`
  width: 200px;
`

const StyledShip = styled.img`
  width: 300px;
  margin-left: auto;
  margin-right: 10px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Link to="/">
        <Logo src={logo} />
        {/* {siteTitle} */}
      </Link>
    <div>
      <Navbar />
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
