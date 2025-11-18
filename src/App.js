import React from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
