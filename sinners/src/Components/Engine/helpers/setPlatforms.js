import { BLOCK } from "../../Block/type";
import Platform from '../Objects/Platform';
import { blockWidth } from "../globals/config";
import createImage from './createImage';
import switchTile from './switchTile';

function setPlatforms(level, ctx, canvas) {

    const levelPlatforms = level.map((row,rowId)=>(
        row.map((block,colId)=>{
        if(
            block !== BLOCK.EMPTY && 
            block !== BLOCK.WATER && 
            block !== BLOCK.STAR && 
            block !== BLOCK.PLAYER && 
            block !== BLOCK.ENEMY)
        {
            return new Platform(ctx, canvas, blockWidth*colId, blockWidth*rowId, createImage(switchTile(block)), blockWidth, block);
        }
        })
    )).flatMap(n=>n).filter(f=>f!=undefined);

  return levelPlatforms;
}

export default setPlatforms;