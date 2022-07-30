import init from './init';
const newGame = (cRef, level, state) => {
    const canvas = cRef.current;
    const ctx = cRef.current.getContext("2d");
    init(canvas, ctx, level, state.setPlatforms, state.setPlayer, state.setGenericObjects, state.setCtxState, state.setCanvasState)
  }

  export default newGame;