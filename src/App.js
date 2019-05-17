import React from 'react';

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Results from './components/results/Results';

import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Results />
    </div>
  );

}

export default App;
