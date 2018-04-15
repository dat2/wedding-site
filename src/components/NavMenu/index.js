import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0;
`

const NavMenu = () => (
  <nav>
    <List>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/photos">Photos</Link>
      </li>
      <li>
        <Link to="/event">Event</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/rsvp">RSVP</Link>
      </li>
    </List>
  </nav>
)

export default NavMenu
