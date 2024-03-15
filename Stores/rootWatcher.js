import {all} from 'redux-saga/effects';

import {counterWatcher} from './countSaga';
import {userWatcher} from './usersSaga';

export function* rootWacher() {
  yield all([counterWatcher(), userWatcher()]);
}
