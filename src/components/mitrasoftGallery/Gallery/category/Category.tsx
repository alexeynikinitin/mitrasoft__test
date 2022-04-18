import React, { FC, memo, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { setCategoryPhoto } from 'store/gallery/actions/setCategoryPhoto';
import { CategoryStateType } from 'store/gallery/types/CategoryStateType';
import { useAppDispatch } from 'utils/useAppDispatch';

export const Category: FC<CategoryType> = memo(({ categoryIndex, category }) => {
  const { name, photos } = category;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategoryPhoto(categoryIndex));
  }, [photos]);

  return (
    <div>
      <div>{name}</div>
      <div>
        {photos &&
          photos.map(photo => (
            <NavLink key={photo.id} to={`/gallery/${photo.id}`}>
              <img key={photo.id} src={photo.url} alt={photo.title} />
            </NavLink>
          ))}
      </div>
      <div>Подробнее</div>
    </div>
  );
});

type CategoryType = {
  category: CategoryStateType;
  categoryIndex: number;
};
