import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from "./Component/Coursesales";

class App extends Component {
  render() {
    var courses = [
      { name: "Complete IOS10 dev course ", price: 199},
      { name: "Complete pentesting course ", price: 299},
      { name: "Complete front end dev course ", price: 399},
      { name: "Complete bug bounty and web app pentesting ", price: 499}
    ];
    return (
      <div className="App">
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
