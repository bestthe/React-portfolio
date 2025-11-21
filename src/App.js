import { React, useEffect, useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Work from './components/work';
import Project from './components/project';
import Contact from './components/contact';
import FloatingButtons from './components/FloatingButtons';
import './index.css';

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

  return (
    <div className={`App ${isScrolled ? 'action' : ''}`}>
      <Header />
      <Main />
      <About />
      <Work />
      <Project />
      <Contact />
      <FloatingButtons />
    </div>
  );
}

export default App;
