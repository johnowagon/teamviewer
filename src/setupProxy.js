const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/images/headshots/current/168x168/',
    createProxyMiddleware({
      target: 'http://nhl.bamcontent.com',
      changeOrigin: true,
    })
  );
};