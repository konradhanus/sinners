// import { BLOCK } from "../../Block/type";

const platformCollisionDetection = (platforms, player) => {
    platforms.forEach((platform)=> {

      const playerPositionFromTheTop = player.position.y + player.height;
                                      
      const playerIsHigherThanPlatform = 
      // check if player staing on the ground
      playerPositionFromTheTop <= platform.position.y &&
      // and jump on the platform 
      playerPositionFromTheTop + player.velocity.y >= platform.position.y;

      const playerAndPlatformAreOnTheSameAxisX = 
        player.position.x + player.width > platform.position.x && 
        player.position.x <= platform.position.x + player.width/2;

      const turnOffGravity = 0;

      if(playerIsHigherThanPlatform && playerAndPlatformAreOnTheSameAxisX)
      {
        console.log('on', player.position.x + player.width, '>', platform.position.x, ' && ', player.position.x, '<=', platform.position.x + player.width/2)
        player.velocity.y = turnOffGravity;
      }

      // when something is above player
      platforms.forEach((platform, id)=> {
        const playerPositionFromTheTop = player.position.y + player.height;
       
        const playerIsBelowPlatform = 
        // check if player staing on the ground
        playerPositionFromTheTop >= platform.position.y &&
        // and jump on the platform 
        playerPositionFromTheTop + player.velocity.y >= platform.position.y;

        const playerAndPlatformAreOnTheSameAxisX = 
        player.position.x + player.width > platform.position.x && 
        player.position.x < platform.position.x + platform.width;

        const distance = player.position.y + player.velocity.y - platform.position.y-platform.height;

        if(playerIsBelowPlatform && playerAndPlatformAreOnTheSameAxisX && distance <= 0)
        {
          // slide to down
          // player.velocity.y = turnOffGravity;
          //check block
          
          // console.log('bum', player.position.x + player.width, platform.position.x);

          // if(platform.type === BLOCK.DIRT_LEFT || platform.type === BLOCK.DIRT_MIDDLE || platform.type === BLOCK.DIRT_RIGHT){
          //   platforms.splice(id,1);
          // }

        }

      });  
          
    });
  }

  export default platformCollisionDetection;