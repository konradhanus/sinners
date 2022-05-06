import * as sagas from "./rootSagas";

// get all saga and run it when the page will run.
export default function initSagas(sagaMiddleware) {
  Object.keys(sagas)
    .map((key) => sagas[key])
    .forEach(sagaMiddleware.run);
}
