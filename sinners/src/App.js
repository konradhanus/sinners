import Platform from "./Components/Platform";
import level1 from "./levels/level1";
import renderBlock from "./helpers/renderBlock";
import Header from "./Containers/Header";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Platform>
        {level1.map((row, x) => row.map((tile, y) => renderBlock(tile, x, y)))}
      </Platform>
    </Provider>
  );
}

export default App;
