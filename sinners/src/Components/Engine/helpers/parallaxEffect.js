const parallaxEffect = (keys, player, playerSpeed, scrollOffset, platforms, genericObjects) => {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = playerSpeed;
    } else if (keys.left.pressed && player.position.x > 100) {
      player.velocity.x = -playerSpeed;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += playerSpeed;

        platforms.forEach((platform) => {
          platform.position.x -= playerSpeed
        })

        genericObjects.forEach((genericObject) => {
          genericObject.position.x -= playerSpeed * 0.66
        })

      } else if (keys.left.pressed) {

        platforms.forEach((platform) => {
          scrollOffset -= playerSpeed;
          platform.position.x += playerSpeed
        })

        genericObjects.forEach((genericObject) => {
          genericObject.position.x += playerSpeed * 0.66
        })
      }
    }
  }