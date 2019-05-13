import { auth } from './auth';

const request = require('request');

const search = (str, authorsLength, lastNumOfISBN, callback) => {
  const url = encodeURI(`https://lidemy-http-challenge.herokuapp.com/api/v2/books?q=${str}`);
  request.get({
    url,
    headers: { Authorization: auth },
  }, (err, res, body) => {
    const json = JSON.parse(body);
    const result = json.filter(el => el.author.length === authorsLength
    && el.ISBN[el.ISBN.length - 1] === lastNumOfISBN.toString());
    if (result.length !== 1) return console.log('Error! 不只一筆符合搜尋結果或沒有符合搜尋條件的資料');
    callback(result);
    return 0;
  }, callback);
};

const changeISBN = (result) => {
  const isbn = result[0].ISBN - 4;

  request.patch({
    url: `https://lidemy-http-challenge.herokuapp.com/api/v2/books/${result[0].id}`,
    headers: { Authorization: auth },
    form: { ISBN: isbn },
  }, (err, res, body) => {
    console.log(res.statusCode);
    console.log(body);
  });
};

search('我', 4, 7, changeISBN);
