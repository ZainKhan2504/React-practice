import React, { Component } from "react";
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCkUsCvt3uyrovQQcVCkSi7Vd9ve0volzQ",
    authDomain: "fir-login-9fbee.firebaseapp.com",
    databaseURL: "https://fir-login-9fbee.firebaseio.com",
    projectId: "fir-login-9fbee",
    storageBucket: "fir-login-9fbee.appspot.com",
    messagingSenderId: "310531508006"
  };
  firebase.initializeApp(config);

class Auth extends Component {
  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
    .then(user => {
      var lout = document.getElementById("logout");
      var err = "Welcome to website "+ email;
      this.setState({err: err});
      lout.classList.remove("hide");
    })
    .catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  signup(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
    .then(user => {
      var err = "Welcome "+ email;
      firebase.database().ref("users/"+user.uid).set({
        email: email
      });
      console.log(user);
      this.setState({err: err});
    })
    .catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  logout(){
    firebase.auth().signOut();
    var lout = document.getElementById("logout");
    var err = "Thanks for coming on our website";
    this.setState({err: err});
    lout.classList.add("hide");
  }

  google(){
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);
    promise
    .then(result => {
      var user = result.user;
      firebase.database().ref("users/"+user.uid).set({
        email: user.email,
        name: user.displayName
      });
    })
    .catch(e => {
      var msg = e.message;
      console.log(msg);
    });
  }

  constructor(props){
    super(props);

    this.state = {
      err: ""
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }
  render(){
    return(
      <div>
       <input id="email" type="email" placeholder="Enter your email" ref="email" /><br />
       <input id="password" type="password" placeholder="Enter your password" ref="password" /><br />
       <p>{this.state.err}</p>
       <button onClick={this.login}>Log In</button>
       <button onClick={this.signup}>Sign Up</button>
       <button id="logout" className="hide" onClick={this.logout}>Logout</button><br />
       <button id="google" className="google" onClick={this.google}>Sign In With Google</button>
      </div>
    );
  }
}
export default Auth;
