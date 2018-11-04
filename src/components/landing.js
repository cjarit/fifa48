import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'

import { ContainerBS } from './bootstrap_layout'

//import MainIdolImage from '../images/fifa_main.png'
//import FrontGraphic from '../images/front-graphic.png'
//import BackGraphic from '../images/back-graphic.png'
import DotPatternTri from '../images/dot-tri.png'
import DotPatternRect from '../images/dot-rect.png'
import FacebookIcon from '../images/social-logo/fb.png'
import InstagramIcon from '../images/social-logo/ig.png'

import FifaMain from '../images-query/fifa_main'
import FrontGraphic from '../images-query/front-graphic'
import BackGraphic from '../images-query/back-graphic'

const Landing = (props) => (
  <section id="Landing">
    <div className="IdolLanding">
      <ContainerBS>
        <Parallax
          className="EffectFront"
          offsetYMax={10}
          offsetYMin={-10}
          slowerScrollRate
        >
          <Fade bottom distance={'150px'} delay={200}>
            {/* <img alt="BNK48" src={FrontGraphic} /> */}
            <FrontGraphic />
          </Fade>
        </Parallax>
        {/* <div className="MainIdol">
          <img alt="Fifa BNK48" src={MainIdolImage} />
        </div> */}
        <Parallax
          className="MainIdol"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
        >
          <Fade bottom distance={'50px'}>
            {/* <img alt="Fifa BNK48" src={MainIdolImage} /> */}
            <FifaMain />
          </Fade>
        </Parallax>
        <Parallax
          className="EffectBack"
          offsetYMax={5}
          offsetYMin={-5}
          slowerScrollRate
        >
          {/* <img alt="BNK48" src={BackGraphic} /> */}
          <BackGraphic />
        </Parallax>
        <div className="CircleBg" />
        <div className="TitleTag">
          <h1>Fifa</h1>
          <h6 className="Name">ปวีณ์ธิดา สกุลพิพัฒน์</h6>
          <h4>BNK48 2nd Generation</h4>
          <h6 className="Job">
            <strong>Idol</strong> , Singer , Artist , Model , Brand Presenter
          </h6>
        </div>
        <div className="SnsTopLabel">
          <h5>Follow Fifa</h5>
          <a
            href="https://www.facebook.com/bnk48official.fifa/"
            rel="noopener noreferrer"
            target="_blank"
            className="Facebook"
          >
            <img alt="Fifa BNK48 Facebook Official" src={FacebookIcon} />
            <h6>fifa.bnk48official</h6>
          </a>
          <a
            href="https://www.instagram.com/fifa.bnk48official/"
            rel="noopener noreferrer"
            target="_blank"
            className="Instagram"
          >
            <img alt="Fifa BNK48 Instagram Official" src={InstagramIcon} />
            <h6>bnk48official.fifa</h6>
          </a>
          <div className="LineDown" />
        </div>
        <div className="DotPatternTop">
          <img alt="BNK48" src={DotPatternTri} />
        </div>
        <div className="DotPatternBottom">
          <img alt="BNK48" src={DotPatternRect} />
        </div>
      </ContainerBS>
      <div className="ScrollDown">
        <h6>รู้จักกับฟีฟ่า</h6>
        <AnchorLink href="#Intro" className="DownButton">
          <i className="feather-icon icon-chevron-down" />
        </AnchorLink>
      </div>
    </div>
  </section>
)

export default Landing