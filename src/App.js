import React from 'react';

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Navbar />
        <Menu />
      </div>
    );
  }

}

export default App;
