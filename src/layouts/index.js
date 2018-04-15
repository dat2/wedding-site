import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import './index.less'
import NavMenu from '../components/NavMenu'
import headerPeony from './images/header-peony.svg'
import footerPeony from './images/footer-peony.png'
import bkgImg from './images/bkg.png'

const Container = styled.div`
  min-height: 100vh;
  background-color: #eaf4f4;
  background-image: url(${bkgImg});
  color: #a39683;
`

const PageContainer = styled.div`
  background-color: white;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
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
  height: 165px;
`

const FooterImage = styled.img`
  margin: 0;
`

const CentredText = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
`

function getTagLine({ pathname }) {
  if (pathname === '/') {
    return 'Welcome to our wedding website!'
  } else if (pathname.includes('photos') || pathname.includes('faq')) {
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
