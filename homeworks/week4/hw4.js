const request = require('request');
// from https://discuss.dev.twitch.tv/t/node-js-using-api-example/16904
const options = {
  method: 'GET',
  url: 'https://api.twitch.tv/helix/games/top', // https://api.twitch.tv/kraken/games/top "_id"無法過 eslint
  headers:
  {
    'Client-ID': 'rjwb8zewf0hx6k2wdskymmxmzy7tpa',
  },
};

request(options, (error, response, body) => {
  const { data } = JSON.parse(body).data;
  data.forEach(el => console.log(`${el.id} ${el.name}`)); // _id no-underscore-dangle
});
