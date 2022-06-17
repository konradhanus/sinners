export const GO_LEFT = "@PLAYER/GO_LEFT";
export const GO_RIGHT = "@PLAYER/GO_RIGHT";
export const JUMP = "@PLAYER/JUMP";
export const FALL = "@PLAYER/FALL";
export const FOUND_ITEM = "@PLAYER/FOUND_ITEM";

export const FETCH_POKEMON_DATA = "@PLAYER/FETCH";
export const PUT_POKEMON = "@PLAYER/PUT";

export const actionCreators = {
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
  foundItem: (payload) => {
    console.log(FOUND_ITEM);
    return {
      type: FOUND_ITEM,
      payload
    };
  },
  fetch: (pokemonName) => {
    console.log(FETCH_POKEMON_DATA);
    return {
      type: FETCH_POKEMON_DATA,
      payload: pokemonName,
    };
  },
  put: (data) => {
    console.log(PUT_POKEMON);
    return {
      type: PUT_POKEMON,
      payload: data,
    };
  },
};

export default actionCreators;
