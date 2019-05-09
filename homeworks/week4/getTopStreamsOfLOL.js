const request = require('request');
// from https://discuss.dev.twitch.tv/t/node-js-using-api-example/16904

let after = '';
const requestTimes = 4;
let counterTimes = 0;

const options = {
  method: 'GET',
  url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=100&after=',
  headers:
  {
    'Client-ID': 'rjwb8zewf0hx6k2wdskymmxmzy7tpa',
  },
};

const getStreams = (callback) => {
  request(options, (error, response, body) => {
    counterTimes += 1;
    const json = JSON.parse(body);
    after = json.pagination.cursor;
    json.data.forEach(el => console.log(`${el.id} ${el.title}`));
    callback();
  });
};
const lastTimeToGetStreams = () => {
  request(options, (error, response, body) => {
    const json = JSON.parse(body);
    after = json.pagination.cursor;
    json.data.forEach(el => console.log(`${el.id} ${el.title}`));
  });
};
const changeURL = () => {
  if (counterTimes < requestTimes - 1) {
    options.url = `https://api.twitch.tv/helix/streams?game_id=21779&first=100&after=${after}`;
    getStreams(changeURL);
  } else { // 最後一次不用再呼叫一次 changURL
    options.url = `https://api.twitch.tv/helix/streams?game_id=21779&first=100&after=${after}`;
    lastTimeToGetStreams();
  }
};

changeURL(); // changeURL(requestTimes) 還沒想到
