import React from 'react';
import { ChatFill, ArrowUp } from 'react-bootstrap-icons';
import '../styles/FloatingButtons.css';

function FloatingButtons() {
  return (
    <div id="floatingButtons">
      <button type="button" className="floatingBtn topBtn">
        <ArrowUp size={25} color="#fff" />
      </button>
      <button type="button" className="floatingBtn chatBtn">
        <ChatFill size={25} color="#fff" />
      </button>
    </div>
  );
}

export default FloatingButtons;
