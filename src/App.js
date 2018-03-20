import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './components/homepagelayout/homepageLayout';
import Radium from 'radium';

class App extends Component {

  render() {
    return (

        <div className="App">
            <HomepageLayout/>
        </div>
    );
  }
}

export default Radium(App);
