const platformCollisionDetection = (platforms, player) => {
    platforms.forEach((platform)=> {


      const playerPositionFromTheTop = player.position.y + player.height;
                                      
      const playerIsHigherThanPlatform = 
      // check if player staing on the ground
      playerPositionFromTheTop <= platform.position.y &&
      // and jump on the platform 
      playerPositionFromTheTop + player.velocity.y >= platform.position.y;

      const playerAndPlatformAreOnTheSameAxisX = 
        player.position.x + player.width >= platform.position.x && 
        player.position.x <= platform.position.x + platform.width;

      const turnOffGravity = 0;

      if(playerIsHigherThanPlatform && playerAndPlatformAreOnTheSameAxisX)
      {
        player.velocity.y = turnOffGravity;
      }
          // 799
      // if(player.position.x + player.width >= platform.position.x && 
      //   playerPositionFromTheTop <= platform.position.y)
      // {                 
      //   // console.log('x', player.position.x + player.width,'<=', platform.position.x, player.position.x + player.width <= platform.position.x);
      //   // console.log('y', playerPositionFromTheTop,'<=', platform.position.y, playerPositionFromTheTop <= platform.position.y);
      //   player.velocity.x = 0;
      // }

      
    });
  }

  export default platformCollisionDetection;