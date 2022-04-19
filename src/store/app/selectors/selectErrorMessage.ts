import { RootStateType } from 'store/store';

export const selectErrorMessage = (state: RootStateType): string =>
  state.app.errorMessage;
