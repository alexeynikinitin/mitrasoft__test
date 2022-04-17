import { GALLERY_ACTIONS_TYPES } from 'store/gallery/enum/galleryActionsTypes';
import { GalleryActionCreatorsType } from 'store/gallery/types/GalleryActionCreatorsType';
import { GalleryStateType } from 'store/gallery/types/GalleryStateType';

const initialGalleryState: GalleryStateType = {
  categories: [
    {
      id: 'asdasdasdasd',
      name: 'Category Name 1',
      photo: 'sdfsd',
    },
    {
      id: 'asdasdsdfsdfasdasd',
      name: 'Category Name 2',
      photo: 'sdfsd',
    },
    {
      id: 'asdasdsdfaSDasdasd',
      name: 'Category Name 3',
      photo: 'sdfsd',
    },
    {
      id: 'asdasdgfadfgasdasdasd',
      name: 'Category Name 4',
      photo: 'sdfsd',
    },
  ],
  categoryData: null,
};

export const galleryReducer = (
  state: GalleryStateType = initialGalleryState,
  action: GalleryActionCreatorsType,
): GalleryStateType => {
  switch (action.type) {
    case GALLERY_ACTIONS_TYPES.SET_CATEGORY_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
