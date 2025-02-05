const { createProxyMiddleware } = require('http-proxy-middleware');

// const host = 'http://localhost:8000';
const host = 'http://3.125.137.91:8000';

module.exports = function(app) {
  app.use(createProxyMiddleware(['/auth', '/social-auth'], {
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
