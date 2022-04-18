import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum/galleryActionsTypes';
import { PhotoType } from 'store/gallery/types/PhotoType';

export const setAllGalleryPhoto = (allCategoryPhoto: PhotoType[]) =>
  ({
    type: GALLERY_ACTIONS_TYPES.SET_ALL_GALLERY_PHOTO,
    payload: { allCategoryPhoto },
  } as const);
