import { call, delay, put } from 'redux-saga/effects';

import { MAGIC_NUMBERS } from 'constants/enums';
import { gallery } from 'services/api';
import { setErrorMessage, setIsFetching } from 'store/app/actions';
import { setAllGalleryPhoto } from 'store/gallery/actions';
import { PhotoType } from 'store/gallery/types';

export function* fetchCategoryPhotos() {
  try {
    yield put(setIsFetching(true));
    // @ts-ignore
    const photos = yield call(gallery.getPhotos);
    const allCategoryPhoto: PhotoType[] = photos.slice(
      MAGIC_NUMBERS.FIRST_INDEX_PHOTOS,
      MAGIC_NUMBERS.LAST_INDEX_PHOTOS,
    );
    yield put(setAllGalleryPhoto(allCategoryPhoto));
  } catch (e: any) {
    yield put(setErrorMessage(e.message));
  } finally {
    yield delay(MAGIC_NUMBERS.DELAY);
    yield put(setIsFetching(false));
  }
}
