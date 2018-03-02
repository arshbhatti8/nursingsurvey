import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './components/homepagelayout/homepageLayout';
import {ResponsiveContainer} from 'semantic-ui-react';

class App extends Component {

  render() {
    return (

        <div className="App">
            <HomepageLayout/>
        </div>
    );
  }
}

export default App;
