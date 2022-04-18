import { PhotoType } from 'store/gallery/types';
import { RootStateType } from 'store/store';

export const selectAllCategoryPhoto = (state: RootStateType): PhotoType[] | null =>
  state.gallery.allCategoryPhoto;
