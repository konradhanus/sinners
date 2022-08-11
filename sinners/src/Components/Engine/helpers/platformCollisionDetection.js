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
      
      if(player.position.x >= 400 && 
         platform.position.x-platform.width <= 400 &&
         player.position.y + player.height >= platform.position.y)
      {
        player.velocity.x = 0;
      }
      // 
      // console.log('player postion', player.position.y + player.height);

      // if(
      //   player.position.x + player.width >= platform.position.x - player.velocity.x  && 
      //   platform.position.y + platform.height <= player.position.y + player.height &&
      //   platform.position.y >= player.position.y+player.height
      //   )

      // {
      //   console.log('player postion', player.position + player.height);
      //   player.velocity.x = 0;
      // }
      
      
      // 799≠
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