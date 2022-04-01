export const GO_LEFT = "@PLAYER/GO_LEFT";
export const GO_RIGHT = "@PLAYER/GO_RIGHT";
export const JUMP = "@PLAYER/JUMP";
export const FALL = "@PLAYER/FALL";

const actionCreators = {
  goLeft: () => {
    console.log(GO_LEFT);
    return { type: GO_LEFT };
  },
  goRight: () => {
    console.log(GO_RIGHT);
    return { type: GO_RIGHT };
  },
  jump: () => {
    console.log(JUMP);
    return { type: JUMP };
  },
  fall: () => {
    console.log(FALL);
    return { type: FALL };
  },
};

export default actionCreators;
