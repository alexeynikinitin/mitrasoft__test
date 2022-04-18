import { PhotoType } from 'store/gallery/types/PhotoType';
import { RootStateType } from 'store/store';

export const selectAllCategoryPhoto = (state: RootStateType): PhotoType[] | null =>
  state.gallery.allCategoryPhoto;
