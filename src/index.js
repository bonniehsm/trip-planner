import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/";
import App from "./js/components/container/App"
import { addTrip } from "./js/actions";

/** TESTING REDUX **/

window.store = store;
window.addTrip = addTrip;
store.subscribe(() => console.log("Action dispatched!"));



render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
