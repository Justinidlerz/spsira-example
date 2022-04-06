import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';
import Home from './pages/Home';
import Users from './pages/Users';
import Layout from './components/Layout';

interface IProps {
  state?: any;
}

const App: FC<IProps> = ({ state }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
