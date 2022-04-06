import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { dehydrate } from 'react-query';
import { queryClient } from '../queryClient';

interface IProps {
  children: string;
}

const Document: FC<IProps> = ({ children }) => {
  const helmet = Helmet.renderStatic();
  const state = dehydrate(queryClient, {
    shouldDehydrateQuery: () => true,
    dehydrateQueries: true,
  });

  return (
    <html {...helmet.htmlAttributes.toString()}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toString()}>
        <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var initState = ${JSON.stringify(state)};
        `,
          }}
        />
        <script src="/src/entry-client.tsx" type="module" />
      </body>
    </html>
  );
};

export default Document;
