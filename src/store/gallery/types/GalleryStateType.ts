import { CategoryStateType, PhotoType } from 'store/gallery/types';

export type GalleryStateType = {
  categories: CategoryStateType[];
  allCategoryPhoto: PhotoType[];
};
