import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: '1rem' }}>
    <Link
      to={props.to}
      activeStyle={{ background: '#231f20dd', color: 'white' }}
      style={{ color: 'white', textDecoration: 'none' }}
    >
      {props.children}
    </Link>
  </li>
)

const StyledNavbar = styled.nav`
  @media only screen and (max-width: 750px) {
    font-size: 150%;
    ul {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
  }
`
const Navbar = ({ children }) => (
  <StyledNavbar>
    <ul style={{ listStyle: `none`, margin: 'auto' }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/developers">Developers</ListLink>
      <ListLink to="/games">Games</ListLink>
      <ListLink to="/schedule">Schedule</ListLink>
      <ListLink to="/sponsors">Sponsors</ListLink>
      <ListLink to="/media">Media</ListLink>
      <ListLink to="/about">About</ListLink>
    </ul>
  </StyledNavbar>
)

export default Navbar
