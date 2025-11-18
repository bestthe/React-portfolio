import React from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Work from './components/work';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Work />
    </div>
  );
}

export default App;
