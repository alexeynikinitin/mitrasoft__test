import { setErrorMessage, setIsFetching } from 'store/app/actions';

export type AppActionCreatorsType =
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setErrorMessage>;
