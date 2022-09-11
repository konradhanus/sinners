import { BLOCK } from "../../Block/type";
import Stats from '../Objects/Stats';
import Score from '../Objects/Score';
import Player from '../Objects/Player';
import Platform from '../Objects/Platform';
import Enemy from '../Objects/Enemy';
import GenericObject from '../Objects/GenericObject';
import {  blockWidth } from "../globals/config";
import createImage from './createImage';
import background from '../../../assets/background.png';
import wizard from '../heroes/wizard';
import soldier from '../heroes/soldier';
import barbarian from '../heroes/barbarian';
import enemy from '../heroes/enemy';
import GameOver from "../Objects/GameOver";
import setPlatforms from "./setPlatforms";
export default (canvas, ctx, level, state, hero) => {


   

    const levelPlatforms = setPlatforms(level, ctx, canvas);

    const selectedHero = hero === 1 ? barbarian : hero === 2 ? wizard : hero === 3 ? soldier : barbarian;
    const g1 = new GenericObject(ctx, canvas, 0, 0, createImage(background))
    const genericObjects = [g1]
    const p =  new Player(ctx, canvas, selectedHero, blockWidth);
    const s = new Stats(ctx, canvas);
    const score = new Score(ctx, canvas);
    const g = new GameOver(ctx, canvas);

    const enemies = level.map((row,rowId)=>(
      row.map((block,colId)=>{
        if(block === BLOCK.ENEMY)
        {
          return new Enemy(ctx, canvas, enemy, blockWidth*colId, blockWidth*rowId, blockWidth);
        }
      })
    )).flatMap(n=>n).filter(f=>f!=undefined);

    state.setPlatforms(levelPlatforms);
    state.setPlayer(p);
    state.setGenericObjects(genericObjects);
    state.setCtxState(ctx);
    state.setCanvasState(canvas);
    state.setStats(s);
    state.setScore(score);
    state.setEnemies(enemies);
    state.setGameOver(g);

    p.update();
    enemies.map((e)=>{
      e.update();
    })    
}