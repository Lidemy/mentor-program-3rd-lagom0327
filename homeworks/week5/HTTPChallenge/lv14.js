const request = require('request');

const url = 'https://lidemy-http-challenge.herokuapp.com/api/v3//index';
// const proxy = 'http://203.177.135.133:8080';

request.get({
  url,
  // proxy: proxy,
  /* https://stackoverflow.com/questions/32048832/
  node-js-programmatically-connect-to-a-vpn-or-route-http-requests-via-vpn */
  // http://www.freeproxylists.net/zh/ph.html
  headers: {
  // https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/
  // https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS#%E7%B0%A1%E5%96%AE%E8%AB%8B%E6%B1%82
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  },
}, (err, res, body) => {
  console.log(res.statusCode);
  console.log(body);
});
