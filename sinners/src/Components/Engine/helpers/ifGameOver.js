const ifGameOver = (scrollOffset, gameOver) => {
    if(scrollOffset > 2000)
    {
      if(!gameOver){
        gameOver = true
        console.log('win');
        
      }
    }
  }

  export default ifGameOver;