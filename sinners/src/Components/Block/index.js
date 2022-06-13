import dirtLeft from "../../assets/dirt1.png";
import dirtMiddle from "../../assets/dirt2.png";
import dirtRight from "../../assets/dirt3.png";
import box from "../../assets/box.png";
import player from "../../assets/hero.png";
import tom from "../../assets/tom.png";
import water from "../../assets/water.png";
import Box from "../Box";
import EmptyBlock from "../EmptyBlock";
import Player from "../../Containers/Player";
import Tom from "../Tom";
import { BLOCK } from "./type";

const Block = ({ tile, x, y }) => {
  switch (tile) {
    case BLOCK.EMPTY:
      return <EmptyBlock x={x} y={y} />;
    case BLOCK.DIRT_LEFT:
      return <Box x={x} y={y} background={dirtLeft} />;
    case BLOCK.DIRT_MIDDLE:
      return <Box x={x} y={y} background={dirtMiddle} />;
    case BLOCK.DIRT_RIGHT:
      return <Box x={x} y={y} background={dirtRight} />;
    case BLOCK.PLAYER:
      return <Player x={x} y={y} background={player} key={"player"} />;
    case BLOCK.BOX:
      return <Box x={x} y={y} background={box} />;
    case BLOCK.WATER:
      return <Box x={x} y={y} background={water} />;
    case BLOCK.TOM:
      return <Tom x={x} y={y} background={tom} />;
    default:
      return <EmptyBlock x={x} y={y} />;
  }
};

export default Block;
