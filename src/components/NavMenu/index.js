import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import './index.less'

const NavMenu = () => (
  <nav className="nav-list">
    <ul>
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
    </ul>
  </nav>
)

export default NavMenu
