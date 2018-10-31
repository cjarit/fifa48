import React from 'react'
//import { Link } from 'gatsby'
//import styled from 'styled-components'

import Layout from '../components/layout'
import {ContainerBS} from '../components/bootstrap_layout'

import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './main.scss'

import MainIdolImage from '../images/fifa_main.png'
import FrontGraphic from '../images/front-graphic.png'
import BackGraphic from '../images/back-graphic.png'
//import FifaLandingImg from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="IdolLanding">
      <ContainerBS>
          <div className="EffectFront">
            <img alt="BNK48" src={FrontGraphic}></img>
          </div>
          <div className="MainIdol">
            <img alt="Fifa BNK48" src={MainIdolImage}></img>
          </div>
          <div className="EffectBack">
          <img alt="BNK48" src={BackGraphic}></img>
          </div>
          <div className="CircleBg"></div>
      </ContainerBS>
    </div>
  </Layout>
)

export default IndexPage
