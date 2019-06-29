import { createStore } from "redux";
import rootReducer from "../reducers/index";

//the state of the application lives as a single, immutable object within the store
//as soon as the store receives an action, it triggers the reducer
//the reducer returns the next state
const store = createStore(rootReducer);

export default store;
