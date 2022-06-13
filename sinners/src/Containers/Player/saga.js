import { takeEvery, all, fork, call, put } from "redux-saga/effects";
import actionCreators, { FETCH_POKEMON_DATA } from "./action";
import * as fetch from "isomorphic-fetch";

function* onFetchDataFromApiSaga({ payload }) {
  const dataPromise = yield call(
    fetch,
    `https://pokeapi.co/api/v2/pokemon/${payload}`
  );
  const data = yield dataPromise.json();

  yield put(actionCreators.put(data));

  console.log("aaaaaaaaa");
}

function* fetchDataFromApiSaga() {
  yield takeEvery(FETCH_POKEMON_DATA, onFetchDataFromApiSaga);
}

export function* playarSaga() {
  yield all([fork(fetchDataFromApiSaga)]);
}
