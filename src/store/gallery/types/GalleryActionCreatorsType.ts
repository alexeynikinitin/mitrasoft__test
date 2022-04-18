import {
  getAllGalleryPhoto,
  getPhoto,
  setCategoryPhoto,
  setAllGalleryPhoto,
  setSelectPhoto,
} from 'store/gallery/actions';

export type GalleryActionCreatorsType =
  | ReturnType<typeof setAllGalleryPhoto>
  | ReturnType<typeof getAllGalleryPhoto>
  | ReturnType<typeof setCategoryPhoto>
  | ReturnType<typeof setSelectPhoto>
  | ReturnType<typeof getPhoto>;
