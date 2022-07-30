import platformCollisionDetection from './platformCollisionDetection';
import ifGameOver from './ifGameOver';
import drawPlatforms from './drawPlatforms';
import drawGenericsObjects from './drawGenericObjects';
import parallaxEffect from './parallaxEffect';
import drawPlayfield from './drawPlayfield';

import { toast } from 'react-hot-toast';

const animate = (gameOver, buttonStart, player, canvasState, ctxState, genericObjects, platforms, keys, playerSpeed, scrollOffset) => {
    let gameOver2 = gameOver;

    if (player.position.y > canvasState.height) {
      if (!gameOver2) {
        toast.error("You lose");
        console.log(buttonStart);
        buttonStart.click();
        gameOver2 = true;
      }

    }

    requestAnimationFrame(() => animate(gameOver2, buttonStart, player, canvasState, ctxState, genericObjects, platforms, keys, playerSpeed, scrollOffset));
    drawPlayfield(ctxState, canvasState);
    drawGenericsObjects(genericObjects);

    if (player !== undefined && platforms !== undefined) {
      player.update();
      parallaxEffect(keys, player, playerSpeed, scrollOffset, platforms, genericObjects)
      platformCollisionDetection(platforms, player);
      ifGameOver(scrollOffset, gameOver);
    }

    drawPlatforms(platforms);
  }

export default animate;