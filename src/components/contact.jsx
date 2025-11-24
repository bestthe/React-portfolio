import React, { forwardRef } from 'react';
import { SendFill } from 'react-bootstrap-icons';
import '../styles/contact.css';

const Contact = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref}>
      <div className="contact_wrap">
        <h2>CONTACT</h2>
        <p className="contact_subt">함께 일할 웹 퍼블리셔를 찾고 계신가요?</p>
        <h3 className="contact_email">anjdal4849@naver.com</h3>
        <p className="contact_desc">
          저에게 궁금하신 점이 있으시다면 연락해 주세요.
          <br />
          빠르게 답장 드리겠습니다 😄
        </p>
        <a className="contact_btn" href="mailto:anjdal4849@naver.com">
          메일보내기 <SendFill size={28} />
        </a>
      </div>
    </section>
  );
});

export default Contact;
