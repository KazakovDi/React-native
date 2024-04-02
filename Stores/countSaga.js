import {put, takeEvery, call, select} from 'redux-saga/effects';
const delay = ms => new Promise(res => setTimeout(res, ms));
function* incrementWorker() {
  yield call(delay, 1000);
  const counter = yield select(state => state.localization.counter);

  if (counter % 5 === 0) {
    console.log('%');
    yield put({type: 'D_INCREMENT'});
  } else {
    yield put({type: 'INCREMENT'});
  }
}
function* decrementWorker() {
  yield call(delay, 1000);
  yield put({type: 'DECREMENT'});
}
export function* counterWatcher() {
  yield takeEvery('ASYNC_INCREMENT', incrementWorker);
  yield takeEvery('ASYNC_DECREMENT', decrementWorker);
}
