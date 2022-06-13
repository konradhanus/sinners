import Block from "../Block";

const Board = ({ level }) =>
  level.map((row, x) =>
    row.map((tile, y) => <Block tile={tile} x={x} y={y} />)
  );

export default Board;
