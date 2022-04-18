import { PhotoType } from 'store/gallery/types/PhotoType';
import { RootStateType } from 'store/store';

export const selectSelectedPhoto = (state: RootStateType): PhotoType | null =>
  state.selectedPhoto.selectedPhoto;
