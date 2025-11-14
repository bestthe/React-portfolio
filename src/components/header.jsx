import React from 'react';
import logo from '../assets/logo.png';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div className="header_wrap">
        <h1 className="header_logo">
          <a href="/">Web Publisher Portfolio</a>
        </h1>
        <ul className="header_nav">
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">WORK</a>
          </li>
          <li>
            <a href="/">PROJECT</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
