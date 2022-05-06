import { GO_LEFT, GO_RIGHT, JUMP, FALL } from "./../Player/action";
import level1 from "../../levels/level1";

const initialLevel = JSON.parse(JSON.stringify(level1));

const movement = (state, move, initLevel) => {
  let cooX = 0;
  let cooY = 0;

  state.map((row, x) =>
    row.map((tile, y) => {
      if (tile === 4) {
        cooX = x;
        cooY = y;
      }
    })
  );
  const newState = state;

  if (move === "left") {
    newState[cooX][cooY] = 0;
    newState[cooX][cooY - 1] = 4;
  }
  if (move === "right") {
    newState[cooX][cooY] = 0;
    newState[cooX][cooY + 1] = 4;
  }
  if (move === "jump") {
    newState[cooX][cooY] = 0;
    newState[cooX - 1][cooY] = 4;
  }
  if (move === "fall") {
    newState[cooX][cooY] = 0;
    newState[cooX + 1][cooY] = 4;
  }

  return newState;
};

const reducer = (state = level1, action) => {
  switch (action.type) {
    case GO_LEFT: {
      fetch("/api");
      return movement(state, "left", initialLevel);
    }
    case GO_RIGHT:
      return movement(state, "right", initialLevel);
    case JUMP:
      return movement(state, "jump", initialLevel);
    case FALL:
      return movement(state, "fall", initialLevel);
    default:
      return state;
  }
};

export default reducer;
