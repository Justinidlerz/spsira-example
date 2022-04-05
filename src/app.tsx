import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';
import Home from './pages/Home';
import Users from './pages/Users';
import Layout from './components/Layout';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
