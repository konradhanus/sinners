import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Game from "./Containers/Game";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
