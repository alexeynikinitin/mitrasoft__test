import { call, put } from 'redux-saga/effects';

import { gallery } from 'services/api/gallery';
import { setSelectPhoto } from 'store/gallery/actions/setSelectPhoto';
import { MAGIC_NUMBERS } from 'store/gallery/enum/magicNumbers';
import { PhotoType } from 'store/gallery/types/PhotoType';

export function* fetchPhoto(action: any) {
  // @ts-ignore
  const photos = yield call(gallery.getPhoto, action.photoId);
  const selectedPhoto: PhotoType = photos[MAGIC_NUMBERS.FIRST_INDEX_PHOTOS];
  yield put(setSelectPhoto(selectedPhoto));
}
