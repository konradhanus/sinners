import { takeEvery, all, fork, call, put } from "redux-saga/effects";
import actionCreators, { FETCH_POKEMON_DATA, FOUND_ITEM, } from "./action";
import * as fetch from "isomorphic-fetch";
import { BLOCK } from "../../Components/Block/type";
import { actionCreators as actionCreatorScore } from '../Score/action';

function* onFetchDataFromApiSaga({ payload }) {
  const dataPromise = yield call(
    fetch,
    `https://pokeapi.co/api/v2/pokemon/${payload}`
  );
  const data = yield dataPromise.json();

  yield put(actionCreators.put(data));

  console.log("aaaaaaaaa");
}

function* onFoundItemSaga({ payload }) {

  if (payload.check(payload.level) === BLOCK.STAR){
    yield put({type: payload.go});
    yield put(actionCreatorScore.increaseScore())
    // increase point
  }else if(payload.check(payload.level) === BLOCK.EMPTY) {
    yield put({type: payload.go});
  }else if(payload.check(payload.level) === BLOCK.POKEMON) {
    yield put({type: payload.go});
    yield put(actionCreatorScore.decreaseScore())
    // decrease point
  }

}

function* fetchDataFromApiSaga() {
  yield takeEvery(FETCH_POKEMON_DATA, onFetchDataFromApiSaga);
}

function* playerFoundItemSaga() {
  yield takeEvery(FOUND_ITEM, onFoundItemSaga);
}

export function* playarSaga() {
  yield all([
    fork(fetchDataFromApiSaga),
    fork(playerFoundItemSaga)
  ]);
}
