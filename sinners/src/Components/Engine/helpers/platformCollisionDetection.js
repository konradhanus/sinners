const platformCollisionDetection = (platforms, player) => {
    platforms.forEach((platform)=> {
      if(player.position.y + player.height <= platform.position.y &&
          player.position.y + player.height + player.velocity.y >= platform.position.y 
           && 
          player.position.x + player.width >= platform.position.x && 
          player.position.x <= platform.position.x + platform.width
         ){
        player.velocity.y = 0;
      }
    });
  }

  export default platformCollisionDetection;