import React, { FC } from 'react';

import { Footer } from 'components/commons/footer/Footer';
import { Header } from 'components/commons/header/Header';
import { MitrasoftGallery } from 'components/mitrasoftGallery/MitrasoftGallery';

import './App.css';

const App: FC<AppType> = () => (
  <div className="app">
    <Header />
    <MitrasoftGallery />
    <Footer />
  </div>
);

export default App;

type AppType = {};
