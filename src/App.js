import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartBox from './containers/ChartBox.js';
import record from './record.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={record} className="App-logo" alt="logo" />
          <h1 className="App-title">iTunes Top 20</h1>
        </header>
        <ChartBox />
      </div>
    );
  }
}

export default App;
