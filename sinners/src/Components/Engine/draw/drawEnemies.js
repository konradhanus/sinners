const drawEnemies = (enemies) => {
    if(enemies !== undefined)
    {
      enemies.forEach((enemy)=>{
        enemy.draw();
      })
    }
  }

  export default drawEnemies;