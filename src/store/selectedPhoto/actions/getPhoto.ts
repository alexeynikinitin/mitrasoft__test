import { SELECTED_PHOTO_ACTIONS_TYPES } from 'store/selectedPhoto/enum';

export const getPhoto = (photoId: string | null) =>
  ({
    type: SELECTED_PHOTO_ACTIONS_TYPES.GET_PHOTO,
    photoId,
  } as const);
