import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from 'store/app/app-reducer';
import { galleryReducer } from 'store/gallery/gallery-reducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  app: appReducer,
  gallery: galleryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
