import React from 'react';
import Main from './main-client';
import { createRoot } from 'react-dom/client';
import { hydrate } from 'react-query';
import { queryClient } from './queryClient';

const root = createRoot(document.getElementById('root'));

hydrate(queryClient, (window as any).initState);

root.render(<Main />);
