import React, { FC } from 'react';

import { Category } from 'components/mitrasoftGallery/Gallery/category/Category';
import { selectCategories } from 'store/gallery/selectors/index';
import { useAppSelector } from 'store/store';

export const Gallery: FC<GalleryType> = () => {
  const categories = useAppSelector(selectCategories);
  return (
    <div>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

type GalleryType = {};
