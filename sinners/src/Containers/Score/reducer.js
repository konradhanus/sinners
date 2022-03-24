import { INCREASE_SCORE, DECREASE_SCORE } from './action';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return state + 10;
    case DECREASE_SCORE:
      return state - 10;
    default:
      return state;
  }
}

export default reducer;
