import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import { appReducer } from 'store/app/app-reducer';
import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum';
import { galleryReducer } from 'store/gallery/gallery-reducer';
import { fetchCategoryPhotos } from 'store/gallery/sagas';
import { SELECTED_PHOTO_ACTIONS_TYPES } from 'store/selectedPhoto/enum';
import { fetchPhoto } from 'store/selectedPhoto/sagas';
import { selectedPhotoReducer } from 'store/selectedPhoto/selectedPhoto-reducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  app: appReducer,
  gallery: galleryReducer,
  selectedPhoto: selectedPhotoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootWatcher);

function* rootWatcher() {
  yield takeEvery(GALLERY_ACTIONS_TYPES.GET_CATEGORY_DATA, fetchCategoryPhotos);
  yield takeEvery(SELECTED_PHOTO_ACTIONS_TYPES.GET_PHOTO, fetchPhoto);
}

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
