import React from 'react'

import {
  //ContainerNoRowBS,
  RowBS,
  //RowCenterBS,
  //ContainerBS,
} from '../components/bootstrap_layout'

const Footer = () => (
  <section id="Footer">
    <div className="container-fluid FooterText">
      <RowBS>
        <div className="col-12">
          <p>© 2018 สนามบอลของฟีฟ่า</p>
          <p>
            Made by 
            <a
              href="https://www.instagram.com/pop_jc/"
              rel="noopener noreferrer"
              target="_blank"
              className="Maker"
            >
               pop_jc
            </a>
            | v.1.0.0
          </p>
          <hr></hr>
          <a href="mailto:cjarit@icloud.com"
          rel="noopener noreferrer"
          target="_blank"
          className="Notice">แจ้งปัญหา / ข้อเสนอแนะ</a>
        </div>
      </RowBS>
    </div>
  </section>
)

export default Footer
