import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/parallax';
class App extends Component {

  render() {
    return (
      <div className="App">
          <Parallax/>
          <Navbar/>
      </div>
    );
  }
}

export default App;
