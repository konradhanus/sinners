const ifGameOver = (scrollOffset, gameOver, player, enemies) => {

    // console.log('player,', player, 'enemies', enemies)
    let stop = false;
    enemies.forEach(enemy => {
      if(player.position.x+player.width >= enemy.position.x && 
         player.position.x <= enemy.position.x && 
         player.position.y+player.height >= enemy.position.y && 
         player.position.y <= enemy.position.y)
      {
        if(!enemy.killed)
        {
          
        stop = true;
        }
        // console.log('pozycja przeciwnik jest w')
      }else{
        // console.log('player', player.position.x+player.width, 'enemy, ', enemy.position.x)
      }
    });

    if(stop)
    {
        return true;
    }
   

    if(scrollOffset > 2000)
    {
      if(!gameOver){
        gameOver = true
        // console.log('win');
        
      }
    }
  }

  export default ifGameOver;