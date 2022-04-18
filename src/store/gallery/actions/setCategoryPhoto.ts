import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum';

export const setCategoryPhoto = (categoryIndex: number) =>
  ({
    type: GALLERY_ACTIONS_TYPES.SET_CATEGORY_PHOTO,
    payload: { categoryIndex },
  } as const);
