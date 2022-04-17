import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum/galleryActionsTypes';
import { PhotoType } from 'store/gallery/types/PhotoType';

export const setCategoryData = (categoryData: PhotoType[] | null) =>
  ({
    type: GALLERY_ACTIONS_TYPES.SET_CATEGORY_DATA,
    payload: { categoryData },
  } as const);
