import React from 'react'
//import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax';

import Layout from '../components/layout'
//import { ContainerBS } from '../components/bootstrap_layout'
import Header from '../components/header'
import Landing from '../components/landing'

import '../vendors/feather_icon/css/feather_icon.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../scss/layout.scss'
import '../scss/main.scss'
import '../scss/header.scss'

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Header />
      <Landing />
      <section id="Intro">
        <div class="Title PurpleBG" />
      </section>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage