import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './page1/page1'
import Button from './Button/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Eclicker</h2>
        </div>
        <Button></Button>
        <p className="App-intro">
        </p>
        <NewComponent></NewComponent>
      </div>
    );
  }
}

export default App;
