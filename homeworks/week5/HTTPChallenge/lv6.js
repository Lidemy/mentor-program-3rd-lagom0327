import { auth } from './auth';

const request = require('request');

// https://github.com/dankogai/js-base64
// http basic authorization js
// from https://www.cnblogs.com/QLeelulu/archive/2009/11/22/1607898.html

const url = encodeURI('https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info');
request.get({
  url,
  headers: {
    Authorization: auth,
    'X-Library-Number': 20,
    // https://stackoverflow.com/questions/27652543/how-to-use-python-requests-to-fake-a-browser-visit
    'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)', // IE6.0 (released in 2001). Was the default browser in Windows XP.
  },
}, (err, res, body) => {
  console.log(res.statusCode);
  console.log(body);
});
