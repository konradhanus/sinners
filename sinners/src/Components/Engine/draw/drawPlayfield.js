const drawPlayfield = (ctxState, canvasState) => {
    if (ctxState && canvasState) {
      ctxState.fillStyle = "white";
      ctxState.fillRect(
        0,
        0,
        canvasState.width,
        canvasState.height
      );
    }
  }

  export default drawPlayfield;