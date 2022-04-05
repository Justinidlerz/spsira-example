import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const Main: FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Main;
