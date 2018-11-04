import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
//import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Header from '../components/header'
import Landing from '../components/landing'
import Intro from '../components/intro'
import Follow from '../components/follow'
import Join from '../components/join'

// import {
//   ContainerNoRowBS,
//   RowBS,
//   RowCenterBS,
//   ContainerBS,
// } from '../components/bootstrap_layout'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <ParallaxProvider>
          <Layout>
            <Header />
            <Landing />
            <Intro />
            <Follow />
            <Join />
          </Layout>
        </ParallaxProvider>
      </>
    )
  }
}
