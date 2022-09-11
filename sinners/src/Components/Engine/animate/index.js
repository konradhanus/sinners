import platformCollisionDetection from './platformCollisionDetection';
import enemyColistionDetection from './enemyColistionDetection';
import ifGameOver from '../helpers/ifGameOver';
import drawPlatforms from '../draw/drawPlatforms';
import drawGenericsObjects from '../draw/drawGenericObjects';
import parallaxEffect from './parallaxEffect';
import drawPlayfield from '../draw/drawPlayfield';
import drawEnemies from '../draw/drawEnemies';

import { toast } from 'react-hot-toast';
import setData from '../../../helpers/setData';

const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');
const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, animals] }).replace('_', ' ').replace('_', ' ').toUpperCase(); // big_red_donkey


let frameCounter = 0;
let score = 0;
let lives = 1;
let stop = false;
let end = false;
let save = false;
let frameCount = 0;
// let $results = $("#results");
let fps, fpsInterval, startTime, now, then, elapsed;

export function startAnimating(fps, gameOver, state, keys, playerSpeed, scrollOffset) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  // console.log(startTime);
  animate(gameOver, state, keys, playerSpeed, scrollOffset);
}

const i = 100;
const animate = (gameOver, state, keys, playerSpeed, scrollOffset) => {

    // stop
    if (stop) {
       state.gameOver.draw(()=>{lives = lives -1;}).then(()=>{
          end = true;
       });
      // // toast.error("You lose");
      // i = i-1;
      // i > 0 && requestAnimationFrame(()=>animate(false, buttonStart, state, keys, playerSpeed, scrollOffset));
    }
    
    if(end)
    {
      if(!save)
      {
        save = true;
        console.log('aaa');
        setData(score, randomName)
      }  
      return;
    }
    {

    let gameOver2 = gameOver;
    frameCounter++;
    if (state.player.position.y > state.canvasState.height) {
      if (!gameOver2) {
         stop = true;
       
       
      
        gameOver2 = true;
        state.player.position = {
          x: state.player.defaultPosition.x,
          y: state.player.defaultPosition.y
        }

        if(gameOver2 === true)
        {
          toast.error("You lose");
        }
      }

    }

    // request another frame
    requestAnimationFrame(()=>animate(gameOver2, state, keys, playerSpeed, scrollOffset));
    
    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {

      // Get ready for next frame by setting then=now, but...
      // Also, adjust for fpsInterval not being multiple of 16.67
      then = now - (elapsed % fpsInterval);

      // draw stuff here
   

    drawPlayfield(state.ctxState, state.canvasState);
    drawGenericsObjects(state.genericObjects);
    

    if (state.player !== undefined && state.platforms !== undefined) {
      state.player.update();
      parallaxEffect(keys, state.player, playerSpeed, scrollOffset, state.platforms, state.genericObjects, state.enemies)
      platformCollisionDetection(state.platforms, state.player);
      
      stop = ifGameOver(
        scrollOffset, 
        gameOver, 
        state.player, 
        state.enemies);

    }

    if(state.player !== undefined && state.enemies !== undefined)
    {
      // console.log('a', state.enemies)
      enemyColistionDetection(
          state.enemies, 
          state.player, 
          state.platforms, 
          ()=>{ score = score+100});
    }

    state.enemies.map((e)=>{
      e.update();
    })
    // console.log('e', state.enemies)
    drawEnemies(state.enemies);
    drawPlatforms(state.platforms);
    
    
    if(state.player.velocity.y === 0)
    {
      keys.up.onFly = false;
    }
   
    let sinceStart = now - startTime;
    let currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
    state.stats.draw(`${currentFps} fps`, 
    `position: ${state.player.position.y}`,
    `right ${keys.right.pressed}`, 
    `up ${keys.up.pressed}, onFly ${keys.up.onFly}`,
    );

    state.score.draw('SCORE', score, 'YOUR NAME',randomName, 'TIME', Math.round(400-sinceStart/1000,2), 'LIVES', lives)
  }
}

  }

export default animate;