import React, { Component } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class IntroContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false, //begin with box closed
      text: "อ่านต่อ"
    }
  }

  showButton = () => {
    this.setState({ expanded: !this.state.expanded })
    if (this.state.expanded === true) {
      this.setState({ text: "อ่านต่อ" })
    } else {
      this.setState({ text: "ซ่อน" })
    }
  }

  render() {
    const { text } = this.state
    const ChevronDirection = this.state.expanded ? 'feather-icon icon-chevron-up' : 'feather-icon icon-chevron-down';
    const ReadLessMoreConctent = this.state.expanded ? 'Show' : 'Hide';
    return (
      <div className="TextContent">
        <div className={ReadLessMoreConctent}>
        <p>
          ฟีฟ่า (ปวีณ์ธิดา สกุลพิพัฒน์) เป็นหนึ่งในสมาชิกรุ่นที่ 2 ของวงไอดอลไทย{' '}
          <OutboundLink
            href="https://th.wikipedia.org/wiki/บีเอ็นเคโฟร์ตีเอต"
            rel="noopener noreferrer"
            target="_blank"
          >
            BNK48
          </OutboundLink>{' '}
          ซึ่ง เป็นวงน้องสาวของวงไอดอลญี่ปุ่นชื่อดัง{' '}
          <OutboundLink
            href="https://th.wikipedia.org/wiki/เอเคบีโฟร์ตีเอต"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            AKB48
          </OutboundLink>{' '}
          จุดเด่นทางด้านความสามารถของฟีฟ่าในวงคือเรื่องร้องเพลง
          ซึ่งฟีฟ่าเป็นเพียงไม่กี่คนในวงที่สามารถร้องเพลงลูกทุ่งและใช้ลูกคอในการร้องได้ดี อีกทั้งยังสามารถทำหน้าที่ MC พิธีกรดำเนินการแสดงเอนเทอร์เทนผู้ฟังได้ดีอีกด้วย
        </p>
        <p>สิ่งที่ฟีฟ่าต้องพยายามมากกว่าคนอื่นในช่วงแรกคือการเต้น ซึ่งตัวเธอนั้นไม่มีทักษะในด้านนี้มาก่อนเลยต้องมาหัดใหม่แต่เริ่ม
          แต่ก็สามารถพิสูจน์ได้แล้วว่าเธอทำได้ไม่แพ้คนอื่นโดยการติดเซมบัตสึเพลง "ฤดูใหม่" ในซิงเกิลที่ 4 ส่วนเรื่องการร้องนั้น
          แม้จะมีทักษะในการร้องเพลงลูกทุ่งที่ดีอยู่แล้ว แต่ก็ต้องมาฝึกใหม่ให้เข้ากับเพลงไอดอลโดยการฝึกร้องเพลงแนวสตริงมากขึ้น
        </p>
        <p>
          ปัจจุบันฟีฟ่าเรียนอยู่ชั้นมัธยมศึกษาปีที่ 5 <em>(2018)</em> สายภาษาอังกฤษ-เกาหลี ฟีฟ่าเข้าโรงเรียนโดยใช้โควต้าเด็กความสามารถพิเศษในเรื่องของการร้องเพลงลูกทุ่ง เหตุผลที่มาเข้าวง BNK48 ส่วนนึงเป็นเพราะ
          อยากหารายได้มาแบ่งเบาภาระพ่อกับแม่ในเรื่องค่าใช้จ่ายการเรียน
        </p>
        <p>
          ชื่อฟีฟ่ามาจากการที่คุณพ่อของพีฟ่าชอบฟุตบอลทีมเอซีมิลาน
          เลยตั้งชื่อลูกสาวว่า "ฟีฟ่า" และตั้งชื่อน้องชายอีก 1 คนของฟีฟ่าว่า "กาก้า"
          ฟีฟ่าเป็นคนถนัดซ้าย อาหารที่ชอบจะชอบอาหารอีสานเป็นพิเศษ นิสัยของฟีฟ่าเป็นคนเฮฮา ร่าเริงและมั่นใจในการแสดงออกของตัวเอง
          สิ่งที่ฟีฟ่าไม่ชอบคือมดและแมลงสาบ
          ที่ไม่ชอบมดเพราะว่ามดเคยเข้าหูตอนเด็ก
          ส่วนแมลงสาบไม่ชอบเพราะเคยดูคลิปแมลงสาบเข้าหู
        </p>
        </div>
        <button onClick={this.showButton} type="button" className="ReadMoreButton">
          <span>{text}</span>
          <i className={ChevronDirection}></i>
        </button>
      </div>
    )
  }
}

export default IntroContent
