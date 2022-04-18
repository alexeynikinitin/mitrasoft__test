import { call, put } from 'redux-saga/effects';

import { gallery } from 'services/api';
import { PhotoType } from 'store/gallery/types';
import { setSelectPhoto } from 'store/selectedPhoto/actions';
import { MAGIC_NUMBERS } from 'store/selectedPhoto/enum';

export function* fetchPhoto(action: any) {
  // @ts-ignore
  const photos = yield call(gallery.getPhoto, action.photoId);
  const selectedPhoto: PhotoType = photos[MAGIC_NUMBERS.FIRST_INDEX_PHOTOS];
  yield put(setSelectPhoto(selectedPhoto));
}
