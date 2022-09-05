const enemyCollisionDetection = (enemies, player, platforms) => {
    enemies.forEach((enemy)=> {

      const playerPositionFromTheTop = player.position.y + player.height;
                                      
      const playerIsHigherThanEnemy = 
      // check if player staing on the ground
      playerPositionFromTheTop <= enemy.position.y &&
      // and jump on the platform 
      playerPositionFromTheTop + player.velocity.y >= enemy.position.y;

      const playerAndEnemyAreOnTheSameAxisX = 
        player.position.x + player.width > enemy.position.x && 
        player.position.x <= enemy.position.x + player.width/2;

      const turnOffGravity = 0;

      if(playerIsHigherThanEnemy&& playerAndEnemyAreOnTheSameAxisX)
      {
        console.log('on', player.position.x + player.width, '>', enemy.position.x, ' && ', player.position.x, '<=', enemy.position.x + player.width/2)
        player.velocity.y = turnOffGravity;
      }
    
    });

    platforms.forEach((platform) => {
      enemies.forEach((enemy) => {

      const enemyPositionFromTheTop = enemy.position.y + enemy.height;
                                      
      const enemyIsHigherThanPlatform = 
      // check if player staing on the ground
      enemyPositionFromTheTop <= platform.position.y &&
      // and jump on the platform 
      enemyPositionFromTheTop + enemy.velocity.y >= platform.position.y;

      const enemyAndPlatformAreOnTheSameAxisX = 
      enemy.position.x + enemy.width > platform.position.x && 
      enemy.position.x <= platform.position.x + enemy.width/2;

      const turnOffGravity = 0;

      if(enemyIsHigherThanPlatform && enemyAndPlatformAreOnTheSameAxisX)
      {
        console.log('on', enemy.position.x + enemy.width, '>', platform.position.x, ' && ', enemy.position.x, '<=', platform.position.x + enemy.width/2)
        enemy.velocity.y = turnOffGravity;
      }
    });
  });
}


  export default enemyCollisionDetection;