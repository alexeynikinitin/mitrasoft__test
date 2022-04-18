import { PhotoType } from 'store/gallery/types';
import { SELECTED_PHOTO_ACTIONS_TYPES } from 'store/selectedPhoto/enum';

export const setSelectPhoto = (selectPhoto: PhotoType) =>
  ({
    type: SELECTED_PHOTO_ACTIONS_TYPES.SET_SELECTED_PHOTO,
    payload: { selectPhoto },
  } as const);
