import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render(){
      // Step1: Create Reducer: state and action
      const reducer = (state, action) => {
        if (action.type === "ATTACK") {
          return action.payload
        }
        return state;
      }
      // Step2: Create Store: reducer and state
      const store = createStore(reducer, "Peace");
      // Step3: Subscribe
      store.subscribe(() => {
        console.log("Store is now", store.getState())
      })
      // Step4: Dispatch action
      store.dispatch({type: "ATTACK", payload: "Iron Man"})
    return(
      <div>
        Test
      </div>
    );
  }
}
export default ReduxDemo;
