import React, { FC, memo } from 'react';

import { CategoryStateType } from 'store/gallery/types/CategoryStateType';

export const Category: FC<CategoryType> = memo(({ category }) => {
  const { name } = category;
  return (
    <div>
      <div>{name}</div>
      <div>Подробнее</div>
    </div>
  );
});

type CategoryType = {
  category: CategoryStateType;
};
