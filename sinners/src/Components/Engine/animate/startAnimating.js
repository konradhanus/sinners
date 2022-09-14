import { playerSpeed, scrollOffset, windowWidth, windowHeight } from "../globals/config";
import  animate from './';

let fpsInterval, startTime, then;

export function startAnimating(fps, gameOver, state, keys) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    // console.log(startTime);
    animate(gameOver, state, keys, playerSpeed, scrollOffset, fpsInterval, then, startTime);
  }