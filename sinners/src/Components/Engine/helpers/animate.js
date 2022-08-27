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
let time2 = 0;


let stop = false;
let frameCount = 0;
// let $results = $("#results");
let fps, fpsInterval, startTime, now, then, elapsed;

export function startAnimating(fps, gameOver, buttonStart, state, keys, playerSpeed, scrollOffset) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  console.log(startTime);
  animate(gameOver, buttonStart, state, keys, playerSpeed, scrollOffset);
}


const animate = (gameOver, buttonStart, state, keys, playerSpeed, scrollOffset) => {


    // stop
    if (stop) {
      return;
    }

    let gameOver2 = gameOver;
    frameCounter++;
    if (state.player.position.y > state.canvasState.height) {
      if (!gameOver2) {
         stop = true;
       
       
        buttonStart.click();
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
    requestAnimationFrame(()=>animate(gameOver2, buttonStart, state, keys, playerSpeed, scrollOffset));
    
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

    // if(performance.now() >= time + 1000)
    // {
    //   time = performance.now();
    //   FPS = frameCounter;
    //   frameCounter = 0;
    // }


    let sinceStart = now - startTime;
    let currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
    // $results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");
    state.stats.draw(`${currentFps} fps`, 
    `left: ${keys.left.pressed}`,
    `right ${keys.right.pressed}`, 
    `${performance.now()-time}`
    // `${scrollOffset}`
    )
  }

  }

export default animate;