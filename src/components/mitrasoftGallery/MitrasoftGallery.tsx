import React, { Suspense } from 'react';

import { Container, Row } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFound } from 'components/commons/notFound/NotFound';
import { AboutMe } from 'components/mitrasoftGallery/aboutMe/AboutMe';
import { Gallery } from 'components/mitrasoftGallery/gallery/Gallery';
import { PhotoCard } from 'components/mitrasoftGallery/gallery/photoCard/PhotoCard';
import { Home } from 'components/mitrasoftGallery/home/Home';
import { routesPath } from 'constants/routes';

import './MitrasoftGallery.css';

export const MitrasoftGallery = () => (
  <Row className="mitrasoftGallery p-4 m-0">
    <Container>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={routesPath.home} element={<Home />} />
          <Route path={routesPath.gallery} element={<Gallery />} />
          <Route path={routesPath.photo} element={<PhotoCard />} />
          <Route path={routesPath.aboutMe} element={<AboutMe />} />
          <Route path={routesPath.notFound} element={<NotFound />} />
          <Route path={routesPath.other} element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </Container>
  </Row>
);
