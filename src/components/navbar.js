import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: '1rem' }}>
    <Link
      to={props.to}
      activeStyle={{ background: '#2b2b2b', color: 'white' }}
      style={{ color: '#2b2b2b', textDecoration: 'none' }}
    >
      {props.children}
    </Link>
  </li>
)

const Navbar = ({ children }) => (
  <div>
    <ul style={{ listStyle: `none`, margin: 'auto' }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/developers">Developers</ListLink>
      <ListLink to="/games">Games</ListLink>
      <ListLink to="/schedule">Schedule</ListLink>
      <ListLink to="/sponsors">Sponsors</ListLink>
      <ListLink to="/media">Media</ListLink>
      <ListLink to="/about">About</ListLink>
    </ul>
  </div>
)

export default Navbar

// style={{
//   margin: 'auto',
//   display: 'flex',
//   justifyContent: 'space-around',
// }}
