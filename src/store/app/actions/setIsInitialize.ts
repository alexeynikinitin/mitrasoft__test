import { APP_ACTIONS_TYPES } from 'store/app/enum/appActionsTypes';

export const setIsInitialize = (isInitialized: boolean) =>
  ({
    type: APP_ACTIONS_TYPES.SET_IS_INITIALIZE,
    payload: { isInitialized },
  } as const);
