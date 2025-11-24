import React from 'react';
import 'animate.css';
import '../styles/header.css';

function Header({ scrollSection, refs }) {
  const menu = [
    { label: 'ABOUT', ref: refs.aboutRef },
    { label: 'WORK', ref: refs.workRef },
    { label: 'PROJECT', ref: refs.projectRef },
    { label: 'CONTACT', ref: refs.contactRef },
  ];

  return (
    <header>
      <div className="header_wrap">
        <h1 className="header_logo">
          <a href="/">Web Publisher Portfolio</a>
        </h1>
        <ul className="header_nav animate__animated animate__fadeIn animate__faster">
          {menu.map((item) => (
            <li key={item.label} onClick={() => scrollSection(item.ref)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
