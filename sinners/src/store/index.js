import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducers";

// @ts-ignore: REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware());

const store = (preloadedState) =>
  createStore(rootReducer(), preloadedState, middleware);

export default store;
