import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import './index.less'
import NavMenu from '../components/NavMenu'
import headerPeony from './images/header-peony.svg'
import bkgImg from './images/bkg.png'

const Container = styled.div`
  min-height: 100vh;
  background-color: #eaf4f4;
  background-image: url(${bkgImg});
  font-family: 'Merriweather';
  color: #a39683;
`

const Children = styled.div`
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
  max-width: 1190px;
  padding: 0px 1.0875rem 1.45rem;
`

const Header = styled.div`
  background-color: #fda38d;
  color: white;
  font-size: 60px;
  line-height: 1.6em;
  text-align: center;
`

const Tagline = styled.div`
  color: #7e7364;
  font-family: 'Cinzel';
  font-size: 24px;
  line-height: 1.6em;
  text-align: center;
`

const Script = styled.div`
  color: #fda38d;
  font-size: 60px;
  line-height: 1.6em;
  text-align: center;
  margin-top: 10px;
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
    <div className="header">
      <img className="headerImg" src={headerPeony} />
    </div>
    <Children>
      <Tagline>July 15, 2018</Tagline>
      <Script className="great-vibes">Nick & Pirave</Script>
      <Tagline>Welcome to our wedding website!</Tagline>
      <div className="page">
        <NavMenu />
        <div className="children">{children()}</div>
      </div>
    </Children>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
