import {put, takeEvery, call} from 'redux-saga/effects';

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUserWorker() {
  const data = yield call(fetchUsers);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put({type: 'SET_USERS', payload: json});
}

export function* userWatcher() {
  yield takeEvery('FETCH_USERS', fetchUserWorker);
}
