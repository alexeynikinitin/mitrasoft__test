import { useMemo } from 'react';

import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { useAppDispatch } from 'utils/useAppDispatch';

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
}
