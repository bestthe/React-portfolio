import React, { useState, useEffect } from 'react';
import { ChatFill, ArrowUp, X } from 'react-bootstrap-icons';
import '../styles/FloatingButtons.css';
import ChatWindow from '../components/chatwindow';

function FloatingButtons() {
  const [isChat, setIsChat] = useState(false);

  const toggleChat = () => setIsChat((prev) => !prev);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleBodyScroll = () => {
      if (isChat && window.innerWidth <= 500) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleBodyScroll();
    window.addEventListener('resize', handleBodyScroll);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleBodyScroll);
    };
  }, [isChat]);

  return (
    <>
      <div id="floatingButtons">
        <div className="chatBtn" onClick={toggleChat}>
          <button
            className={`chat_onBtn ${!isChat && 'visible'}`}
            type="button"
          >
            <ChatFill size={25} color="#fff" />
          </button>
          <button
            className={`chat_offBtn ${isChat && 'visible'}`}
            type="button"
          >
            <X size={35} color="#4f503e" />
          </button>
        </div>
        <button className="topBtn" type="button" onClick={scrollTop}>
          <ArrowUp size={25} color="#fff" />
        </button>
      </div>

      <ChatWindow isChat={isChat} toggleChat={toggleChat} />
    </>
  );
}

export default FloatingButtons;
