import HttpsProxyAgent from 'https-proxy-agent';
import proxy from 'http-proxy-middleware';

const apiProxy = proxy({
  target: process.env.BASE_URL,
  ...(process.env.HTTPS_PROXY && {
    agent: HttpsProxyAgent(process.env.HTTPS_PROXY)
  }),
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api': ''
  }
});

export default apiProxy;
