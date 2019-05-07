const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  const max = 20;

  request.get(`https://lidemy-book-store.herokuapp.com/books?_limit=${max}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      const length = json.length < max ? json.length : max; // 用 delete 後長度可能小於 20
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
if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      console.log(`status: ${response.statusCode}`);
      if (response.statusCode < 300 && response.statusCode >= 200) console.log(`You successfully deleted the id = ${process.argv[3]} data`);
      if (response.statusCode >= 400) console.log(`Fail. Maybe there are no books in id:${process.argv[3]}`);
    });
}
if (process.argv[2] === 'create') {
  let lastId;
  request.get('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
    const json = JSON.parse(body);
    const { length } = json; // Use object destructuring
    lastId = json[length - 1].id;
    // 得到最後一位 id
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          id: Number(lastId) + 1,
          name: `${process.argv[3]}`,
        },
      },
      (err, httpResponse, body2) => console.log(body2),
      // 印出{"id": "22", "name": "testtest"} id 不是數字???,
    );
  });
}
if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: `${process.argv[4]}`,
      },
    },
    (error, response, body) => {
      console.log(`status: ${response.statusCode}`);
      if (response.statusCode < 300 && response.statusCode >= 200) console.log(`You successfully updat the id = ${process.argv[3]} data.\n${body}`);
      if (response.statusCode >= 400) console.log(`Fail. no such id: ${process.argv[3]}.`);
    },
  );
}
