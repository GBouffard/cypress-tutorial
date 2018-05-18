import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cypress React Tutorial</h1>
        </header>

        <p className="App-intro">
          A simple tutorial to test Cypress!
        </p>

        <Link
          to='/my-other-page'>
          Get to the other page
        </Link>

      </div>
    );
  }
}

export default App;
