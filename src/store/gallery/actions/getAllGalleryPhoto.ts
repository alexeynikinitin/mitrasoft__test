import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum';

export const getAllGalleryPhoto = () =>
  ({
    type: GALLERY_ACTIONS_TYPES.GET_CATEGORY_DATA,
  } as const);
