import React, { FC } from 'react';

import { Footer } from 'components/commons/footer/Footer';
import { Header } from 'components/commons/header/Header';
import { MitrasoftGallery } from 'components/mitrasoftGallery/MitrasoftGallery';

const App: FC<AppType> = () => (
  <div className="App">
    <Header />
    <MitrasoftGallery />
    <Footer />
  </div>
);

export default App;

type AppType = {};
