import React, { useCallback } from 'react';
import useCanvas from './hooks/useCanvas';
import { fps } from "./globals/config";
import keys from './globals/keys';
import userKeyDownPress from './keyPress/userKeyDownPress';
import userKeyUpPress from './keyPress/userKeyUpPress';
import useEventListener from './hooks/useEventListener';
import init from './helpers/init';
import { startAnimating } from './animate';

const Engine = ({ level, hero }) => {

  const [player, setPlayer] = React.useState();
  const [platforms, setPlatforms] = React.useState();
  const [enemies, setEnemies] = React.useState();
  const [ctxState, setCtxState] = React.useState();
  const [canvasState, setCanvasState] = React.useState();
  const [genericObjects, setGenericObjects] = React.useState();
  const [stats, setStats] = React.useState();
  const [score, setScore] = React.useState();
  const [gameOver, setGameOver] = React.useState();

  const state = {
    player,
    setPlayer,
    platforms,
    setPlatforms,
    ctxState,
    setCtxState,
    canvasState,
    setCanvasState,
    genericObjects,
    setGenericObjects,
    stats, 
    setStats, 
    enemies, 
    setEnemies, 
    gameOver, 
    setGameOver, 
    score, 
    setScore,
  }

  const handleUserKeyDownPress = useCallback(userKeyDownPress(player, platforms), [player]);
  const handleUserKeyUpPress = useCallback(userKeyUpPress(player), [player]);
  useEventListener(handleUserKeyDownPress, handleUserKeyUpPress, player);

  const canvasRef = useCanvas(([canvas, ctx]) => {
    // canvas.width = windowWidth;
    // canvas.height = windowHeight;

    function setSize(canvas){
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight-4;
    }

    setSize(canvas);

    window.addEventListener('resize',()=>{
      setSize(canvas);
    })

    init(canvas, ctx, level, state, hero);
  });


  const startGame = new Promise((resolve) => { resolve(); });
  
  startGame.then(() => {
    player && startAnimating(fps, gameOver, state, keys) 
  });

  return <><button style={{position: 'absolute', top: 10, left: 10}} onClick={()=>{   
          handleUserKeyDownPress({keyCode: 38}); 
          setTimeout(()=>handleUserKeyUpPress({keyCode: 38}), 20);
        }}>Jump</button>
        <button style={{position: 'absolute', top: 10, left: 210}} onClick={()=>{   
          handleUserKeyDownPress({keyCode: 39}); 
          // setTimeout(()=>handleUserKeyUpPress({keyCode: 39}), 20);
        }}>Run</button>
    <canvas ref={canvasRef}></canvas>
  </>
}

export default Engine;