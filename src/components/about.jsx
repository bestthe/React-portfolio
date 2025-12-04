import React, { forwardRef, useEffect } from 'react';
import '../styles/about.css';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import meImg from '../assets/me.png';
import htmlImg from '../assets/HTML.png';
import cssImg from '../assets/CSS.png';
import jsImg from '../assets/JavaScript.png';
import jqueryImg from '../assets/jQuery.png';
import figmaImg from '../assets/Figma.png';
import reactImg from '../assets/React.png';
import notionImg from '../assets/Notion.png';
import githubImg from '../assets/Github.png';

const About = forwardRef((props, ref) => {
  const skills = [
    { src: htmlImg, alt: 'HTML 아이콘' },
    { src: cssImg, alt: 'CSS 아이콘' },
    { src: jsImg, alt: 'JavaScript 아이콘' },
    { src: jqueryImg, alt: 'jQuery 아이콘' },
    { src: figmaImg, alt: 'Figma 아이콘' },
    { src: reactImg, alt: 'React 아이콘' },
    { src: notionImg, alt: 'Notion 아이콘' },
    { src: githubImg, alt: 'GitHub 아이콘' },
  ];

  return (
    <section id="about" ref={ref}>
      <div className="about_wrap section_pd">
        <h2 data-aos="fade-in" className="section_title">
          ABOUT
        </h2>

        <div className="about_content">
          <div className="right_content">
            <div data-aos="fade-right" className="about_image">
              <img src={meImg} alt="나를 대신하는 캐릭터 이미지" />
            </div>
            <div data-aos="fade-up" className="skills">
              <h3>SKILLS</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.alt}>
                    <img src={skill.src} alt={skill.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="left_content">
            <div data-aos="fade-in" className="about_me">
              <h3>ABOUT ME</h3>
              <p>
                안녕하세요! 1년 7개월 차 웹퍼블리셔 박현수입니다.
                <br />
                <br />
                HTML, CSS, JavaScript를 기반으로 반응형 웹과 크로스브라우징을
                고려한 퍼블리싱 작업을 진행하며, 프로젝트마다 코드 구조와 성능
                최적화를 신경 쓰는 것을 중요하게 생각합니다.
                <br />
                <br />
                UI/UX 기획을 이해하고 구현하는 과정에서 사용자의 흐름을
                자연스럽게 연결하고, 정확하고 깔끔한 마크업과 스타일 링으로
                프로젝트 완성도를 높이는 것을 목표로 하고 있습니다.
                <br />
                <br />
                새로운 웹 기술과 브라우저 환경 변화에도 빠르게 적응하며,
                효율적이고 안정적인 웹 환경을 제공하는 퍼블리셔로 성장하고자
                합니다.
              </p>
              <a
                href="https://www.notion.so/29bedab835e080b495abebab29262c20?source=copy_link"
                className="more"
                target="_blank"
              >
                자기소개 더보기 <ArrowRightCircleFill />
              </a>
            </div>

            <div data-aos="fade-up" className="education">
              <h3>EDUCATION</h3>
              <ul>
                <li>
                  2022.07 - 2022.11 UI/UX 반응형 웹 디자인 & 웹 퍼블리셔 수료 -
                  그린컴퓨터아트
                </li>
                <li>2022.10 QTQ 1급 자격증 취득</li>
                <li>2022.02 웹디자인기능사 자격증 취득</li>
                <li>2016.02 - 2021.08 여주대학교 보건의료행정과 졸업</li>
              </ul>
            </div>

            <div data-aos="fade-up" className="work_experience">
              <h3>WORK EXPERIENCE</h3>
              <ul>
                <li>2023.03 - 2024.10 에이치디자인</li>
                <li>2021.02 - 2022.02 새길병원</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
