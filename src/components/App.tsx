import React from 'react';

import { ErrorSnackBar } from 'components/commons/errorSnackBar/ErrorSnackBar';
import { Footer } from 'components/commons/footer/Footer';
import { Header } from 'components/commons/header/Header';
import { MitrasoftGallery } from 'components/mitrasoftGallery/MitrasoftGallery';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <MitrasoftGallery />
    <Footer />
    <ErrorSnackBar />
  </div>
);

export default App;
