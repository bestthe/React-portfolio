import React from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Work from './components/work';
import Project from './components/project';
import Contact from './components/contact';
import FloatingButtons from './components/FloatingButtons';
import './index.css';

function App() {
  return (
    <div className="App">
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
