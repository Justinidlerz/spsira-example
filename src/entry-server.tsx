import React from 'react';
import { renderToString } from 'react-dom/server';
import Document from './components/Document';
import Main from './main-server';
import { queryClient } from './queryClient';

export const render = async (url: string) => {
  queryClient.clear();
  const app = <Main location={url} />;
  renderToString(app);

  await queryClient.refetchQueries();

  const appHtml = renderToString(app);

  const content = <Document>{appHtml}</Document>;
  return `<!DOCTYPE html>${renderToString(content)}`;
};
