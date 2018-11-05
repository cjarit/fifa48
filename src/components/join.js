import React from 'react'

import FifaArenaLogo from '../images/social-logo/fifa-arena.png'
import QRSquare from '../images/follow/fifa-sq.jpeg'
import SquareLogo from '../images/social-logo/line-sq.png'
import QRLine from '../images/follow/fifa-line.jpeg'
import LineLogo from '../images/social-logo/line.png'
import QRFacebook from '../images/follow/fifa-group.jpg'
import FBLogo from '../images/social-logo/fb_lg.png'

import Fade from 'react-reveal/Fade'

import {
  ContainerBS,
} from '../components/bootstrap_layout'

const Join = () => (
  <section id="Join">
    <ContainerBS>
      <div className="JoinCommunityWrapper">
        <div className="col-12 JoinCommunity">
          <div className="FanDomBG">
            <div className="FifaArenaLogo">
              <Fade bottom distance={'80px'}>
                <img alt="สนามบอลของฟีฟ่า" src={FifaArenaLogo} />
              </Fade>
            </div>
            <div className="SectionTitle">
              <h5>Join Fifa Community</h5>
              <h2>
                เข้าร่วมกลุ่ม <span>"สนามบอลของฟีฟ่า"</span>
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="FollowTicketGroup">
              <Fade bottom distance={'80px'} delay={50}>
                <div className="FollowTicketWrapper">
                  <a
                    href="https://line.me/ti/g2/STVGPEVBI6"
                    className="FollowTicket"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="Content">
                      <h5>Line Square</h5>
                      <div className="QRGroup">
                        <div className="QRCode">
                          <img alt="Line Square Fifa BNK48" src={QRSquare} />
                        </div>
                        <div className="Logo">
                          <img alt="Line Square Fifa BNK48" src={SquareLogo} />
                        </div>
                      </div>
                    </div>
                    <div className="Signifier">
                      <i className="feather-icon icon-chevron-right" />
                    </div>
                  </a>
                </div>
              </Fade>
              <Fade bottom distance={'80px'} delay={100}>
                <div className="FollowTicketWrapper">
                  <a
                    href="http://line.me/ti/g/_FpgxVbFDo#~"
                    className="FollowTicket"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="Content">
                      <h5>Line Group (ต.ม.)</h5>
                      <div className="QRGroup">
                        <div className="QRCode">
                          <img alt="Line Square Fifa BNK48" src={QRLine} />
                        </div>
                        <div className="Logo">
                          <img alt="Line Square Fifa BNK48" src={LineLogo} />
                        </div>
                      </div>
                    </div>
                    <div className="Signifier">
                      <i className="feather-icon icon-chevron-right" />
                    </div>
                  </a>
                </div>
              </Fade>
              <Fade bottom distance={'80px'} delay={150}>
                <div className="FollowTicketWrapper">
                  <a
                    href="https://web.facebook.com/profile.php?id=1679122458883284"
                    className="FollowTicket"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="Content">
                      <h5>Facebook Group</h5>
                      <div className="QRGroup">
                        <div className="QRCode">
                          <img alt="Line Square Fifa BNK48" src={QRFacebook} />
                        </div>
                        <div className="Logo">
                          <img alt="Line Square Fifa BNK48" src={FBLogo} />
                        </div>
                      </div>
                    </div>
                    <div className="Signifier">
                      <i className="feather-icon icon-chevron-right" />
                    </div>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </ContainerBS>
    <div className="JoinBG" />
  </section>
)

export default Join
