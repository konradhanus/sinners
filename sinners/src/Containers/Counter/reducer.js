import { CLICK_ME } from "./action";
import { GO_LEFT, GO_RIGHT, JUMP, FALL } from "./../Player/action";
const reducer = (state = 1, action) => {
  switch (action.type) {
    case GO_LEFT:
    case GO_RIGHT:
    case JUMP:
    case FALL:
    case CLICK_ME:
      return state + 1;

    default:
      return state;
  }
};

export default reducer;
