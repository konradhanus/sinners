import styled from "styled-components";
import background from "./assets/background.png";
import dirtLeft from "./assets/dirt1.png";
import dirtMiddle from "./assets/dirt2.png";
import dirtRight from "./assets/dirt3.png";
import box from "./assets/box.png";
import player from "./assets/hero.png";
import tom from "./assets/tom.png";
import water from "./assets/water.png";

const settings = {
  tiles: {
    width: 50,
    height: 50,
  },
};

const level = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 1, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 5, 5, 5, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [1, 2, 2, 2, 2, 2, 2, 3, 6, 6, 6, 6, 6, 1, 2, 2, 2, 2, 2, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const renderBlock = (tile, x, y) => {
  switch (tile) {
    case 0:
      return <EmptyBlock x={x} y={y} />;
    case 1:
      return <Block x={x} y={y} background={dirtLeft} />;
    case 2:
      return <Block x={x} y={y} background={dirtMiddle} />;
    case 3:
      return <Block x={x} y={y} background={dirtRight} />;
    case 4:
      return <Player x={x} y={y} background={player} />;
    case 5:
      return <Box x={x} y={y} background={box} />;
    case 6:
      return <Water x={x} y={y} background={water} />;
    case 7:
      return <Tom x={x} y={y} background={tom} />;
    default:
      return <EmptyBlock x={x} y={y} />;
  }
};

function App() {
  return (
    <Platform>
      {level.map((row, x) => row.map((tile, y) => renderBlock(tile, x, y)))}
    </Platform>
  );
}

const Platform = styled.div`
  background: url(${background});
  position: relative;
  height: 1000px;
  width: 1000px;
`;

const Block = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  background: url(${(props) => props.background});
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
  background-size: contain;
`;

const Box = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  background: url(${(props) => props.background});
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
  background-size: contain;
`;

const Water = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  background: url(${(props) => props.background});
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
  background-size: contain;
`;

const EmptyBlock = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
`;

const Tom = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  background: url(${(props) => props.background});
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
  transition: left 1s;
  background-size: contain;
`;

const Player = styled.div`
  position: absolute;
  top: ${(props) => props.x * settings.tiles.height}px;
  left: ${(props) => props.y * settings.tiles.width}px;
  background: url(${(props) => props.background});
  width: ${settings.tiles.width}px;
  height: ${settings.tiles.height}px;
  transition: left 1s;
  background-size: contain;
`;

export default App;
