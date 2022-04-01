import { combineReducers } from "redux";
import counterReducer from "../Containers/Counter/reducer";
import scoreReducer from "../Containers/Score/reducer";
import mapReducer from "../Containers/Map/reducer";

const rootReducer = () =>
  combineReducers({
    counter: counterReducer,
    score: scoreReducer,
    map: mapReducer,
  });

export default rootReducer;
