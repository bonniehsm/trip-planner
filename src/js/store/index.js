import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";


const middlewares = [thunk];

//the state of the application lives as a single, immutable object within the store
//as soon as the store receives an action, it triggers the reducer
//the reducer returns the next state
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
