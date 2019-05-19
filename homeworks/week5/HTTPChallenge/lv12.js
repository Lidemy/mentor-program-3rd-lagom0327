const request = require('request');

request('https://lidemy-http-challenge.herokuapp.com/api/v3/stopover', (err, res, body) => console.log(body));
