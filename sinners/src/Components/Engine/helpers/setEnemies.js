
import Enemy from "../Objects/Enemy";
import { BLOCK } from "../../Block/type";
import enemy from '../heroes/enemy';
import { blockWidth } from "../globals/config";

function setEnemies(level, ctx, canvas){
   
    return level.map((row,rowId)=>(
        row.map((block,colId)=>{
          if(block === BLOCK.ENEMY)
          {
            return new Enemy(ctx, canvas, enemy, blockWidth*colId, blockWidth*rowId, blockWidth);
          }
        })
      )).flatMap(n=>n).filter(f=>f!=undefined);
}
export default setEnemies;