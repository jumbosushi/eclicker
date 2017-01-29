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
    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();

    // Create a storage reference from our storage service
    var storageRef = storage.ref();

    // Create a child reference
    var imagesRef = storageRef.child('images');
    // imagesRef now points to 'images'

    // Child references can also take paths delimited by '/'
    var spaceRef = storageRef.child('images/space.jpg');
    // spaceRef now points to "images/space.jpg"
    // imagesRef still points to "images"
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
