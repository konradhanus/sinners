import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore, { sagaMiddleware } from "./store";
import Game from "./Containers/Game";
import initSagas from "./store/initSaga";
import { Provider as ContextProvider } from "./context";
import useInterval from "./hooks/useInterval";

const store = configureStore();

initSagas(sagaMiddleware);

function App() {
  const [time, setTime] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setTime(time + 1);
  }, 16);

  return (
    <ReduxProvider store={store}>
      <ContextProvider value={{ time }}>
        <Game />
      </ContextProvider>
    </ReduxProvider>
  );
}

export default App;
