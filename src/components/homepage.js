import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Header from '../components/header'
import Landing from '../components/landing'
import Intro from '../components/intro'

import FacebookIcon from '../images/social-logo/fb.png'
import InstagramIcon from '../images/social-logo/ig.png'
import VoovIcon from '../images/social-logo/voov.png'

import {
  ContainerNoRowBS,
  RowBS,
  RowCenterBS,
  ContainerBS,
} from '../components/bootstrap_layout'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ParallaxProvider>
          <Layout>
            <Header />
            <Landing />
            <Intro />
            <section id="follow">
              <div class="PurpleBG" />
              <ContainerNoRowBS>
                <RowBS>
                  <div className="SectionTitle">
                    <h5>DISCOVER MORE</h5>
                    <h2>สามารถติดตามฟีฟ่าได้จากช่องทางใดบ้าง?</h2>
                  </div>
                </RowBS>
                <RowBS>
                  <Fade bottom distance={'50px'}>
                    <div className="col-12">
                      <div className="FollowBoxGroup row">
                        <div className="col-lg-3">
                          <a
                            href="https://www.facebook.com/bnk48official.fifa/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="FollowBox"
                          >
                            <div className="BoxHead Facebook">
                              <h6>Facebook (Official)</h6>
                            </div>
                            <div className="Avarta Facebook" />
                            <div className="SocialID">
                              <img
                                alt="mata anata no koto wo kangaete Fifa BNK48"
                                src={FacebookIcon}
                              />
                              <span>/fifa.bnk48official</span>
                            </div>
                            <div className="FooterBox">
                              <span>
                                ดูเพิ่มเติม
                                <i className="feather-icon icon-chevron-right" />
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-3">
                          <a
                            href="https://www.instagram.com/fifa.bnk48official/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="FollowBox"
                          >
                            <div className="BoxHead Instagram">
                              <h6>Instagram (Official)</h6>
                            </div>
                            <div className="Avarta Instagram" />
                            <div className="SocialID">
                              <img
                                alt="mata anata no koto wo kangaete Fifa BNK48"
                                src={InstagramIcon}
                              />
                              <span>/bnk48official.fifa</span>
                            </div>
                            <div className="FooterBox">
                              <span>
                                ดูเพิ่มเติม
                                <i className="feather-icon icon-chevron-right" />
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-3">
                          <a
                            href="http://www.voovlive.com/s_url/F8V0VY1180"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="FollowBox"
                          >
                            <div className="BoxHead Voov">
                              <h6>Voov (Official)</h6>
                            </div>
                            <div className="Avarta Voov" />
                            <div className="SocialID">
                              <img
                                alt="mata anata no koto wo kangaete Fifa BNK48"
                                src={VoovIcon}
                              />
                              <span>Fifa BNK48</span>
                            </div>
                            <div className="FooterBox">
                              <span>
                                ดูเพิ่มเติม
                                <i className="feather-icon icon-chevron-right" />
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-3">
                          <a
                            href="https://www.facebook.com/FifaBnk48Fans/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="FollowBox"
                          >
                            <div className="BoxHead Facebook">
                              <h6>Facebook Fanpage</h6>
                            </div>
                            <div className="Avarta FacebookFan" />
                            <div className="SocialID">
                              <img
                                alt="mata anata no koto wo kangaete Fifa BNK48"
                                src={FacebookIcon}
                              />
                              <span>FifaBnk48Fans</span>
                            </div>
                            <div className="FooterBox">
                              <span>
                                ดูเพิ่มเติม
                                <i className="feather-icon icon-chevron-right" />
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </RowBS>
              </ContainerNoRowBS>
            </section>
          </Layout>
        </ParallaxProvider>
      </>
    )
  }
}
