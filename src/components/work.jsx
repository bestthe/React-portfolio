import React from 'react';
import '../styles/work.css';
import QWERImg from '../assets/QWER.png';
import DKImg from '../assets/DK.png';
import AnmocImg from '../assets/ANMOC.png';
import ByryznImg from '../assets/BYRYZN.png';
import UpcloserImg from '../assets/UP_CLOSET.png';
import hDesignImg from '../assets/h_DESIGN.png';

function Work() {
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
    return (
      <li>
        <a href={url || '#none'} target={url ? '_blank' : undefined}>
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
    <section id="work">
      <div className="work_wrap section_pd">
        <h2 className="section_title">WORK</h2>
        <ul className="work_content">
          {workList.map((w) => (
            <WorkItem key={w.title} {...w} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Work;
