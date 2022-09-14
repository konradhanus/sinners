import getHero from "./getHero";
import { blockWidth } from "../globals/config";
import Player from "../Objects/Player";

function setPlayer(hero, ctx, canvas){
    const selectedHero = getHero(hero);
    return new Player(ctx, canvas, selectedHero, blockWidth);
}

export default setPlayer;