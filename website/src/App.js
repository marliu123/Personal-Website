import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
