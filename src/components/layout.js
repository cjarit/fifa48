import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Favicon from '../images/favicon.png'

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
              content: 'http://www.fifabnk48.com/',
            },
            {
              name: 'robots',
              content: 'all',
            },
            {
              property: 'og:title',
              content: 'Fifa BNK48 Fansite : เว็บแฟนคลับฟีฟ่า BNK48',
            },
            {
              property: 'og:image',
              content: 'https://i.imgur.com/H1oqs1a.png',
            },
            {
              property: 'og:type',
              content: 'profile',
            },
            {
              property: 'og:url',
              content: 'http://www.fifabnk48.com/',
            },
            {
              property: 'og:site_name',
              content: 'Fifa BNK48 Fansite',
            },
            {
              property: 'og:description',
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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
