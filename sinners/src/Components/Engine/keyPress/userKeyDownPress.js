import keys from '../globals/keys';

export default (player, platforms) => ({ keyCode }) =>  {
    if (keyCode === 39) {
      player.rightPressed = true;
      keys.right.pressed = true;
    }
    if (keyCode === 37) {
      keys.left.pressed = true;
    }

    
    if (keyCode === 38) {
      // check if is celling
      // check dystance
      // if distance <= 25 then velocyty.y less 

        keys.up.pressed = true;
      
        
    }
    if (keyCode === 40) {
      console.log('fall')
    }
  }