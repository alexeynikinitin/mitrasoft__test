import { PhotoType } from 'store/gallery/types/PhotoType';

export type CategoryStateType = {
  id: string;
  name: string;
  photos: PhotoType[] | null;
};
