import { categories } from 'constants/categories';
import { MAGIC_NUMBERS } from 'constants/enums';
import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum';
import { GalleryActionCreatorsType, GalleryStateType } from 'store/gallery/types';

const initialGalleryState: GalleryStateType = {
  categories,
  allCategoryPhoto: [],
};

export const galleryReducer = (
  state: GalleryStateType = initialGalleryState,
  action: GalleryActionCreatorsType,
): GalleryStateType => {
  switch (action.type) {
    case GALLERY_ACTIONS_TYPES.SET_ALL_GALLERY_PHOTO:
      return {
        ...state,
        allCategoryPhoto: [...action.payload.allCategoryPhoto],
      };
    case GALLERY_ACTIONS_TYPES.SET_CATEGORY_PHOTO:
      const start = action.payload.categoryIndex * MAGIC_NUMBERS.COUNT_PHOTOS_CATEGORY;
      const end = start + MAGIC_NUMBERS.COUNT_PHOTOS_CATEGORY;
      return {
        ...state,
        categories: state.categories.map((category, index) =>
          index === action.payload.categoryIndex
            ? {
                ...category,
                photos: state.allCategoryPhoto?.slice(start, end),
              }
            : category,
        ),
      };
    default:
      return state;
  }
};
