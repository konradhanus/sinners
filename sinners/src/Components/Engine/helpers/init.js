import { BLOCK } from "../../Block/type";
import Stats from '../Stats';
import Player from '../Player';
import Platform from '../Platform';
import GenericObject from '../GenericObject';
import {  blockWidth } from "../config";
import createImage from './createImage';
import switchTile from './switchTile';
import background from '../../../assets/background.png';
import wizard from '../heroes/wizard';
import soldier from '../heroes/soldier';
import barbarian from '../heroes/barbarian';

export default (canvas, ctx, level, state) => {

    const levelPlatforms = level.map((row,rowId)=>(
      row.map((block,colId)=>{
        // console.log(`${block}-${rowId}:${colId}`);
        if(
          block !== BLOCK.EMPTY && 
          block !== BLOCK.WATER && 
          block !== BLOCK.STAR && 
          block !== BLOCK.PLAYER && 
          block !== BLOCK.POKEMON)
        {
          return new Platform(ctx, canvas, blockWidth*colId, blockWidth*rowId, createImage(switchTile(block)), blockWidth, block);
        }
      })
    )).flatMap(n=>n).filter(f=>f!=undefined);

    // console.log(levelPlatforms);
    
    const g1 = new GenericObject(ctx, canvas, 0, 0, createImage(background))
    const genericObjects = [g1]
    const p =  new Player(ctx, canvas, barbarian, blockWidth);
    const s = new Stats(ctx, canvas)
   
    state.setPlatforms(levelPlatforms);
    state.setPlayer(p);
    state.setGenericObjects(genericObjects);
    state.setCtxState(ctx);
    state.setCanvasState(canvas);
    state.setStats(s);
    p.update();
    return p;
    
}