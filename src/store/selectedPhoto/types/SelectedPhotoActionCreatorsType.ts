import { getPhoto, setSelectPhoto } from 'store/selectedPhoto/actions';

export type SelectedPhotoActionCreatorsType =
  | ReturnType<typeof setSelectPhoto>
  | ReturnType<typeof getPhoto>;
