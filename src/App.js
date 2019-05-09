import React from 'react';

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

import './App.css';

class App extends React.Component {

  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  add = val => {
    this.setState({
      counter: this.state.counter + val,
    });
  }

  sub = val => {
    this.setState({
      counter: this.state.counter - val,
    });
  }

  render() {

    return (
      <div className="App">
        <Navbar counter={this.state.counter} />
        <Menu actions={{ increment: this.increment, decrement: this.decrement, add: this.add, sub: this.sub }} />
      </div>
    );
  }

}

export default App;
