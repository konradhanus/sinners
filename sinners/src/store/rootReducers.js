import { combineReducers } from "redux";
import counterReducer from "../Containers/Counter/reducer";
import scoreReducer from "../Containers/Score/reducer";

const rootReducer = () =>
  combineReducers({
    counter: counterReducer,
    score: scoreReducer,
  });

export default rootReducer;
