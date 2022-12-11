const { createProxyMiddleware } = require('http-proxy-middleware');

const host = 'http://localhost:3001';

module.exports = function(app) {
  app.use(createProxyMiddleware(['/api'], {
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    secure: false,
    target: host,
    headers: {
      host,
      origin: null
    }
  }));
};