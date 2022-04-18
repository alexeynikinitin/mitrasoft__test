import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum/galleryActionsTypes';
import { MAGIC_NUMBERS } from 'store/gallery/enum/magicNumbers';
import { GalleryActionCreatorsType } from 'store/gallery/types/GalleryActionCreatorsType';
import { GalleryStateType } from 'store/gallery/types/GalleryStateType';

const initialGalleryState: GalleryStateType = {
  categories: [
    {
      id: '0',
      name: 'Category Name 1',
      photos: null,
    },
    {
      id: '1',
      name: 'Category Name 2',
      photos: null,
    },
    {
      id: '2',
      name: 'Category Name 3',
      photos: null,
    },
    {
      id: '3',
      name: 'Category Name 4',
      photos: null,
    },
  ],
  allCategoryPhoto: [],
  selectedPhoto: null,
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
    case GALLERY_ACTIONS_TYPES.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.selectPhoto,
      };
    default:
      return state;
  }
};
