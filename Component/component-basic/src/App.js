import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  construtor(props){
    super(props);

    this.state = {};
  }

  sayhello(name){
    return "Hello" + name;
  }
  render() {
    const myName = "Zain";
    return (
      <div className="App">
        <h2>Just some sample data: {this.sayhello("Zain")}</h2>
      </div>
    );
  }
}

export default App;
