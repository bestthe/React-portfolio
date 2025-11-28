import React, { forwardRef, useState, useRef } from 'react';
import '../styles/work.css';
import QWERImg from '../assets/QWER.png';
import DKImg from '../assets/DK.png';
import AnmocImg from '../assets/ANMOC.png';
import ByryznImg from '../assets/BYRYZN.png';
import UpcloserImg from '../assets/UP_CLOSET.png';
import hDesignImg from '../assets/h_DESIGN.png';

const Work = forwardRef((props, ref) => {
  const [toastMessage, setToastMessage] = useState('');

  const timeoutRef = useRef(null);

  const workList = [
    {
      src: QWERImg,
      alt: 'QWER 쇼핑몰 메인이미지',
      url: 'https://qwershop.kr/',
      title: 'QWER',
      sub: 'Cafe24 Shop / 퍼블리싱 · 디자인 · 반응형',
    },
    {
      src: DKImg,
      alt: 'DK SHOP(동국제약) 쇼핑몰 메인이미지',
      url: 'https://www.edkshop.com/',
      title: '동국제약',
      sub: 'Cafe24 Shop / 퍼블리싱 · 디자인 이전 · 적응형',
    },
    {
      src: AnmocImg,
      alt: 'Anmoc(안목) 쇼핑몰 메인이미지',
      url: 'https://anmoc.co.kr/',
      title: 'Anmoc(안목)',
      sub: 'Cafe24 Shop / 퍼블리싱 · 적응형',
    },
    {
      src: ByryznImg,
      alt: 'BYRYZN 쇼핑몰 메인이미지',
      url: 'https://byryzn-cosmetics.com/',
      title: 'BYRYZN',
      sub: 'Cafe24 Shop / 퍼블리싱 · 디자인 · 반응형',
    },
    {
      src: UpcloserImg,
      alt: 'UP CLOSET 쇼핑몰 메인이미지',
      url: false,
      title: 'UP CLOSET',
      sub: 'Cafe24 Shop / 퍼블리싱 · 디자인 이전  · 적응형  · 유지보수',
    },
    {
      src: hDesignImg,
      alt: 'h DESIGN 메인이미지',
      url: 'https://h-design.kr/',
      title: 'h DESIGN',
      sub: 'Cafe24 Shop / 퍼블리싱 · 디자인 · 반응형  · 유지보수',
    },
  ];

  function WorkItem({ src, alt, url, title, sub }) {
    const handleClick = (e) => {
      if (!url) {
        e.preventDefault();

        setToastMessage('');
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setTimeout(() => {
          setToastMessage(
            '현재 프로젝트는 클라이언트 측 디자인 변경으로 링크 제공이 어렵습니다.'
          );
        }, 0);

        timeoutRef.current = setTimeout(() => {
          setToastMessage('');
          timeoutRef.current = null;
        }, 2500);
      }
    };

    return (
      <li>
        <a
          href={url || '#none'}
          onClick={handleClick}
          target={url ? '_blank' : undefined}
          rel={url ? 'noopener noreferrer' : undefined}
        >
          <img src={src} alt={alt} />
        </a>
        <div className="work_textbox">
          <h3>{title}</h3>
          <p>{sub}</p>
        </div>
      </li>
    );
  }

  return (
    <section id="work" ref={ref}>
      <div className="work_wrap section_pd">
        <h2 data-aos="fade-in" className="section_title">
          WORK
        </h2>
        <ul className="work_content">
          {workList.map((w) => (
            <WorkItem key={w.title} {...w} />
          ))}
        </ul>
      </div>

      {toastMessage && <div className="toast_message">{toastMessage}</div>}
    </section>
  );
});

export default Work;
