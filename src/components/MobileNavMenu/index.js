import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { compose, withHandlers, withState } from 'recompose'
import ClickOutside from 'react-click-outside'
import AnimateHeight from 'react-animate-height'

import bars from './bars.svg'

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  @media (min-width: 426px) {
    display: none;
  }
`

const Bar = styled.div`
  background-color: #fda38d;
  color: white;
  padding: 5px 10px;
  &:hover {
    background-color: #ffaa9b;
  }
`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fda38d;
  a {
    text-align: center;
    padding: 10px;
    margin: 0;
    width: 50%;
    text-decoration: none;
    font-family: 'Cinzel';
    &:visited {
      color: white;
    }
  }
`

const FaBars = styled.img.attrs({
  src: bars,
})`
  margin: 0;
  width: 0.875em;
  overflow: visible;
`

const MobileNavMenu = ({ visible, toggleVisible, closeMenu }) => (
  <ClickOutside onClickOutside={closeMenu}>
    <Nav onClick={toggleVisible}>
      <Bar>
        <FaBars />
      </Bar>
      <AnimateHeight duration={500} height={visible ? 'auto' : 0}>
        <Menu>
          <Link to="/" exact activeStyle={{ backgroundColor: '#ffaa9b' }}>
            Welcome
          </Link>
          <Link to="/event/" activeStyle={{ backgroundColor: '#ffaa9b' }}>
            Wedding Event
          </Link>
          <Link to="/rsvp/" activeStyle={{ backgroundColor: '#ffaa9b' }}>
            RSVP
          </Link>
          <Link to="/photos/" activeStyle={{ backgroundColor: '#ffaa9b' }}>
            Photo Gallery
          </Link>
          <Link to="/faq/" activeStyle={{ backgroundColor: '#ffaa9b' }}>
            FAQ
          </Link>
        </Menu>
      </AnimateHeight>
    </Nav>
  </ClickOutside>
)

const enhance = compose(
  withState('visible', 'setVisible', false),
  withHandlers({
    toggleVisible: props => () => {
      props.setVisible(!props.visible)
    },
    closeMenu: props => () => {
      props.setVisible(false)
    },
  })
)

export default enhance(MobileNavMenu)
