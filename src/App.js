import React, { Component } from 'react';
import logo from './logo.svg';
import Page1 from './page1/page1.js';
import Button from './Button/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Page1> </Page1>
          <Button></Button>
      </div>
    );
  }
}

export default App;
