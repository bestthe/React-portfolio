import React, { forwardRef, useEffect, useRef } from 'react';
import { SendFill } from 'react-bootstrap-icons';
import '../styles/contact.css';

const Contact = forwardRef((props, ref) => {
  const mailInfo = [
    'a',
    'n',
    'j',
    'd',
    'a',
    'l',
    '4',
    '8',
    '4',
    '9',
    '@',
    'n',
    'a',
    'v',
    'e',
    'r',
    '.',
    'c',
    'o',
    'm',
  ];

  const letterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            letterRefs.current.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('up');
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.9 }
    );

    letterRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref}>
      <div className="contact_wrap">
        <h2 data-aos="fade-in">CONTACT</h2>
        <p data-aos="fade-up" className="contact_subt">
          함께 일할 웹 퍼블리셔를 찾고 계신가요?
        </p>
        <h3 className="contact_email">
          {mailInfo.map((letter, idx) => (
            <span key={idx} ref={(el) => (letterRefs.current[idx] = el)}>
              {letter}
            </span>
          ))}
        </h3>
        <p data-aos="fade-up" className="contact_desc">
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
