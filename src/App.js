import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/parallax';
import GenderChart from './components/charts/genderChart'

class App extends Component {

  render() {
    return (

        <div className="App">
            <Navbar/>
            <Parallax/>
        </div>
    );
  }
}

export default App;
