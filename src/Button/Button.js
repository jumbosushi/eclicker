import React, { Component } from 'react';
import './Button.css';
import * as firebase from "firebase";

class Button extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDkjlJoN-_dMm8B5Nn8qbJEODr4qJjNWJs",
      authDomain: "eclicker-a1b75.firebaseapp.com",
      databaseURL: "https://eclicker-a1b75.firebaseio.com",
      storageBucket: "eclicker-a1b75.appspot.com",
      messagingSenderId: "15294695308"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="Button">
        <div className="container">
          <a className="button-t" href="#">tweet</a>
        </div>
      </div>
    );
  }
}

export default Button;
