import React, { Component } from 'react'

class IntroContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false, //begin with box closed
      text: "Read More"
    }
  }

  showButton = () => {
    this.setState({ expanded: !this.state.expanded })
    if (this.state.expanded === true) {
      this.setState({ text: "Read more" })
    } else {
      this.setState({ text: "Hide" })
    }
  }

  render() {
    const { expanded, text } = this.state
    const ChevronDirection = this.state.expanded ? 'feather-icon icon-chevron-up' : 'feather-icon icon-chevron-down';
    return (
      <div className="TextContent">
        <p>
          ฟีฟ่า (ปวีณ์ธิดา สกุลพิพัฒน์) เป็นหนึ่งในสมาชิกรุ่นที่ 2 ของวงไอดอลไทย{' '}
          <a
            href="https://th.wikipedia.org/wiki/บีเอ็นเคโฟร์ตีเอต"
            rel="noopener noreferrer"
            target="_blank"
          >
            BNK48
          </a>{' '}
          ซึ่ง เป็นวงไอดอลน้องสาวของญี่ปุ่น{' '}
          <a
            href="https://th.wikipedia.org/wiki/เอเคบีโฟร์ตีเอต"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            AKB48
          </a>{' '}
          อีกทีหนึ่ง จุดเด่นของฟีฟ่าในวงคือเรื่องร้องเพลง
          เป็นไม่กี่คนในวงที่สามารถร้องเพลงลูกทุ่งได้ดีอีกทั้งยังสามารถ
          ทำหน้าที่ MC พิธีกรดำเนินการแสดงและเอนเทอร์เทนผู้ฟังได้ดีอีกด้วย
        </p>
        {expanded && ( //show if expanded is true
          <p>
            ชื่อฟีฟ่ามาจากการที่คุณพ่อของพีฟ่าชอบฟุตบอลทีมเอซีมิลาน
            เลยตั้งชื่อว่าฟีฟ่าและตั้งชื่อน้องชายอีก 1 คนของฟีฟ่าว่ากาก้า
            ปัจจุบันฟีฟ่าเรียนอยู่ชั้นมัธยมศึกษาปีที่ 5 (2018) สายภาษาอังกฤษ
            เป็นคนถนัดซ้าย ฟีฟ่าชอบอาหารอีสานเป็นพิเศษ
            สิ่งที่ฟีฟ่าไม่ชอบคือมดและแมลงสาบ
            ที่ไม่ชอบมดเพราะว่ามดเคยเข้าหูคอนเด็ก
            ส่วนแมลงสาบไม่ชอบเพราะเคยดูคลิปแมลงสาบเข้าหู
          </p>
        )}
        <span onClick={this.showButton}>
          {text} <i className={ChevronDirection}></i>
        </span>
      </div>
    )
  }
}

export default IntroContent
