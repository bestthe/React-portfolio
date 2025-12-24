import React, { forwardRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowClockwise } from 'react-bootstrap-icons';
import 'swiper/css';
import '../styles/project.css';

import PeachFloralImg from '../assets/PEACHFLORAL.png';
import ElireImg from '../assets/Elire.png';
import DailyImg from '../assets/Daily.png';
import GraceImg from '../assets/Grace.png';
import SunsetBreezeImg from '../assets/Sunset_Breeze.png';
import RadiantImg from '../assets/RADIANT.png';
import PortfolioImg from '../assets/Portfolio.png';
import TodoImg from '../assets/Todo.png';
import MovieImg from '../assets/Movie.png';
import WeatherImg from '../assets/Weather.png';

const Project = forwardRef((props, ref) => {
  const projects = [
    {
      title: 'WeatherApp',
      img: WeatherImg,
      url: 'https://bestthe.github.io/Weather-App/',
      description: `OpenWeather API를 활용해 날씨 정보를 제공하는 WeatherApp을 기획·제작했습니다.
                    \n\n반응형 구조로 모바일 환경에서도 안정적인 UI를 유지하며 지역별 날씨 정보를 직관적 확인할 수 있도록 구성했습니다.
                    \n\n깔끔한 인터페이스로 콘텐츠에 집중할 수 있도록 설계하고 사용자 경험을 고려한 반응형 구조로 구현했습니다.`,
      tags: ['#리액트', '#반응형웹', '#API데이터'],
    },
    {
      title: 'MovieApp',
      img: MovieImg,
      url: 'https://bestthe.github.io/Movie-App/',
      description: `TMDB API를 활용해 영화 정보를 제공하는 MovieApp을 기획·제작했습니다.
                    \n\n반응형 구조로 모바일 환경에서도 안정적인 UI를 유지하며 영화 탐색과 정보 확인 흐름을 직관적으로 구성했습니다.
                    \n\n포스터 중심의 레이아웃과 깔끔한 인터페이스로 콘텐츠에 집중할 수 있도록 설계하고 사용자 경험을 고려한 반응형 구조로 구현했습니다.`,
      tags: ['#리액트', '#반응형웹', '#리액트라우터'],
    },
    {
      title: 'TodoApp',
      img: TodoImg,
      url: 'https://bestthe.github.io/Todo-App/',
      description: `React를 기반으로 한 TodoApp을 제작하여 할 일 추가, 완료, 삭제 기능을 구현했습니다.
                    \n\n반응형 구조로 모바일 환경에서도 안정적인 UI를 유지하며 사용 흐름이 단순하고 직관적으로 동작하도록 구성했습니다.
                    \n\n불필요한 요소를 줄인 깔끔한 인터페이스로 작업 집중도를 높이고 사용자 경험을 고려한 반응형 구조로 구현했습니다.`,
      tags: ['#리액트', '#반응형웹', '#로컬스토리지'],
    },
    {
      title: 'Portfolio',
      img: PortfolioImg,
      url: 'http://anjdal4849.dothome.co.kr/',
      description: `JavaScript를 독학하며 제작한 첫 번째 포트폴리오로, GSAP ScrollTrigger와 인트로 페이지를 활용해 인터랙티브한 화면을 구현했습니다.
                    \n\n스크롤과 사용자 동작에 반응하는 애니메이션을 중심으로 콘텐츠를 자연스럽게 탐색할 수 있도록 흐름을 설계했습니다.
                    \n\n단순한 정보 나열이 아닌 웹의 동작 원리와 사용자 경험에 대한 이해를 바탕으로 구성한 포트폴리오입니다.`,
      tags: ['#첫번째포폴', '#반응형웹', '#GSAP스크롤'],
    },
    {
      title: 'PEACHFLORAL',
      img: PeachFloralImg,
      url: 'https://ecudemo330278.cafe24.com/',
      description: `JavaScript를 독학하고 제작한 첫 번째 Portfolio로 GSAP스크롤 트리거와 인트로 페이지를 제작하여
                    \n\n반응형 구조로 모바일에서도 깔끔한 UI를 유지하며 상품 진열과 구매 흐름을 직관적으로 구성했습니다.
                    \n\n부드러운 컬러톤과 정돈된 구성으로 브랜드 감성을 표현하고 사용자 경험을 고려한 반응형 구조로 제작했습니다.`,
      tags: ['#감성UI', '#반응형웹', '#브랜드아이덴티티'],
    },
    {
      title: 'Elire',
      img: ElireImg,
      url: 'https://ecudemo302448.cafe24.com/',
      description: `카페24 솔루션 기반으로 세련된 미니멀 감성과 제품 중심 쇼핑몰 레이아웃을 디자인했습니다.
                    \n\n모바일에서도 직관적 UI와 깔끔한 타이포그래피로 상품과 브랜드 이미지를 자연스럽게 전달했습니다.
                    \n\n부드러운 인터랙션과 여백 중심 레이아웃으로 상품 주목도를 높이고 브랜드 메시지를 효과적으로 표현했습니다.`,
      tags: ['#미니멀디자인', 'UX중심구성', '#반응형웹'],
    },
    {
      title: 'Daliy',
      img: DailyImg,
      url: 'https://ecudemo305706.cafe24.com/',
      description: `카페24 스킨 기반으로 직관적이고 깔끔한 쇼핑몰 레이아웃을 설계하고 구현했습니다.
                    \n\n모바일에서도 상품 중심 UI와 여백 활용으로 방문자가 자연스럽게 쇼핑하도록 구성했습니다.
                    \n\n부드러운 인터랙션과 시각적 계층 구조로 다양한 디바이스에서도 일관된 경험을 제공합니다.`,
      tags: ['#스킨커스터마이징', '#UX중심설계', '#반응형웹'],
    },
    {
      title: 'Grace',
      img: GraceImg,
      url: 'https://ecudemo335801.cafe24.com/',
      description: `카페24 스킨 기반으로 여성 의류 쇼핑몰에 최적화된 깔끔한 인터페이스를 구현했습니다.
                    \n\n모바일에서도 상품 중심 UI와 여백 활용으로 방문자가 자연스럽게 쇼핑하도록 안내했습니다.
                    \n\n부드러운 인터랙션과 정돈된 타이포그래피로 주요 콘텐츠와 상품을 돋보이게 하며 반응형 구조를 적용했습니다.`,
      tags: ['#스킨커스터마이징', '#사용자중심UI', '#반응형웹'],
    },
    {
      title: 'Sunset Breeze',
      img: SunsetBreezeImg,
      url: 'https://ecudemo327499.cafe24.com/',
      description: `카페24 기본 스킨 기반으로 고급스러운 호텔 예약 사이트 레이아웃을 디자인했습니다.
                    \n\n모바일에서도 직관적 UI와 체크인/체크아웃, 객실 선택 등 예약 흐름을 자연스럽게 구성했습니다.
                    \n\n심플한 컬러톤과 여백 활용으로 호텔의 품격을 표현하며 사용자가 편리하게 예약하도록 설계했습니다.`,
      tags: ['#예약편리UI', '#반응형웹', '#호텔브랜딩'],
    },
    {
      title: 'RADIANT',
      img: RadiantImg,
      url: 'https://d.cafe24.com/sample?productCode=PTMD834157&frame=P',
      description: `카페24 기본 스킨 기반으로 모던하고 세련된 쇼핑몰 레이아웃을 디자인했습니다.
                    \n\n모바일에서도 상품 이미지와 스타일 컷 중심으로 사용자가 직관적으로 제품을 확인하도록 구성했습니다.
                    \n\n파스텔 컬러와 정돈된 여백, 깔끔한 타이포그래피로 브랜드 스타일을 강조하며 반응형 UI/UX를 제공합니다.`,
      tags: ['#직관적UI', '#반응형웹', '#브랜드스타일'],
    },
  ];

  const [isFront, setIsFront] = useState(Array(projects.length).fill(false));

  const handleCardSwap = (index) => {
    setIsFront((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <section id="project" ref={ref}>
      <div className="project_wrap">
        <h3 data-aos="fade-in">PROJECT</h3>
        <Swiper
          spaceBetween={15}
          slidesPerView={1.1}
          breakpoints={{
            1740: {
              spaceBetween: 35,
              slidesPerView: 3.6,
            },
            1620: {
              spaceBetween: 30,
              slidesPerView: 3.4,
            },
            1520: {
              spaceBetween: 25,
              slidesPerView: 3.2,
            },
            1315: {
              spaceBetween: 20,
              slidesPerView: 2.8,
            },
            1085: {
              spaceBetween: 20,
              slidesPerView: 2.4,
            },
            950: {
              spaceBetween: 20,
              slidesPerView: 2.1,
            },
            820: {
              spaceBetween: 20,
              slidesPerView: 1.8,
            },
            815: {
              spaceBetween: 15,
              slidesPerView: 1.6,
            },
            600: {
              spaceBetween: 15,
              slidesPerView: 1.4,
            },
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={project.title}>
              <div className={`card_wrapper ${isFront[idx] ? 'swapped' : ''}`}>
                <div className="project_tcard">
                  <div className="tcard_number">
                    <h3>{(idx + 1).toString().padStart(2, '0')}</h3>
                    <h2 className="tcard_title">{project.title}</h2>
                    <button
                      type="button"
                      className="card_changebtn text_changeBtn"
                      onClick={() => handleCardSwap(idx)}
                    >
                      Preview{' '}
                      <ArrowClockwise size={19} className="mode_change" />
                    </button>
                  </div>

                  <div className="card_detail">
                    <p className="main_detail">
                      {project.description.split('\n\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                          <br />
                        </React.Fragment>
                      ))}
                    </p>

                    <ul className="sub_detail">
                      {project.tags.map((tag, idx) => (
                        <li key={idx}>{tag}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail_viewbtn">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW
                    </a>
                  </div>
                </div>

                <div className="project_icard">
                  <div className="project_icardwrap">
                    <img
                      src={project.img}
                      alt={`${project.title} 메인 이미지`}
                    />
                    <button
                      type="button"
                      className="card_changebtn img_btn"
                      onClick={() => handleCardSwap(idx)}
                    >
                      Return{' '}
                      <ArrowClockwise size={19} className="mode_change" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default Project;
