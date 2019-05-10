const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  const max = 20;

  request.get(`https://lidemy-book-store.herokuapp.com/books?_limit=${max}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      const length = json.length < max ? json.length : max;
      for (let i = 0; i < length; i++) console.log(`${json[i].id} ${json[i].name}`);
    });
}
if (process.argv[2] === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      if (body === '{}') console.log(`id: ${process.argv[3]}, there are no books here.`);
      else console.log(body);
    });
}
