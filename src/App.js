import React from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Work from './components/work';
import Project from './components/project';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Work />
      <Project />
    </div>
  );
}

export default App;
