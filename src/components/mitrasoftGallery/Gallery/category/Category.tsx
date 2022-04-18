import React, { FC, memo, useEffect } from 'react';

import { Row } from 'react-bootstrap';

import { CategoryCard } from 'components/mitrasoftGallery/gallery/category/categoryCard/CategoryCard';
import { setCategoryPhoto } from 'store/gallery/actions';
import { CategoryStateType } from 'store/gallery/types';
import { useAppDispatch } from 'utils/useAppDispatch';

export const Category: FC<CategoryType> = memo(({ categoryIndex, category }) => {
  const { photos } = category;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategoryPhoto(categoryIndex));
  }, [photos]);

  return (
    <Row>
      {photos &&
        photos.map(photo => (
          <CategoryCard
            key={photo.id}
            id={photo.id}
            title={photo.title}
            url={photo.url}
          />
        ))}
    </Row>
  );
});

type CategoryType = {
  category: CategoryStateType;
  categoryIndex: number;
};
