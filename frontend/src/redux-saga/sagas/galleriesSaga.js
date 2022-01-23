import directusAPI from '../../services/directus-api';
import { call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  GET_GALLERIES,
  getGalleriesSuccessAction,
  getGalleriesFailureAction,
} from '../actions';

function* watchGetGalleries() {
  yield takeLatest(GET_GALLERIES, callGetGalleries);
}

function* callGetGalleries() {
  try {
    const response = yield call(directusAPI.getGalleries);
    yield put(getGalleriesSuccessAction(response));
  } catch (error) {
    yield put(getGalleriesFailureAction(error));
  }
}

export default function* galleriesSaga() {
  yield fork(watchGetGalleries);
}
