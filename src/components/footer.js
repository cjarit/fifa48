import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'


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
            <OutboundLink
              href="https://www.instagram.com/pop_jc/"
              rel="noopener noreferrer"
              target="_blank"
              className="Maker"
            >
               pop_jc
            </OutboundLink>
            | v.1.0.0
          </p>
          <hr></hr>
          <OutboundLink href="mailto:cjarit@icloud.com"
          rel="noopener noreferrer"
          target="_blank"
          className="Notice">แจ้งปัญหา / ข้อเสนอแนะ</OutboundLink>
        </div>
      </RowBS>
    </div>
  </section>
)

export default Footer
