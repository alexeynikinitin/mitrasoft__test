import React, { FC, useEffect } from 'react';

import { Category } from 'components/mitrasoftGallery/Gallery/category/Category';
import { getAllGalleryPhoto } from 'store/gallery/actions';
import { selectCategories } from 'store/gallery/selectors';
import { useAppDispatch } from 'utils/useAppDispatch';
import { useAppSelector } from 'utils/useAppSelector';

export const Gallery: FC<GalleryType> = () => {
  const categories = useAppSelector(selectCategories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGalleryPhoto());
  }, []);

  return (
    <div>
      {categories.map((category, index) => (
        <Category key={category.id} category={category} categoryIndex={index} />
      ))}
    </div>
  );
};

type GalleryType = {};
