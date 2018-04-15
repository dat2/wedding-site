import React from 'react'
import Link from 'gatsby-link'

const NavMenu = () => (
  <nav>
    <ul>
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
    </ul>
  </nav>
)

export default NavMenu
