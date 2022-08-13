import platformCollisionDetection from './platformCollisionDetection';
import ifGameOver from './ifGameOver';
import drawPlatforms from './drawPlatforms';
import drawGenericsObjects from './drawGenericObjects';
import parallaxEffect from './parallaxEffect';
import drawPlayfield from './drawPlayfield';

import { toast } from 'react-hot-toast';
let frameCounter = 0;
let time = 0;
let FPS = 0;

const animate = (gameOver, buttonStart, state, keys, playerSpeed, scrollOffset, timmy) => {
    let gameOver2 = gameOver;
    frameCounter++;
    if (state.player.position.y > state.canvasState.height) {
      if (!gameOver2) {
        toast.error("You lose");
        buttonStart.click();
        gameOver2 = true;
      }

    }

    requestAnimationFrame((timmy) => animate(gameOver2, buttonStart, state, keys, playerSpeed, scrollOffset, timmy));

    drawPlayfield(state.ctxState, state.canvasState);
    drawGenericsObjects(state.genericObjects);

    if (state.player !== undefined && state.platforms !== undefined) {
      state.player.update();
      parallaxEffect(keys, state.player, playerSpeed, scrollOffset, state.platforms, state.genericObjects)
      platformCollisionDetection(state.platforms, state.player);
      ifGameOver(scrollOffset, gameOver);
    }

    drawPlatforms(state.platforms);


    // if(!lastCalledTime) {
    //   lastCalledTime = performance.now();
    //   fps = 0;
    //   return;
    // }
    // let delta = (performance.now() - lastCalledTime)/1000;
    // lastCalledTime = performance.now();
    // fps = 1/delta;
    // console.log(fps);
    // if(timmy){
     
    //   let diff = timmy - frameCounter;
    //   console.log(timmy, diff, frameCounter);
    //   state.stats.draw(diff);
    // }
    // timy - liczba renderow

    if(performance.now() - time >= 500)
    {
      time = performance.now();
      FPS = frameCounter*2;
      frameCounter = 0;
    }
    state.stats.draw(`${FPS} fps`, 
    `left: ${keys.left.pressed}`,
    `right ${keys.right.pressed}`, 
    `${scrollOffset}`
    )
  }

export default animate;