import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/One">One</Link></li>
          <li><Link to="/Two">Two</Link></li>
          <li><Link to="/Third">Third</Link></li>
          <li><Link to="/Four">Four</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
