import { APP_ACTIONS_TYPES } from 'store/app/enum/appActionsTypes';

export const setIsFetching = (isFetching: boolean) =>
  ({
    type: APP_ACTIONS_TYPES.SET_IS_FETCHING,
    payload: { isFetching },
  } as const);
