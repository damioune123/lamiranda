import { all } from 'redux-saga/effects';
import galleriesSaga from './galleriesSaga';

export default function* rootSaga() {
  yield all([galleriesSaga()]);
}
