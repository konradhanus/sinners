import dirtLeft from "../assets/dirt1.png";
import dirtMiddle from "../assets/dirt2.png";
import dirtRight from "../assets/dirt3.png";
import box from "../assets/box.png";
import player from "../assets/hero.png";
import tom from "../assets/tom.png";
import water from "../assets/water.png";
import Box from "../Components/Box";
import EmptyBlock from "../Components/EmptyBlock";
import Player from "../Containers/Player";
import Tom from "../Components/Tom";
import { BLOCKS } from "./type";

const renderBlock = (tile, x, y) => {
  switch (tile) {
    case BLOCKS.EMPTY:
      return <EmptyBlock x={x} y={y} />;
    case BLOCKS.DIRT_LEFT:
      return <Box x={x} y={y} background={dirtLeft} />;
    case BLOCKS.DIRT_MIDDLE:
      return <Box x={x} y={y} background={dirtMiddle} />;
    case BLOCKS.DIRT_RIGHT:
      return <Box x={x} y={y} background={dirtRight} />;
    case BLOCKS.PLAYER:
      return <Player x={x} y={y} background={player} key={"player"} />;
    case BLOCKS.BOX:
      return <Box x={x} y={y} background={box} />;
    case BLOCKS.WATER:
      return <Box x={x} y={y} background={water} />;
    case BLOCKS.TOM:
      return <Tom x={x} y={y} background={tom} />;
    default:
      return <EmptyBlock x={x} y={y} />;
  }
};

export default renderBlock;
