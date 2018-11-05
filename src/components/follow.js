import React from 'react'

import Fade from 'react-reveal/Fade'

import FacebookIcon from '../images/social-logo/fb.png'
import InstagramIcon from '../images/social-logo/ig.png'
import VoovIcon from '../images/social-logo/voov.png'

import {
  ContainerNoRowBS,
  RowBS,
  //RowCenterBS,
  //ContainerBS,
} from '../components/bootstrap_layout'

const Follow = () => (
  <section id="Follow">
    <div className="PurpleBG" />
    <ContainerNoRowBS>
      <RowBS>
        <div className="SectionTitle">
          <h5>Follow Up</h5>
          <h2>ติดตามฟีฟ่าได้ที่ไหน?</h2>
        </div>
      </RowBS>
      <RowBS>
        <div className="col-12">
          <div className="FollowBoxGroup row">
            <Fade bottom distance={'50px'}>
              <div className="col-6 col-lg-3">
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
            </Fade>
            <Fade bottom distance={'50px'} delay={150}>
              <div className="col-6 col-lg-3">
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
            </Fade>
            <Fade bottom distance={'50px'} delay={300}>
              <div className="col-6 col-lg-3">
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
            </Fade>
            <Fade bottom distance={'50px'} delay={450}>
              <div className="col-6 col-lg-3">
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
            </Fade>
          </div>
        </div>
      </RowBS>
    </ContainerNoRowBS>
  </section>
)

export default Follow
