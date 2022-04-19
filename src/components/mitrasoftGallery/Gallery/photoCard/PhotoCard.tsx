import React, { useEffect } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';

import { selectIsFetching } from 'store/app/selectors/selectIsFetching';
import { getPhoto } from 'store/selectedPhoto/actions';
import { selectSelectedPhoto } from 'store/selectedPhoto/selectors';
import { useAppDispatch } from 'utils/useAppDispatch';
import { useAppSelector } from 'utils/useAppSelector';
import './PhotoCard.css';

export const PhotoCard = () => {
  const { photoId } = useParams<string>();
  const selectedPhoto = useAppSelector(selectSelectedPhoto);
  const isFetching = useAppSelector(selectIsFetching);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhoto(photoId || null));
  }, [photoId]);

  if (isFetching) {
    return <Spinner animation="border" variant="primary" className="spinner" />;
  }
  return (
    <Container>
      <Row className="photoCard">
        <Col className="photoCard__goToBack mb-5">
          <NavLink to="/gallery">Назад</NavLink>
        </Col>
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center mb-5 photoCard__title"
        >
          {selectedPhoto && selectedPhoto.title}
        </Col>
        <Col xs={12}>{`Album ID: ${selectedPhoto && selectedPhoto.albumId}`}</Col>
        <Col xs={12} className="mb-3">{`Photo ID: ${
          selectedPhoto && selectedPhoto.id
        }`}</Col>
        <Col xs={12} className="mb-3">
          <img
            className="photoCard__img"
            src={selectedPhoto ? selectedPhoto.thumbnailUrl : ''}
            alt=""
          />
        </Col>
        <Col className="mb-2">
          <a href={selectedPhoto ? selectedPhoto.url : ''}>
            {selectedPhoto ? selectedPhoto.url : ''}
          </a>
        </Col>
      </Row>
    </Container>
  );
};
