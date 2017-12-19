import { takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { setLoading, setInfo, setError, resetUI } from 'containers/App/actions';
// import isTruthy from 'helpers/isTruthy';
// import isFalsy from 'helpers/isFalsy';
// import isImmutable from 'helpers/isImmutable';

import { CHANGE_TITLE } from './constants';
import { changeTitleSuccess } from './actions';

export function* changeTitle() {
  yield call(delay, 1000);
  yield put(changeTitleSuccess(`Modified title ${Date.now().toString()}`));
}

export default function* homePageSaga() {
  yield takeLatest(CHANGE_TITLE, changeTitle);
}
