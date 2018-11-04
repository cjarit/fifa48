import React from 'react'
import Fade from 'react-reveal/Fade'

import IntroContent from '../components/intro-content'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../scss/layout.scss'
import '../scss/main.scss'
import '../scss/header.scss'
import {
  ContainerNoRowBS,
  RowBS,
  RowCenterBS,
  ContainerBS,
} from '../components/bootstrap_layout'

import IconGen2 from '../images/2ndgen.png'
import IconVoice from '../images/voice.png'
import IconSem from '../images/sem.png'
import IconSem5th from '../images/sem-5th.png'

const Intro = () => (
  <section id="Intro">
    <div class="PurpleBG" />
    <ContainerNoRowBS>
      <RowBS>
        <div className="SectionTitle">
          <h5>Introduction</h5>
          <h2>ใครคือฟีฟ่า BNK48?</h2>
        </div>
      </RowBS>
      <RowBS>
        <Fade bottom distance={'50px'}>
          <div className="IntroPhoto">
            <div className="Img BackLeftImg" />
            <div className="Img FrontImg" />
            <div className="Img BackRightImg" />
          </div>
        </Fade>
      </RowBS>
    </ContainerNoRowBS>
    <ContainerNoRowBS>
      <RowCenterBS>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="IntroListGroup">
            <div className="row IntroListRow">
              <div className="col-12 col-md-6">
                <div className="IntroList">
                  <img alt="BNK48 2nd Generation" src={IconGen2} />
                  <div className="Text">
                    <h6>สมาชิกของ BNK48 รุ่น 2</h6>
                    <p>
                      เป็น 1 ในสมาชิกรุ่น 2 ของวงไอดอลอันดับ 1 ในไทย
                      จากการคัดเลือกผู้สมัครกว่าหมื่นคน
                    </p>
                    <a
                      href="https://www.instagram.com/p/BiJwl3knsJ9/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>จุดเริ่มต้นของฟีฟ่า</span>
                      <i className="feather-icon icon-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="IntroList">
                  <img alt="ร้องเพลง Fifa BNK48" src={IconVoice} />
                  <div className="Text">
                    <h6>มีลูกคอและเสียงร้องที่โดดเด่น</h6>
                    <p>
                      เป็นคนที่มีความสามารถโดดเด่นในการร้องเพลง
                      สามารถร้องเพลงลูกทุ่งได้ไพเราะ
                    </p>
                    <a
                      href="https://www.facebook.com/bnk48official.fifa/videos/2178008865781066/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>ดูคลิปร้องเพลง</span>
                      <i className="feather-icon icon-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row IntroListRow">
              <div className="col-12 col-md-6">
                <div className="IntroList">
                  <img alt="ฤดูใหม่ Fifa BNK48 Tsugi no Season" src={IconSem} />
                  <div className="Text">
                    <h6>เป็นตัวหลักในเพลงโปรโมทของรุ่น 2</h6>
                    <p>
                      เป็น 1 ใน 16 คน ที่ซึ่งได้รับเลือก (เซมบัตสึ) ให้แสดงเพลง
                      “ฤดูใหม่” ซึ่งเป็นเพลงโปรโมทของรุ่น 2
                    </p>
                    <a
                      href="https://youtu.be/A2VrbwgWjT0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>ดู MV เพลงฤดูใหม่</span>
                      <i className="feather-icon icon-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="IntroList">
                  <img
                    alt="mata anata no koto wo kangaete Fifa BNK48"
                    src={IconSem5th}
                  />
                  <div className="Text">
                    <h6>
                      ผ่านออดิชั่นร้องเพลงจนได้เป็นตัวหลักของเพลงรองในซิงเกิลที่
                      5
                    </h6>
                    <p>
                      ติด 11 ตัวจริง (เซมบัตสึ) ที่ได้แสดงเพลงรองในซิงเกิลที่ 5
                      จากการออดิชั่นทั้งรุ่น 1 รุ่น 2
                    </p>
                    <a
                      href="https://youtu.be/IDnIu_M9SdM"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>ดูคลิปออดิชั่น</span>
                      <i className="feather-icon icon-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <IntroContent />
        </div>
      </RowCenterBS>
      <RowCenterBS>
        <div className="col-lg-10 col-md-12">
          <hr />
        </div>
      </RowCenterBS>
      <RowBS>
        <div className="Profile col-12">
          <RowCenterBS>
            <div className="col-lg-4">
              <div className="ProfilePhoto" />
            </div>
            <div className="col-lg-6">
              <div className="ProfileText">
                <div className="Name">
                  <h3>
                    ปวีณ์ธิดา สกุลพิพัฒน์ <em>(ฟีฟ่า)</em>
                  </h3>
                  <h3>Paweethida Sakunpiphat</h3>
                </div>
                <div className="Details">
                  <div className="ColumnLeft">
                    <div className="Detail">
                      <h6>วันเกิด</h6>
                      <p>6 พ.ย. 2001</p>
                    </div>
                    <div className="Detail">
                      <h6>ส่วนสูง</h6>
                      <p>163 ซ.ม.</p>
                    </div>
                    <div className="Detail">
                      <h6>กรุ๊ปเลือด</h6>
                      <p>B</p>
                    </div>
                  </div>
                  <div className="ColumnRight">
                    <div className="Detail">
                      <h6>สิ่งที่ชอบ</h6>
                      <p>โดราเอม่อน นิยาย สีฟ้า สีม่วง สีชมพู</p>
                    </div>
                    <div className="Detail">
                      <h6>งานอดิเรก</h6>
                      <p>อ่านหนังสือการ์ตูน ดูอนิเมะ ฟังเพลง เล่นเกม</p>
                    </div>
                    <div className="Detail">
                      <h6>บ้านเกิด</h6>
                      <p>กรุงเทพมหานคร</p>
                    </div>
                  </div>
                  <div className="Reference">
                    <span>อ้างอิงข้อมูลจาก : www.bnk48.com</span>
                  </div>
                </div>
              </div>
            </div>
          </RowCenterBS>
        </div>
      </RowBS>
    </ContainerNoRowBS>
    <div className="PortfolioBG">
      <ContainerBS>
        <div className="Portfolio col-12">
          <RowCenterBS>
            <div className="col-12">
              <div className="SubSectionTitle">
                <h3>ผลงานเด่นที่ผ่านมา</h3>
              </div>
            </div>
            <div className="col-lg-10">
              <RowBS>
                <div className="ColPort3 Portfolio">
                  <a
                    href="https://www.instagram.com/p/Bn_gsA2nlUy/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="Item Hamburger" />
                    <span className="Description">
                      ถ่ายแฟชั่นนิตยสาร HAMBURGER
                    </span>
                  </a>
                </div>
                <div className="ColPort3 Portfolio">
                  <a
                    href="https://www.instagram.com/p/BnlQ4JhH1E8/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="Item ThaiBall" />
                    <span className="Description">BNK48 X ช้างศึก</span>
                  </a>
                </div>
                <div className="ColPort3 Portfolio">
                  <a
                    href="https://www.instagram.com/p/BmiEdzMnW-R/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="Item GDC" />
                    <span className="Description">
                      งานกาล่า "Girl Don't Cry"
                    </span>
                  </a>
                </div>
              </RowBS>
            </div>
          </RowCenterBS>
        </div>
      </ContainerBS>
    </div>
  </section>
)

export default Intro
