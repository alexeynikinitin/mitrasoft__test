import { APP_ACTIONS_TYPES } from 'store/app/enum/appActionsTypes';

export const setErrorMessage = (errorMessage: string) =>
  ({
    type: APP_ACTIONS_TYPES.SET_ERROR_MESSAGE,
    payload: { errorMessage },
  } as const);
