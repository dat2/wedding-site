import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import Header from '../components/Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nick Weds Pirave"
      meta={[
        { name: 'description', content: 'Nick and Pirave wedding website' },
        { name: 'keywords', content: 'nick, pirave, wedding' },
      ]}
    />
    <Header />
    <Container>{children()}</Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
