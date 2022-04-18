import { CategoryStateType } from 'store/gallery/types/CategoryStateType';
import { PhotoType } from 'store/gallery/types/PhotoType';

export type GalleryStateType = {
  categories: CategoryStateType[];
  allCategoryPhoto: PhotoType[];
  selectedPhoto: PhotoType | null;
};
