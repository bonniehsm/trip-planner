import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

//thunk - ability to write action creators that return a function instead of an action e.g. fetech data from server
const middlewares = [thunk];

//the state of the application lives as a single, immutable object within the store
  //as soon as the store receives an action, it triggers the reducer which returns the next state
//applyMiddleware - add middlewares (3rd party extension point b/w dispatching an action & the moment it reaches the reducer)
//composeWithDevTools - use redux dev tools along w/ custom middlewares
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
