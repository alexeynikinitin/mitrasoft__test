import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum/galleryActionsTypes';
import { PhotoType } from 'store/gallery/types/PhotoType';

export const setSelectPhoto = (selectPhoto: PhotoType) =>
  ({
    type: GALLERY_ACTIONS_TYPES.SET_SELECTED_PHOTO,
    payload: { selectPhoto },
  } as const);
