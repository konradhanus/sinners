import { PUT_POKEMON } from "../Player/action";

const reducer = (state = [], action) => {
  switch (action.type) {
    case PUT_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
