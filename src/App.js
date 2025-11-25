import { React, useEffect, useState, useRef } from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Work from './components/work';
import Project from './components/project';
import Contact from './components/contact';
import FloatingButtons from './components/FloatingButtons';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    }, 100);
  }, []);

  return (
    <div className={`App ${isScrolled ? 'action' : ''}`}>
      <Header
        scrollSection={scrollSection}
        refs={{ aboutRef, workRef, projectRef, contactRef }}
      />
      <Main />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <FloatingButtons />
    </div>
  );
}

export default App;
