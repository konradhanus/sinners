const parallaxEffect = (keys, player, playerSpeed, scrollOffset, platforms, genericObjects, enemies) => {
  // po nacisnieciu prawo


  platforms.forEach((platform) => {
    
    /* FOR ENEMY */
    enemies.forEach((enemy) => {
      // to do block enemies
    })
  })


  if(keys.right.pressed)
  { 
    // sprawdz kazda platforme 
    platforms.forEach((platform) => {

      /* FOR PLAYER */
      const checkOnlyTheSameRow = player.position.y + player.height >= platform.position.y && 
      player.position.y < platform.position.y;

      const checkIfSomethingIsUpFrontOfPlayer = platform.position.x <= player.position.x+player.width;
      const checkDistance = platform.position.x-player.position.x > 0;
      if(checkOnlyTheSameRow && checkIfSomethingIsUpFrontOfPlayer && checkDistance)
      {
          playerSpeed = 0;
      }
    })
  }

  if(keys.left.pressed)
  { 
    // sprawdz kazda platforme 
    platforms.forEach((platform) => {

      const checkOnlyTheSameRow = player.position.y + player.height >= platform.position.y && 
      player.position.y < platform.position.y;

      const checkIfSomethingIsBackOfPlayer = platform.position.x < player.position.x+player.width;
      const checkDistance = player.position.x - platform.position.x - platform.width < 1;

      if(checkOnlyTheSameRow && checkIfSomethingIsBackOfPlayer && checkDistance)
      {
          // console.log('z', checkIfSomethingIsBackOfPlayer, platform.position.x, '<', player.position.x+player.width)
          playerSpeed = 0;
      }
    })
  }

  if(keys.up.pressed && keys.up.onFly === false) {
    keys.up.onFly = true;
    player.velocity.y -= 25;
    // console.log('po',player.velocity.y)
  } else if(keys.up.pressed && keys.up.onFly === true) {
    // console.log('po2',player.velocity.y) 
  } 

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = playerSpeed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -playerSpeed;
  }else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += playerSpeed;

      platforms.forEach((platform) => {
        platform.position.x -= playerSpeed
      })

      enemies.forEach((enemy) => {
        enemy.position.x -= playerSpeed
      })

      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= playerSpeed * 0.66
      })

    } else if (keys.left.pressed) {
      
      platforms.forEach((platform) => {
        scrollOffset -= playerSpeed;
        platform.position.x += playerSpeed
      })

      enemies.forEach((enemy) => {
        enemy.position.x += playerSpeed
      })

      genericObjects.forEach((genericObject) => {
        genericObject.position.x += playerSpeed * 0.66
      })
    }
  }
}
export default parallaxEffect;
