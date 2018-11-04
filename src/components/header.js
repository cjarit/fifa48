import React from 'react'
import { Link } from '@reach/router'
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { Link } from 'gatsby'

import FifaPageLogo from '../images/fifa-page-logo.png'
import { ContainerBS } from './bootstrap_layout'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      modal: false,
    }
    this.toggleSoon = this.toggleSoon.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 30) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleSoon() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <>
        <div
          className={
            this.state.hasScrolled ? 'HeaderGroup HeaderScrolled' : 'HeaderGroup'
          }
        >
          <ContainerBS>
            <Link to="/" className="Brand">
              <img src={FifaPageLogo} alt="Fifa BNK48" />
            </Link>
            <Scrollspy
              items={['Landing', 'Intro']}
              currentClassName="is-current"
              className="NotList NavGroup"
            >
              <li>
                <AnchorLink href="#Landing" className="Nav">
                  <h6>Top</h6>
                  <span>จุดเริ่มต้น</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#Intro" className="Nav">
                  <h6>Introduce</h6>
                  <span>รู้จักกับฟีฟ่า</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#Follow" className="Nav">
                  <h6>Follow</h6>
                  <span>ช่องทางติดตามฟีฟ่า</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#Join" className="Nav">
                  <h6>Join Us</h6>
                  <span>เข้ากลุ่มแฟนคลับ</span>
                </AnchorLink>
              </li>
            </Scrollspy>
            <button
              //href="https://www.facebook.com/FifaBnk48Fans/"
              //rel="noopener noreferrer"
              //target="_blank"
              onClick={this.toggleSoon}
              className="Button ButtonMain"
            >
              โปรเจคเลือกตั้ง
            </button>
          </ContainerBS>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleSoon} className={this.props.className}>
          <ModalBody>
           เร็วๆ นี้
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleSoon}>ปิด</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default Header
