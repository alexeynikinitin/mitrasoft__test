import { call, put } from 'redux-saga/effects';

import { gallery } from 'services/api';
import { setAllGalleryPhoto } from 'store/gallery/actions';
import { MAGIC_NUMBERS } from 'store/gallery/enum';
import { PhotoType } from 'store/gallery/types';

export function* fetchCategoryPhotos() {
  // @ts-ignore
  const photos = yield call(gallery.getPhotos);
  const allCategoryPhoto: PhotoType[] = photos.slice(
    MAGIC_NUMBERS.FIRST_INDEX_PHOTOS,
    MAGIC_NUMBERS.LAST_INDEX_PHOTOS,
  );
  yield put(setAllGalleryPhoto(allCategoryPhoto));
}
