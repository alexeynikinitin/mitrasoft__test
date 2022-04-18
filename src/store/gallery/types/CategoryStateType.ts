import { PhotoType } from 'store/gallery/types';

export type CategoryStateType = {
  id: string;
  name: string;
  photos: PhotoType[] | null;
};
