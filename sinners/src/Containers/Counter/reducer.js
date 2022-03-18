import { CLICK_ME } from "./action";

const reducer = (state = 1, action) => {
  switch (action.type) {
    case CLICK_ME:
      return state + 1;

    default:
      return state;
  }
};

export default reducer;
