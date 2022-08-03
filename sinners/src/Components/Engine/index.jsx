import React, { useCallback } from 'react';
import useCanvas from './useCanvas';
import { playerSpeed, windowWidth, windowHeight } from "./config";
import { Toaster } from 'react-hot-toast';
import keys from './helpers/keys';
import userKeyDownPress from './helpers/userKeyDownPress';
import userKeyUpPress from './helpers/userKeyUpPress';
import useEventListener from './helpers/useEventListener';
import init from './helpers/init';
import newGame from './helpers/newGame';
import Stats from './Stats';
import animate from './helpers/animate';

let gameOver = false;

const Engine = ({ level }) => {

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

  const handleUserKeyDownPress = useCallback(userKeyDownPress(player), [player]);
  const handleUserKeyUpPress = useCallback(userKeyUpPress(player), [player]);
  useEventListener(handleUserKeyDownPress, handleUserKeyUpPress, player);

  let buttonStart;
  let scrollOffset = 0;

  const canvasRef = useCanvas(([canvas, ctx]) => {
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    init(canvas, ctx, level, state);
  });

  const onClickStart = () => newGame(canvasRef, level, state);

  const startGame = new Promise((resolve) => { resolve(); });
  
  startGame.then(() => {
    player && animate(gameOver, buttonStart, state, keys, playerSpeed, scrollOffset) });

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