import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from 'store/app/app-reducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
