import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum/galleryActionsTypes';

export const getPhoto = (photoId: string | null) =>
  ({
    type: GALLERY_ACTIONS_TYPES.GET_PHOTO,
    photoId,
  } as const);
