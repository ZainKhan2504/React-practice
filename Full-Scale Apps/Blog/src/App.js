import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MainBody from "./Component/MainBody";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <MainBody />
        <Footer />
      </div>
    );
  }
}

export default App;
