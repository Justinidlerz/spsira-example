import React, { FC } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './app';

interface IProps {
  location: string;
}

const Main: FC<IProps> = ({ location }) => {
  return (
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );
};

export default Main;
