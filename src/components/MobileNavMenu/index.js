import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import { compose, withHandlers, withState } from 'recompose'
import ClickOutside from 'react-click-outside'

const Nav = styled.nav`
  position: fixed;
  width: 100%;
`

const Bar = styled.div`
  background-color: #fda38d;
  color: white;
  padding: 5px 10px;
  &:hover {
    background-color: #ffaa9b;
  }
  @media (min-width: 426px) {
    display: none;
  }
`

const Menu = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
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

const MobileNavMenu = ({ location, visible, toggleVisible, closeMenu }) => (
  <ClickOutside onClickOutside={closeMenu}>
    <Nav onClick={toggleVisible}>
      <Bar>
        <FontAwesomeIcon icon={faBars} />
      </Bar>
      <Menu visible={visible}>
        <Link to="/" exact activeStyle={{ backgroundColor: '#ffaa9b' }}>
          Welcome
        </Link>
        <Link to="/event" activeStyle={{ backgroundColor: '#ffaa9b' }}>
          Wedding Event
        </Link>
        <Link to="/rsvp" activeStyle={{ backgroundColor: '#ffaa9b' }}>
          RSVP
        </Link>
        <Link to="/photos" activeStyle={{ backgroundColor: '#ffaa9b' }}>
          Photo Gallery
        </Link>
        <Link to="/faq" activeStyle={{ backgroundColor: '#ffaa9b' }}>
          FAQ
        </Link>
      </Menu>
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
