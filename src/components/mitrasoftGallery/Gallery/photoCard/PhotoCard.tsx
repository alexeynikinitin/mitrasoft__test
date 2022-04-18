import React, { FC, useEffect } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import { getPhoto } from 'store/selectedPhoto/actions';
import { selectSelectedPhoto } from 'store/selectedPhoto/selectors';
import { useAppDispatch } from 'utils/useAppDispatch';
import { useAppSelector } from 'utils/useAppSelector';

export const PhotoCard: FC<PhotoCardType> = () => {
  const { photoId } = useParams<string>();
  const selectedPhoto = useAppSelector(selectSelectedPhoto);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPhoto(photoId || null));
  }, [photoId]);

  return (
    <div>
      <NavLink to="/gallery">Назад</NavLink>
      <div>{selectedPhoto && selectedPhoto.title}</div>
      <div>{selectedPhoto && selectedPhoto.albumId}</div>
      <div>{selectedPhoto && selectedPhoto.id}</div>
      <div>{selectedPhoto && selectedPhoto.url}</div>
      <div>{selectedPhoto && selectedPhoto.thumbnailUrl}</div>
    </div>
  );
};

type PhotoCardType = {};
