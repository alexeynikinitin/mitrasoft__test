import { APP_ACTIONS_TYPES } from 'store/app/enum/appActionsTypes';
import { AppActionCreatorsType } from 'store/app/types/AppActionCreatorsType';
import { AppStateType } from 'store/app/types/AppStateType';

const initialAuthState: AppStateType = {
  isInitialized: false,
};

export const appReducer = (
  state: AppStateType = initialAuthState,
  action: AppActionCreatorsType,
): AppStateType => {
  switch (action.type) {
    case APP_ACTIONS_TYPES.SET_IS_INITIALIZE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
