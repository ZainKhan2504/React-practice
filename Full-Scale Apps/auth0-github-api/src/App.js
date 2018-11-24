import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Auth0Lock from "auth0-lock";
import Github from "./Github";
import Header from "./Component/Header";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      idToken: "",
      profile: {}
    };
    this.showLock = this.showLock.bind(this);
    this.logout = this.logout.bind(this);
  }
  static defaultProps = {
    clientID: "x6Wcwn0RZ31VvQcxxiCV7mE9DVIo3xEo",
    domain: "zainkhan2504.auth0.com"
  }
  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }
        this.setProfile(authResult.idToken, profile);
      });
    });
    this.getProfile();
  }
  setProfile(idToken, profile){
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("profile", JSON.strigify(profile));
    this.setState({
      idToken: localStorage.getItem("idToken"),
      profile: JSON.parse(localStorage.getItem("profile"))
    });
  }
  getProfile(){
    if (localStorage.getItem("idToken") != null) {
      this.setState({
        idToken: localStorage.getItem("idToken"),
        profile: JSON.parse(localStorage.getItem("profile"))
      }, () => {
        console.log(this.state);
      });
    }
  }
  showLock(){
    this.lock.show();
  }
  logout(){
    this.setState({
      idToken: "",
      profile: ""
    }, () => {
      localStorage.removeItem("idToken");
      localStorage.removeItem("profile");
    });
  }
  render() {
    let git;
    if (this.state.idToken) {
      git = <Github />
    } else {
       git = "Click on Login to Viewer";
    }
    return (
      <div className="App">
        <Header lock={this.lock} idToken={this.state.idToken} onLogout={this.logout} onLogin={this.showLock}/>
        {git}
      </div>
    );
  }
}

export default App;
