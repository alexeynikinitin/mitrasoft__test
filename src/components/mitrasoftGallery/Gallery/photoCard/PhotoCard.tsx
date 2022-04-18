import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getPhoto } from 'store/gallery/actions/getPhoto';
import { selectSelectedPhoto } from 'store/gallery/selectors/selectSelectedPhoto';
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
      <div>{selectedPhoto && selectedPhoto.title}</div>
      <div>{selectedPhoto && selectedPhoto.albumId}</div>
      <div>{selectedPhoto && selectedPhoto.id}</div>
      <div>{selectedPhoto && selectedPhoto.url}</div>
      <div>{selectedPhoto && selectedPhoto.thumbnailUrl}</div>
    </div>
  );
};

type PhotoCardType = {};
