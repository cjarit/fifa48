import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Favicon from '../images/favicon.png'

import Footer from '../components/footer'

//import Header from './header'
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../scss/layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'เว็บไซต์แฟนคลับของฟีฟ่าแห่งวง BNK48 ทำความรู้จักฟีฟ่าพร้อมทั้งช่องทางการติดตามต่างๆ',
            },
            {
              name: 'keywords',
              content:
                'ฟีฟ่า, FifaBNK48, ฟีฟ่า BNK48, Fifa BNK48, Fifa, เด็กม่วง, สนามบอลของฟีฟ่า, สนามบอลของเด็กม่วง, BNK48, Fortune Cookie, คุ๊กกี้เสี่ยงทาย, ลูกทุ่ง',
            },
            {
              name: 'url',
              content:
                'http://www.fifabnk48.com/',
            },
            {
              name: 'og:title',
              content:
                'Fifa BNK48 Fansite : เว็บแฟนคลับฟีฟ่า BNK48',
            },
            {
              name: 'og:image',
              content:
                '../images/intro-image01.jpg',
            },
            {
              name: 'og:type',
              content:
                'profile',
            },
            {
              name: 'og:url',
              content:
                'http://www.fifabnk48.com/',
            },
            {
              name: 'og:site_name',
              content:
                'Fifa BNK48 Fansite',
            },
            {
              name: 'og:description',
              content:
                'เว็บไซต์แฟนคลับของฟีฟ่าแห่งวง BNK48 ทำความรู้จักฟีฟ่าพร้อมทั้งช่องทางการติดตามต่างๆ',
            },
            
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` },
          ]}
        >
          <html lang="th" />
        </Helmet>
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
