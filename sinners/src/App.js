import Platform from "./Components/Platform";
import level1 from "./levels/level1";
import renderBlock from "./helpers/renderBlock";
import Counter from "./Containers/Counter";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Platform>
        {level1.map((row, x) => row.map((tile, y) => renderBlock(tile, x, y)))}
      </Platform>
    </Provider>
  );
}

export default App;
