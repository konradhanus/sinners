import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducers";

export const sagaMiddleware = createSagaMiddleware();
// @ts-ignore: REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = (preloadedState) =>
  createStore(rootReducer(), preloadedState, middleware);

export default store;
