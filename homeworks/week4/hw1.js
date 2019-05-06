const request = require('request');

const max = 10;

request.get(`https://lidemy-book-store.herokuapp.com/books?_limit=${max}`,
  (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < max; i++) console.log(`${json[i].id} ${json[i].name}`);
  });
