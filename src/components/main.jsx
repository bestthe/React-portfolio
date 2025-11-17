import React from 'react';
import '../styles/main.css';

function Main() {
  return (
    <section id="main">
      <div className="main_wrap">
        <div className="main_line lt"></div>
        <div className="main_line lb"></div>
        <div className="main_line rt"></div>
        <div className="main_line rb"></div>
        <div className="main_textbox">
          <h1>
          Web Publisher
          <br />
          Portfolio
          </h1>
          <p className="subtext">
            안녕하세요. 1년 7개월 차 웹퍼블리셔 박현수입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
