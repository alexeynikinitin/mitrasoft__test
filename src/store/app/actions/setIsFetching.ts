import { APP_ACTIONS_TYPES } from 'store/app/enum/appActionsTypes';

export const setIsFetching = (isInitialized: boolean) =>
  ({
    type: APP_ACTIONS_TYPES.SET_IS_FETCHING,
    payload: { isInitialized },
  } as const);
