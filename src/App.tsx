import React, { StrictMode } from 'react';
import GlobalStyle from './assets/styles/global';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </StrictMode>
  );
};

export { App };
