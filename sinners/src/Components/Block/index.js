import dirtLeft from "../../assets/dirt1.png";
import dirtMiddle from "../../assets/dirt2.png";
import dirtRight from "../../assets/dirt3.png";
import box from "../../assets/box.png";
import player from "../../assets/hero.png";
import star from "../../assets/star.png";
import tom from "../../assets/tom.png";
import water from "../../assets/water.png";
import Box from "../Box";
import EmptyBlock from "../EmptyBlock";
import Player from "../../Containers/Player";
import Star from "../Star";
import Tom from "../Tom";
import { BLOCK } from "./type";
import Pokemon from "../../Containers/Pokemon";
import { connect } from "react-redux";

const Block = ({ tile, x, y, pokemonSprite }) => {
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
    case BLOCK.POKEMON:
      return (
        <Pokemon
          x={x}
          y={y}
          background={
            pokemonSprite.sprites ? pokemonSprite.sprites.front_default : null
          }
          scale={2}
        />
      );
    case BLOCK.STAR:
      return <Star x={x} y={y} background={star} />;
    default:
      return <EmptyBlock x={x} y={y} />;
  }
};

const mapStateToProps = (state) => {
  return {
    pokemonSprite: state.pokemon,
  };
};

export default connect(mapStateToProps)(Block);
