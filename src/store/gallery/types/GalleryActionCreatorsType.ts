import {
  getAllGalleryPhoto,
  setCategoryPhoto,
  setAllGalleryPhoto,
} from 'store/gallery/actions';

export type GalleryActionCreatorsType =
  | ReturnType<typeof setAllGalleryPhoto>
  | ReturnType<typeof getAllGalleryPhoto>
  | ReturnType<typeof setCategoryPhoto>;
