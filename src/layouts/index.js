import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'

const Container = styled.div`
  min-height: 100vh;
  background-color: #eaf4f4;
`

const Tagline = styled.p`
  color: #7e7364;
  font-family: 'Libre Baskerville';
  font-size: 24px;
  line-height: 1.6em;
  text-align: center;
`

const Script = styled.p`
  color: #fda38d;
  font-family: 'Rouge Script';
  font-size: 60px;
  line-height: 1.6em;
  text-align: center;
  margin-top: 10px;
`

const Children = styled.div`
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="Nick Weds Pirave"
      meta={[
        { name: 'description', content: 'Nick and Pirave wedding website' },
        { name: 'keywords', content: 'nick, pirave, wedding' },
      ]}
    />
    <Children>
      <Tagline>July 15, 2018</Tagline>
      <Script>Nick & Pirave </Script>
      <Tagline>Welcome to our wedding website!</Tagline>
      {children()}
    </Children>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
