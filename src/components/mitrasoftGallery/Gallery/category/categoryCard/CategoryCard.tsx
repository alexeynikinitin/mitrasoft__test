import React, { FC, memo } from 'react';

import { Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './CategoryCard.css';

export const CategoryCard: FC<CategoryCardType> = memo(({ id, url, title }) => (
  <Col key={id} xs={2} className="photoCategory mb-3">
    <img className="photoCategory__img" key={id} src={url} alt={title} />
    <NavLink to={`/gallery/${id}`}>
      <Button className="photoCategory__button" variant="primary" size="sm">
        Подробнее
      </Button>
    </NavLink>
  </Col>
));

type CategoryCardType = {
  id: number;
  title: string;
  url: string;
};
