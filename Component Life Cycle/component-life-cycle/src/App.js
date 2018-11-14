import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Life Cycle</h2>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      r:0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    this.setState({r: Math.floor(Math.random()*10)})
  }

  render(){
    return(
      <div>
        <p className = "App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount(){
      console.log("componentWillMount called here");
  }

  componentDidMount(){
      console.log("componentDidMount called here");
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called here");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("shouldComponentUpdate called here");
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log("componentWillUpdate called here")
  };

  componentDidUpdate(newProps, nextState){
    console.log("componentDidUpdate called here")
  };

  componentWillUnmount(){
    console.log("componentWillUnmount called here")
  };

  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
