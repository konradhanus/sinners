import React from "react";
import { Provider } from "react-redux";
import configureStore, { sagaMiddleware } from "./store";
import Game from "./Containers/Game";
import initSagas from "./store/initSaga";

const store = configureStore();

initSagas(sagaMiddleware);

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
