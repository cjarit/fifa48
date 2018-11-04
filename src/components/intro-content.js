import React, { Component } from 'react'

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
          <a
            href="https://th.wikipedia.org/wiki/บีเอ็นเคโฟร์ตีเอต"
            rel="noopener noreferrer"
            target="_blank"
          >
            BNK48
          </a>{' '}
          ซึ่ง เป็นวงน้องสาวของวงไอดอลญี่ปุ่นชื่อดัง{' '}
          <a
            href="https://th.wikipedia.org/wiki/เอเคบีโฟร์ตีเอต"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            AKB48
          </a>{' '}
          จุดเด่นทางด้านความสามารถของฟีฟ่าในวงคือเรื่องร้องเพลง
          ซึ่งฟีฟ่าเป็นเพียงไม่กี่คนในวงที่สามารถร้องเพลงลูกทุ่งและใช้ลูกคอในการร้องได้ดี อีกทั้งยังสามารถ
          ทำหน้าที่ MC พิธีกรดำเนินการแสดงเอนเทอร์เทนผู้ฟังได้ดีอีกด้วย
        </p>
        <p>
          ชื่อฟีฟ่ามาจากการที่คุณพ่อของพีฟ่าชอบฟุตบอลทีมเอซีมิลาน
          เลยตั้งชื่อลูกสาวว่า "ฟีฟ่า" และตั้งชื่อน้องชายอีก 1 คนของฟีฟ่าว่า "กาก้า"
          ปัจจุบันฟีฟ่าเรียนอยู่ชั้นมัธยมศึกษาปีที่ 5 (2018) สายภาษาอังกฤษ
          ฟีฟ่าเป็นคนถนัดซ้ายและชอบอาหารอีสานเป็นพิเศษ นิสัยของฟีฟ่าเป็นคนเฮฮา ร่าเริงและมั่นใจในการแสดงออกของตัวเอง
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
