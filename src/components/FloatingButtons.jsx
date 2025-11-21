import React from 'react';
import { ChatFill, ArrowUp } from 'react-bootstrap-icons';
import '../styles/FloatingButtons.css';

function FloatingButtons() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="floatingButtons">
      <button type="button" className="floatingBtn topBtn" onClick={scrollTop}>
        <ArrowUp size={25} color="#fff" />
      </button>
      <button type="button" className="floatingBtn chatBtn">
        <ChatFill size={25} color="#fff" />
      </button>
    </div>
  );
}

export default FloatingButtons;
