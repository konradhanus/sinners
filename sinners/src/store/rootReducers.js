import { combineReducers } from "redux";
import counterReducer from "../Containers/Counter/reducer";

const rootReducer = () =>
  combineReducers({
    counter: counterReducer,
  });

export default rootReducer;
