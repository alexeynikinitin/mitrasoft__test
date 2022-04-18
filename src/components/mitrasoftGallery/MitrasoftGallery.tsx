import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFound } from 'components/commons/notFound/NotFound';
import { AboutMe } from 'components/mitrasoftGallery/AboutMe/AboutMe';
import { Gallery } from 'components/mitrasoftGallery/Gallery/Gallery';
import { PhotoCard } from 'components/mitrasoftGallery/Gallery/photoCard/PhotoCard';
import { Home } from 'components/mitrasoftGallery/Home/Home';
import { routesPath } from 'constants/routes/routes';

export const MitrasoftGallery: FC<GalleryType> = () => (
  <div>
    <Routes>
      <Route path={routesPath.home} element={<Home />} />
      <Route path={routesPath.gallery} element={<Gallery />} />
      <Route path={routesPath.photo} element={<PhotoCard />} />
      <Route path={routesPath.aboutMe} element={<AboutMe />} />
      <Route path={routesPath.notFound} element={<NotFound />} />
      <Route path={routesPath.other} element={<Navigate to="/404" />} />
    </Routes>
  </div>
);

type GalleryType = {};
