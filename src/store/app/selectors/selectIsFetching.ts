import { RootStateType } from 'store/store';

export const selectIsFetching = (state: RootStateType): boolean => state.app.isFetching;
