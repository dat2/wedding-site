import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Centered = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = () => (
  <Container>
    <Centered>
      <H1>
        <StyledLink to="/">Nick Weds Pirave</StyledLink>
      </H1>
    </Centered>
  </Container>
)

export default Header
