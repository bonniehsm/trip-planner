import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "../reducers/index";

const middlewares = [thunk, logger];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares))
);

export default store;
