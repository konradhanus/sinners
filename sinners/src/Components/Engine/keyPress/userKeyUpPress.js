import keys from '../globals/keys';

export default  (player) => ({ keyCode }) => {
    if (keyCode === 39) {
     console.log(' go right');
     player.rightPressed = false;
     keys.right.pressed = false;
    }
    if (keyCode === 37) {
      console.log('go left');
      keys.left.pressed = false;
    }
    if (keyCode === 38) {
      keys.up.pressed = false;
      console.log('jump', player);
    }
    if (keyCode === 40) {
      console.log('fall')
    }
  }