import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import './index.less'
import NavMenu from '../components/NavMenu'
import MobileNavMenu from '../components/MobileNavMenu'
import headerPeony from './images/header-peony.svg'
import footerPeony from './images/footer-peony.png'
import bkgImg from './images/bkg.png'

const Container = styled.div`
  min-height: 100vh;
  background-color: #eaf4f4;
  background-image: url(${bkgImg});
  color: #a39683;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

const PageContainer = styled.div`
  background-color: white;
  margin: 0 auto;
  max-width: 1170px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 425px) {
    padding-top: 35px;
  }
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

const Footer = styled.div`
  position: relative;
  text-align: center;
  @media (min-width: 769px) {
    height: 165px;
  }
`

const FooterImage = styled.img`
  margin: 0;
`

const CentredText = styled.div`
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translate(-50%, 50%);
  @media (max-width: 425px) {
    font-size: 0.875em;
    bottom: 40%;
  }
`

function getTagLine({ pathname }) {
  switch (pathname) {
    case '/':
      return 'Welcome to our wedding website!'
    case '/event/':
      return 'Event Details'
    case '/rsvp/':
      return 'RSVP'
    case '/thanks/':
      return ''
    case '/program/':
      return ''
    case '/faq/':
      return 'FAQ'
    default:
      return 'Coming Soon'
  }
}

const TemplateWrapper = ({ children, location }) => (
  <Container>
    <Helmet
      title="Nick Weds Pirave"
      meta={[
        { name: 'description', content: 'Nick and Pirave wedding website' },
        { name: 'keywords', content: 'nick, pirave, wedding' },
      ]}
    />
    <MobileNavMenu />
    <div className="header">
      <img className="headerImg" src={headerPeony} />
    </div>
    <PageContainer>
      <Tagline>July 15, 2018</Tagline>
      <Script className="great-vibes">Nick & Pirave</Script>
      <Tagline>{getTagLine(location)}</Tagline>
      <div className="page">
        <NavMenu />
        <div className="children">{children()}</div>
      </div>
      <Footer>
        <FooterImage src={footerPeony} />
        <CentredText>#NICKWEDSPIRAVE</CentredText>
      </Footer>
    </PageContainer>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
