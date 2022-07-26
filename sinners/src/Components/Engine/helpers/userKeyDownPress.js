import keys from './keys';

export default (player) => ({ keyCode }) =>  {
    if (keyCode === 39) {
      keys.right.pressed = true;
    }
    if (keyCode === 37) {
      keys.left.pressed = true;
    }
    if (keyCode === 38) {
      player.velocity.y -= 20
    }
    if (keyCode === 40) {
      console.log('fall')
    }
  }