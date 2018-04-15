import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0;
  text-align: right;
`

const NavMenu = () => (
  <nav className="nav-list">
    <List>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/event">Wedding Event</Link>
      </li>
      <li>
        <Link to="/rsvp">RSVP</Link>
      </li>
      <li>
        <Link to="/photos">Photo Gallery</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </List>
  </nav>
)

export default NavMenu
