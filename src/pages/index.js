import React from 'react'
//import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
//import ReadMoreReact from 'read-more-react';

import Layout from '../components/layout'
//import { ContainerBS } from '../components/bootstrap_layout'
import Header from '../components/header'
import Landing from '../components/landing'
import IntroContent from '../components/intro-content'

import '../vendors/feather_icon/css/feather_icon.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../scss/layout.scss'
import '../scss/main.scss'
import '../scss/header.scss'
import {
  ContainerNoRowBS,
  RowBS,
  RowCenterBS,
} from '../components/bootstrap_layout'

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Header />
      <Landing />
      <section id="Intro">
        <div class="PurpleBG">
          <ContainerNoRowBS>
            <RowBS>
              <div className="Title">
                <h5>Introduction</h5>
                <h2>ใครคือฟีฟ่า BNK48?</h2>
              </div>
            </RowBS>
            <RowBS>
              <div className="IntroPhoto">
                <div className="Img BackLeftImg" />
                <div className="Img FrontImg" />
                <div className="Img BackRightImg" />
              </div>
            </RowBS>
            <RowCenterBS>
              <div className="col-lg-8 col-md-10 col-sm-12">
                <IntroContent></IntroContent>
              </div>
            </RowCenterBS>
          </ContainerNoRowBS>
        </div>
      </section>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
