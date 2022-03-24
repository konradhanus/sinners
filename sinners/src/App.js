import React, { useState, useCallback } from "react";
import Platform from "./Components/Platform";
import level1 from "./levels/level1";
import renderBlock from "./helpers/renderBlock";
import Header from "./Containers/Header";
import { Provider } from "react-redux";
import configureStore from "./store";
import ExtremeButton from "./Containers/Buttons/ExtremeButton";
const store = configureStore();

function App() {
  const [likes, setLike] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const clickLike = useCallback(() => {
    setLike(likes + 1);
  }, [likes]);

  const clickDisLike = useCallback(() => {
    setDislikes(dislikes - 1);
  }, [dislikes]);

  const doNothing = useCallback(() => {}, []);

  console.log("my State", likes);
  return (
    <Provider store={store}>
      <Header />
      <Platform>
        {level1.map((row, x) => row.map((tile, y) => renderBlock(tile, x, y)))}
      </Platform>
      <div>
        <ExtremeButton count={likes} callback={clickLike}>
          i like you
        </ExtremeButton>

        <ExtremeButton count={dislikes} callback={clickDisLike}>
          i hate you
        </ExtremeButton>

        {Array.from(Array(10).keys()).map(() => (
          <ExtremeButton count={0} callback={doNothing}>
            do nothing
          </ExtremeButton>
        ))}
      </div>
    </Provider>
  );
}

export default App;
