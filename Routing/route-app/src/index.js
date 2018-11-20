import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import One from "./One";
import Two from "./Two";
import Third from "./Third";
import Four from "./Four";
import Fourpointone from "./Fourpointone";
import NoMatch from "./404Found";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/One" component={One} />
      <Route path="/Two" component={Two} />
      <Route path="/Third" component={Third} />
      <Route path="/Four" component={Four}>
        <Route path="/Four/:id" component={Fourpointone} />
      </Route>
      <Route path="*" component={NoMatch} />
    </div>
  </BrowserRouter>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
