import { PhotosResponseType } from './types';

import { instance } from 'services/api/config/index';
import { PHOTOS_ENUM } from 'services/api/enums/photosEnums';

export const gallery = {
  photos(album?: number) {
    return instance.get<PhotosResponseType>(
      `albums/${album || PHOTOS_ENUM.defaultAlbum}/photos`,
    );
  },
};
