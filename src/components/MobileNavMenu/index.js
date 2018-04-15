import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import { compose, withHandlers, withState } from 'recompose'

import './index.less'

const Menu = styled.ul`
  display: ${props => (props.visible ? 'flex' : 'none')};
`

const MobileNavMenu = ({ visible, toggleVisible }) => (
  <nav className="mobile-nav-list" onClick={toggleVisible}>
    <FontAwesomeIcon icon={faBars} />
    <Menu visible={visible}>
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
    </Menu>
  </nav>
)

const enhance = compose(
  withState('visible', 'setVisible', false),
  withHandlers({
    toggleVisible: props => event => {
      props.setVisible(!props.visible)
    },
  })
)

export default enhance(MobileNavMenu)
