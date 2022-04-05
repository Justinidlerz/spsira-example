import Koa from 'koa';
import Router from 'koa-router';
import connect from 'koa-connect';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const start = async () => {
  const app = new Koa();
  const router = new Router();

  const vite = await createServer({
    plugins: [react()],
    root: path.join(__dirname, '..'),
    server: { middlewareMode: 'ssr' },
    optimizeDeps: {},
  });

  router.all('/((?!api).*)', async (ctx) => {
    try {
      const url = ctx.originalUrl;
      const { render } = await vite.ssrLoadModule(path.join(__dirname, './entry-server.tsx'));

      const html = await render(ctx.url);
      const appHtml = await vite.transformIndexHtml(url, html);

      ctx.status = 200;
      ctx.type = 'html';
      ctx.body = appHtml;
    } catch (e) {
      vite.ssrFixStacktrace(e);
      throw e;
    }
  });

  router.get('/api/users', (ctx) => {
    ctx.body = {
      users: [
        {
          name: 'Idler.zhu',
        },
        {
          name: 'Leonardo.zhu',
        },
      ],
    };
  });

  app.use(connect(vite.middlewares)).use(router.routes()).use(router.allowedMethods());

  app.listen(3000);
};

start().then(() => {
  console.log('Server start');
});
