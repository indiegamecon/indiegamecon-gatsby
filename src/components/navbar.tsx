import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Colors } from '../utilities'
import { Bar } from './bar'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: '1rem' }}>
    <Link
      to={props.to}
      activeStyle={{
        textDecoration: 'underline',
      }}
      style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}
    >
      {props.children}
    </Link>
  </li>
)

const StyledNavbar = styled.nav<{ open: boolean }>`
  display: flex;
  background-color: ${Colors.PRIMARY_LIGHT};

  @media only screen and (max-width: 750px) {
    font-size: 150%;
    display: ${({ open }) => (open ? '' : 'none')};
    ul {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
  }
`

const Navbar: React.FC<{ navOpen: boolean }> = ({ navOpen }) => (
  <>
    <StyledNavbar open={navOpen}>
      <ul style={{ listStyle: `none`, margin: 'auto' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/developers">Developers</ListLink>
        <ListLink to="/games">Games</ListLink>
        <ListLink to="/schedule">Schedule</ListLink>
        <ListLink to="/sponsors">Sponsors</ListLink>
        <ListLink to="/volunteers">Volunteers</ListLink>
        <ListLink to="/media">Media</ListLink>
        <ListLink to="/about">About</ListLink>
      </ul>
    </StyledNavbar>
    <Bar />
  </>
)

export default Navbar
