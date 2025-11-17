import React from 'react';
import '../styles/header.css';

function Header() {
  const menu = ['ABOUT', 'WORK', 'PROJECT', 'CONTACT'];

  return (
    <header>
      <div className="header_wrap">
        <h1 className="header_logo">
          <a href="/">Web Publisher Portfolio</a>
        </h1>
        <ul className="header_nav">
          {menu.map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
