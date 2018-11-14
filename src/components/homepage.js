import React, { Component } from 'react'
//import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Header from '../components/header'
import Landing from '../components/landing'
import Intro from '../components/intro'
import Follow from '../components/follow'
import Join from '../components/join'
import Footer from '../components/footer'
import LoadingScreen from '../components/loading_screen'

export default class HomePage extends Component {

  render() {
    return (
      <>
        <Layout>
          <LoadingScreen></LoadingScreen>
          <Header />
          <Landing />
          <Intro />
          <Follow />
          <Join />
          <Footer />
        </Layout>
      </>
    )
  }
}
