import React, { useEffect } from 'react';

import { Accordion } from 'react-bootstrap';

import { Category } from 'components/mitrasoftGallery/gallery/category/Category';
import { getAllGalleryPhoto } from 'store/gallery/actions';
import { selectCategories } from 'store/gallery/selectors';
import { useAppDispatch } from 'utils/useAppDispatch';
import { useAppSelector } from 'utils/useAppSelector';

export const Gallery = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGalleryPhoto());
  }, []);

  return (
    <Accordion>
      {categories.map((category, index) => (
        <Accordion.Item key={category.id} eventKey={JSON.stringify(index)}>
          <Accordion.Header>{category.name}</Accordion.Header>
          <Accordion.Body>
            <Category category={category} categoryIndex={index} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
