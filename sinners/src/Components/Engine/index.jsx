import React, {useCallback, useEffect} from 'react';
import useCanvas from './useCanvas';
import { playerSpeed, windowWidth, windowHeight, blockWidth } from "./config";
import {Toaster, toast} from 'react-hot-toast';
import keys from './helpers/keys';
import userKeyDownPress from './helpers/userKeyDownPress';
import userKeyUpPress from './helpers/userKeyUpPress';
import addEventListener from './helpers/addEventListener';
import removeEventListener from './helpers/removeEventListener';
import init from './helpers/init';

let gameOver = false;

const Engine = ({level}) => {

    const [player, setPlayer] = React.useState();
    const [platforms, setPlatforms] = React.useState();
    const [ctxState, setCtxState] = React.useState();
    const [canvasState, setCanvasState] = React.useState();
    const [genericObjects, setGenericObjects] = React.useState();

    const handleUserKeyDownPress = useCallback(userKeyDownPress(player),[player]);
    const handleUserKeyUpPress = useCallback(userKeyUpPress(player),[player]); 

    let buttonStart;

    useEffect(() => {
        // component did mount
        addEventListener(handleUserKeyDownPress, handleUserKeyUpPress)
      
        // component will unmount
        return () => {
          removeEventListener(handleUserKeyDownPress, handleUserKeyUpPress);
        };
      }, [player]);

    let scrollOffset = 0;

   

    const canvasRef = useCanvas(([canvas, ctx]) => {
        canvas.width= windowWidth;
        canvas.height= windowHeight;

        init(canvas, ctx, level, setPlatforms, setPlayer, setGenericObjects, setCtxState, setCanvasState);
      });
    
    const newGame = (cRef) => {
      console.log('new game', cRef);
      const canvas = cRef.current;
      const ctx = cRef.current.getContext("2d");
      init(canvas, ctx, level, setPlatforms, setPlayer, setGenericObjects, setCtxState, setCanvasState)
    }
    
    const animate = (gameOver, buttonStart) => {
      let gameOver2 = gameOver;

      if(player.position.y > canvasState.height)
      {
        if(!gameOver2)
        {
          console.log('raz', gameOver2);
          toast.error("You lose");
          console.log(buttonStart);
          buttonStart.click();
          gameOver2 = true;
        }
            
      }

      requestAnimationFrame(()=>animate(gameOver2, buttonStart));

      if(ctxState && canvasState)
      {
          ctxState.fillStyle = "white";
          ctxState.fillRect(
              0,
              0, 
              canvasState.width, 
              canvasState.height
            );
      }

      if(genericObjects){
        genericObjects.forEach(genericObject => {
          genericObject.draw();
        })
      }

      if(player !== undefined && platforms !== undefined){
          player.update();
          // console.log('a',isPressedKeyRight)
          if(keys.right.pressed && player.position.x < 400) {
              player.velocity.x = playerSpeed;
          } else if(keys.left.pressed && player.position.x > 100) {
              player.velocity.x = -playerSpeed;
          } else {
              player.velocity.x = 0;

              if(keys.right.pressed){
                scrollOffset += playerSpeed;

                platforms.forEach((platform)=>{
                  platform.position.x -= playerSpeed
                })

                genericObjects.forEach((genericObject)=>{
                  genericObject.position.x -= playerSpeed * 0.66
                })
               
              } else  if(keys.left.pressed){

                platforms.forEach((platform)=>{
                  scrollOffset -= playerSpeed;
                  platform.position.x += playerSpeed
                })

                genericObjects.forEach((genericObject)=>{
                  genericObject.position.x += playerSpeed * 0.66
                })
              }
          }
          
          // platform collision detection
          platforms.forEach((platform)=> {
          if(player.position.y + player.height <= platform.position.y &&
             player.position.y + player.height + player.velocity.y >= platform.position.y && 
             player.position.x + player.width >= platform.position.x && 
             player.position.x <= platform.position.x + platform.width){
            player.velocity.y = 0;
          }
        });

        if(scrollOffset > 2000)
        {
          if(!gameOver){
            gameOver = true
            console.log('win');
            
          }
        }

       
      }

      if(platforms !== undefined)
      {
        platforms.forEach((platform)=>{
          platform.draw();
        })
      }

  } 
    const startGame = new Promise((resolve) => { resolve(); });
    startGame.then(() => { player && animate(gameOver,buttonStart)});

    return <>
        <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <button onClick={()=>newGame(canvasRef)} ref={start => buttonStart = start}>start</button>
    <canvas ref={canvasRef}></canvas>
    </>
}

export default Engine;