const drawPlatforms = (platforms) => {
    if(platforms !== undefined)
    {
      platforms.forEach((platform)=>{
         platform.draw();
      })
    }
  }

  export default drawPlatforms;