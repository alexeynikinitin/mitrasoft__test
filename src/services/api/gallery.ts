import { PhotosResponseType } from './types';

import { instance } from 'services/api/config/index';
import { PHOTOS_ENUM } from 'services/api/enums/photosEnums';

export const gallery = {
  getPhotos(album?: number) {
    return instance
      .get<PhotosResponseType>(`albums/${album || PHOTOS_ENUM.defaultAlbum}/photos`)
      .then(res => res.data);
  },
  getPhoto(photoId: string) {
    return instance.get<PhotosResponseType>(`photos?id=${photoId}`).then(res => res.data);
  },
};
