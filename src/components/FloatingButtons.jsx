import React, { useState } from 'react';
import { ChatFill, ArrowUp, X } from 'react-bootstrap-icons';
import '../styles/FloatingButtons.css';
import ChatWindow from '../components/chatwindow';

function FloatingButtons() {
  const [isChat, setIsChat] = useState(true);

  const toggleChat = () => setIsChat((prev) => !prev);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div id="floatingButtons">
        <div className="chatBtn" onClick={toggleChat}>
          <button
            className={`chat_onBtn ${isChat ? 'visible' : ''}`}
            type="button"
          >
            <ChatFill size={25} color="#fff" />
          </button>
          <button
            className={`chat_offBtn ${!isChat ? 'visible' : ''}`}
            type="button"
          >
            <X size={35} color="#4f503e" />
          </button>
        </div>
        <button className="topBtn" type="button" onClick={scrollTop}>
          <ArrowUp size={25} color="#fff" />
        </button>
      </div>

      <ChatWindow isChat={isChat} />
    </>
  );
}

export default FloatingButtons;
