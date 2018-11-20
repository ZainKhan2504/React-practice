import React, { Component } from "react";
import { Link } from "react-router-dom";

class Four extends Component {
  render(){
    return(
      <div>
        <h1>Hello this is four</h1>
        <ul>
          <li><Link to="/Four/123">Four Point One</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default Four;
