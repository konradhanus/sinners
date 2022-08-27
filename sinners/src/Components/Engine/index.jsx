import React, { useCallback } from 'react';
import useCanvas from './hooks/useCanvas';
import { playerSpeed, windowWidth, windowHeight, fps } from "./globals/config";
import { Toaster } from 'react-hot-toast';
import keys from './globals/keys';
import userKeyDownPress from './keyPress/userKeyDownPress';
import userKeyUpPress from './keyPress/userKeyUpPress';
import useEventListener from './hooks/useEventListener';
import init from './helpers/init';
import newGame from './helpers/newGame';
import { startAnimating } from './animate';

let gameOver = false;

const Engine = ({ level, hero }) => {

  const [player, setPlayer] = React.useState();
  const [platforms, setPlatforms] = React.useState();
  const [ctxState, setCtxState] = React.useState();
  const [canvasState, setCanvasState] = React.useState();
  const [genericObjects, setGenericObjects] = React.useState();
  const [stats, setStats] = React.useState();

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
    setStats
  }

  const handleUserKeyDownPress = useCallback(userKeyDownPress(player, platforms), [player]);
  const handleUserKeyUpPress = useCallback(userKeyUpPress(player), [player]);
  useEventListener(handleUserKeyDownPress, handleUserKeyUpPress, player);

  let buttonStart;
  let scrollOffset = 0;

  const canvasRef = useCanvas(([canvas, ctx]) => {
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    init(canvas, ctx, level, state, hero);
  });

  const onClickStart = () => newGame(canvasRef, level, state, hero);

  const startGame = new Promise((resolve) => { resolve(); });
  
  startGame.then(() => {
    player && startAnimating(fps, gameOver, buttonStart, state, keys, playerSpeed, scrollOffset) 
  });

  return <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <button onClick={onClickStart} ref={start => buttonStart = start}>start</button>
    <canvas ref={canvasRef}></canvas>
  </>
}

export default Engine;