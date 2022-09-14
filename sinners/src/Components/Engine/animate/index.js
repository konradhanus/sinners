import platformCollisionDetection from './platformCollisionDetection';
import enemyColistionDetection from './enemyColistionDetection';
import ifGameOver from '../helpers/ifGameOver';
import drawPlatforms from '../draw/drawPlatforms';
import drawGenericsObjects from '../draw/drawGenericObjects';
import parallaxEffect from './parallaxEffect';
import drawPlayfield from '../draw/drawPlayfield';
import drawEnemies from '../draw/drawEnemies';
import { playerSpeed } from '../globals/config';
import setData from '../../../helpers/setData';

import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';
const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, animals] }).replace('_', ' ').replace('_', ' ').toUpperCase(); // big_red_donkey

let scrollOffset = 0;
let frameCounter = 0;
let score = 0;
let lives = 1;
let stop = false;
let end = false;
let save = false;
let frameCount = 0;
let fpsInterval, startTime, now, then, elapsed;

export function startAnimating(fps, state, keys) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate(state, keys, playerSpeed, scrollOffset);
}

const animate = ( state, keys, playerSpeed, scrollOffset) => {

  if (stop) {
    state.gameOver.draw(() => { lives = lives - 1; }).then(() => {
      end = true;
    });
  }

  if (end) {
    if (!save) {
      save = true;
      setData(score, randomName)
    }
    return;
  }
  


    frameCounter++;
    if (state.player.position.y > state.canvasState.height) {

      console.log('poza plansza')
      stop = true;

      //   state.player.position = {
      //     x: state.player.defaultPosition.x,
      //     y: state.player.defaultPosition.y
      //   }

    }

    // request another frame
    requestAnimationFrame(() => animate( state, keys, playerSpeed, scrollOffset));

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
          state.player,
          state.enemies);
      }

      if (state.player !== undefined && state.enemies !== undefined) {
        enemyColistionDetection(
          state.enemies,
          state.player,
          state.platforms,
          () => { score = score + 100 });
      }

      state.enemies.map((e) => {
        e.update();
      })
      drawEnemies(state.enemies);
      drawPlatforms(state.platforms);


      if (state.player.velocity.y === 0) {
        keys.up.onFly = false;
      }

      let sinceStart = now - startTime;
      let currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
      state.stats.draw(`${currentFps} fps`,
        `position: ${state.player.position.y}`,
        `right ${keys.right.pressed}`,
        `up ${keys.up.pressed}, onFly ${keys.up.onFly}`,
      );

      state.score.draw('SCORE', score, 'YOUR NAME', randomName, 'TIME', Math.round(400 - sinceStart / 1000, 2), 'LIVES', lives)
    }
  

}

export default animate;