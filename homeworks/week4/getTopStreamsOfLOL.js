const request = require('request');
// from https://discuss.dev.twitch.tv/t/node-js-using-api-example/16904

let after = '&after=';

const options = {
  method: 'GET',
  url: `https://api.twitch.tv/helix/streams?game_id=21779&first=100${after}`,
  headers:
  {
    'Client-ID': 'rjwb8zewf0hx6k2wdskymmxmzy7tpa',
  },
};

const topStreamsOfLOL = () => {
  setTimeout(() => {
    request(options, (error, response, body) => {
      const json = JSON.parse(body);
      after = json.pagination.cursor;
      json.data.forEach(el => console.log(`${el.id} ${el.title}`)); // _id no-underscore-dangle
    });
  }, 1000);
};
const getTopStreamsOfLOL = (num) => {
  for (let i = 0; i < num / 100; i++) {
    topStreamsOfLOL();
  }
};

getTopStreamsOfLOL(200);
