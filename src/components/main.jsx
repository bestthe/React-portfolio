import React from 'react';
import '../styles/main.css';

function Main() {
  const lines = ['lt', 'lb', 'rt', 'rb'];

  return (
    <section id="main">
      <div className="main_wrap">
        {lines.map((dir) => (
          <div key={dir} className={`main_line ${dir}`}></div>
        ))}
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
