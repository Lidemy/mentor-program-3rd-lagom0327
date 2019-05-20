const request = require('request');

// from https://discuss.dev.twitch.tv/t/node-js-using-api-example/16904
const requestTimes = 2;
let counterTimes = 0;
const getStrams = (after, callback) => {
  const url = `https://api.twitch.tv/helix/streams?game_id=21779&first=100&after=${after}`;
  request({
    method: 'GET',
    url,
    headers: { 'Client-ID': 'rjwb8zewf0hx6k2wdskymmxmzy7tpa' },
  }, callback);// getStreams(changeURL);
};

const getAllStreams = (err, res, body) => {
  if (err) return console.log(err);
  if (counterTimes < requestTimes) {
    counterTimes += 1;
    const json = JSON.parse(body);
    const after = json.pagination.cursor;
    json.data.forEach(el => console.log(`${el.id} ${el.title}`));
    getStrams(after, getAllStreams);
  }
  return 0;
};

getStrams('', getAllStreams);// changeURL(requestTimes) 還沒想到
