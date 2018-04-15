import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 25%;
  @media (max-width: 425px) {
    display: none;
  }
`

const List = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const StyledLink = styled(Link)`
  padding: 10px;
  margin: 0;
  margin-right: 0.725em;
  color: #a39683;
  text-decoration: none;
  font-family: 'Cinzel';
  &:hover {
    color: #fda38d;
  }
  &:not(:first-child) {
    border-top: 1px solid #ececec;
  }
`

const NavMenu = () => (
  <Nav className="nav-list">
    <List>
      <StyledLink to="/" exact activeStyle={{ color: '#fda38d' }}>
        Welcome
      </StyledLink>
      <StyledLink to="/event/" activeStyle={{ color: '#fda38d' }}>
        Wedding Event
      </StyledLink>
      <StyledLink to="/rsvp/" activeStyle={{ color: '#fda38d' }}>
        RSVP
      </StyledLink>
      <StyledLink to="/photos/" activeStyle={{ color: '#fda38d' }}>
        Photo Gallery
      </StyledLink>
      <StyledLink to="/faq/" activeStyle={{ color: '#fda38d' }}>
        FAQ
      </StyledLink>
    </List>
  </Nav>
)

export default NavMenu
