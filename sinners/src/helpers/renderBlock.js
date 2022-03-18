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

const renderBlock = (tile, x, y) => {
  switch (tile) {
    case 0:
      return <EmptyBlock x={x} y={y} />;
    case 1:
      return <Box x={x} y={y} background={dirtLeft} />;
    case 2:
      return <Box x={x} y={y} background={dirtMiddle} />;
    case 3:
      return <Box x={x} y={y} background={dirtRight} />;
    case 4:
      return <Player x={x} y={y} background={player} />;
    case 5:
      return <Box x={x} y={y} background={box} />;
    case 6:
      return <Box x={x} y={y} background={water} />;
    case 7:
      return <Tom x={x} y={y} background={tom} />;
    default:
      return <EmptyBlock x={x} y={y} />;
  }
};

export default renderBlock;
