export const INCREASE_SCORE = "INCREASE_SCORE";
export const DECREASE_SCORE = "DECREASE_SCORE";

const actionCreators = {
  increaseScore: () => ({
    type: INCREASE_SCORE
  }),
  decreaseScore: () => ({
    type: DECREASE_SCORE
  })
};

export default actionCreators;
