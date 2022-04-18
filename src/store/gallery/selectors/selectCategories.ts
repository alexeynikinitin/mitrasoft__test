import { CategoryStateType } from 'store/gallery/types';
import { RootStateType } from 'store/store';

export const selectCategories = (state: RootStateType): CategoryStateType[] =>
  state.gallery.categories;
