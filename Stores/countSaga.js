import {put, takeEvery} from 'redux-saga/effects';
const delay = () => new Promise(res => setTimeout(res, 500));

function* incrementWorker() {
  yield delay();
  yield put({type: 'INCREMENT'});
}
function* decrementWorker() {
  yield delay();
  yield put({type: 'DECREMENT'});
}
export function* counterWatcher() {
  yield takeEvery('ASYNC_INCREMENT', incrementWorker);
  yield takeEvery('ASYNC_DECREMENT', decrementWorker);
}
