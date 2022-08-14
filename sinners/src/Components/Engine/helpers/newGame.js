import init from './init';
const newGame = (cRef, level, state, hero) => {
    const canvas = cRef.current;
    const ctx = cRef.current.getContext("2d");
    init(canvas, ctx, level, state, hero)
  }

  export default newGame;