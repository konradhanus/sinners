
import dirtLeft from "../../../assets/dirt1.png";
import dirtMiddle from "../../../assets/dirt2.png";
import dirtRight from "../../../assets/dirt3.png";
import box from "../../../assets/box.png";
import hero from "../../../assets/hero.png";
import hero_stand from "../../../assets/hero_stand.gif";
import star from "../../../assets/star.png";
import tom from "../../../assets/tom.png";
import water from "../../../assets/water.png";
import { BLOCK } from "../../Block/type";
import enemy from '../../../assets/tom.png';

export default (tile) => {
    switch(tile) {
    case BLOCK.DIRT_LEFT:
      return dirtLeft;
    case BLOCK.DIRT_MIDDLE:
      return dirtMiddle;
    case BLOCK.DIRT_RIGHT:
      return dirtRight;
    case BLOCK.PLAYER:
      return hero;
    case BLOCK.PLAYER_STAND:
      return hero_stand;
    case BLOCK.BOX:
      return box;
    case BLOCK.WATER:
      return water;
    case BLOCK.TOM:
      return tom;
    case BLOCK.STAR:
      return star;
    case BLOCK.POKEMON:
      return enemy;
}
};