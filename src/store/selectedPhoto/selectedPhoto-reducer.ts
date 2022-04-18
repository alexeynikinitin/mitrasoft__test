import { SELECTED_PHOTO_ACTIONS_TYPES } from 'store/selectedPhoto/enum';
import {
  SelectedPhotoActionCreatorsType,
  SelectedPhotoStateType,
} from 'store/selectedPhoto/types';

const initialGalleryState: SelectedPhotoStateType = {
  selectedPhoto: null,
};

export const selectedPhotoReducer = (
  state: SelectedPhotoStateType = initialGalleryState,
  action: SelectedPhotoActionCreatorsType,
): SelectedPhotoStateType => {
  switch (action.type) {
    case SELECTED_PHOTO_ACTIONS_TYPES.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.selectPhoto,
      };
    default:
      return state;
  }
};
