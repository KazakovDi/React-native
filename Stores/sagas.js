import {put, takeEvery} from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'FETCH'});
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('ASYNC_FETCH', incrementAsync);
}
