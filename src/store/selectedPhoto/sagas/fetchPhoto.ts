import { call, delay, put } from 'redux-saga/effects';

import { MAGIC_NUMBERS } from 'constants/enums';
import { gallery } from 'services/api';
import { setErrorMessage, setIsFetching } from 'store/app/actions';
import { PhotoType } from 'store/gallery/types';
import { setSelectPhoto } from 'store/selectedPhoto/actions';

export function* fetchPhoto(action: any) {
  try {
    yield put(setIsFetching(true));
    // @ts-ignore
    const photos = yield call(gallery.getPhoto, action.photoId);
    const selectedPhoto: PhotoType = photos[MAGIC_NUMBERS.FIRST_INDEX_PHOTOS];
    yield put(setSelectPhoto(selectedPhoto));
  } catch (e: any) {
    yield put(setErrorMessage(e.message));
  } finally {
    yield delay(MAGIC_NUMBERS.DELAY);
    yield put(setIsFetching(false));
  }
}
