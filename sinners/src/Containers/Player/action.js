export const GO_LEFT = "@PLAYER/GO_LEFT";
export const GO_RIGHT = "@PLAYER/GO_RIGHT";
export const JUMP = "@PLAYER/JUMP";
export const FALL = "@PLAYER/FALL";

export const actionCreators = {
  goLeft: () => ({ type: GO_LEFT }),
  goRight: () => ({ type: GO_RIGHT }),
  jump: () => ({ type: JUMP }),
  fall: () => ({ type: FALL }),
};

export default actionCreators;
