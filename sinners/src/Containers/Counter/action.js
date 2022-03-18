export const CLICK_ME = "CLICK_ME";
export const GO_LEFT = "@PLAYER/GO_LEFT";
export const GO_RIGHT = "@PLAYER/GO_RIGHT";
export const JUMP = "@PLAYER/JUMP";
export const FALL = "@PLAYER/FALL";

const actionCreators = {
  clickMe: () => ({
    type: CLICK_ME,
  }),
};

export default actionCreators;
