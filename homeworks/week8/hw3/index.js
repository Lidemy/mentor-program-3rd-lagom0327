let index = 0;
const gamesName = [];
let isShowStreams = false;
const input = document.querySelector('input');
const inputBtn = document.querySelector('.search_btn');
const nav = document.querySelector('.navbar__nav');
const loadMoreBtn = document.querySelector('.more_streams__btn');

const changeLiBg = (gameName) => {
  const li = nav.querySelectorAll('li');
  li.forEach((el) => {
    if (el.innerText === gameName) el.classList.add('selected');
    else el.classList.remove('selected');
  });
};
const showStreams = (data, startIndex) => {
  input.value = '';
  const container = document.querySelector('.display_streams');
  if (data.length === 0) {
    alert('No such game');
    return false;
  }
  if (startIndex === 0) {
    index = 0;
    container.innerHTML = '';
    document.querySelector('.game_name').innerHTML = data[0].channel.game;
    changeLiBg(data[0].channel.game);
  }
  for (let i = 0; i < 20; i++) {
    const a = document.createElement('a');
    a.classList.add('each_stream');
    a.href = data[i].channel.url;
    a.target = '_blank';
    a.innerHTML = `<img class="each_stream__preview" src='https://static-cdn.jtvnw.net/previews-ttv/live_user_${data[i].channel.name}-272x153.jpg'>
    <div class="profile">
      <img class="profile__logo" src="${data[i].channel.logo}">
      <div class="profile__info">
        <div class="profile__status">${data[i].channel.status}</div>
        <div class="profile__display_name">${data[i].channel.display_name}</div>
      </div>
    </div>`;
    container.appendChild(a);
  }
  index += 20;
  isShowStreams = true;
  return true;
};

const getStreams = (gameName, startIndex) => {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      console.log(json);
      const data = json.streams;
      showStreams(data, startIndex);
    } else console.log('err', request.status, request.responseText);
    request.onerror = () => console.log('error');
  };
  request.open('GET', `https://api.twitch.tv/kraken/streams?client_id=rjwb8zewf0hx6k2wdskymmxmzy7tpa&game=${encodeURI(gameName)}&offset=${startIndex}`);
  request.send();
};

const get100GamesName = (num) => {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText).top;
      // console.log(request.responseText);
      data.forEach((el) => { gamesName.push(el.game.name); });
    } else console.log('err', request.status, request.responseText);
    request.onerror = () => console.log('error');
  };
  request.open('GET', `https://api.twitch.tv/kraken/games/top?client_id=rjwb8zewf0hx6k2wdskymmxmzy7tpa&limit=100&offset=${num}`);
  request.send();
};

const getAllGamesName = (totalNum) => {
  for (let i = 0; i < totalNum / 100; i++) get100GamesName(i * 100);
};
// total = 2020 games

const search = (str, data) => {
  const word = str.toLowerCase();
  const result = [];
  data.forEach((el) => {
    if (el.slice(0, word.length).toLowerCase() === word) result.push(el);
  });
  return result;
};

const checkInputStatus = (text) => {
  const result = search(text, gamesName);
  if (result.length === 1) return true;
  if (result.length === 0) alert('No such game');
  else alert(`Maybe:\n ${result}`);
  return false;
};

const load = (totalNum, callback) => {
  getStreams('League of Legends', 0);
  nav.children[0].classList.add('selected');
  callback(totalNum);
};
// 要用 callback 不然剛載入網頁時 Streams 圖片顯示得很慢

// https://blog.csdn.net/IT_DREAM_ER/article/details/53513017
const scrollEvent = () => {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 30 && isShowStreams) {
    // 不然 streams 還沒新增完前也會觸發
    isShowStreams = false;
    getStreams(document.querySelector('.game_name').innerText, index);
  }
};

nav.addEventListener('click',
  (e) => {
    if (e.target.nodeName === 'LI') {
      changeLiBg(e.target.innerText);
      getStreams(e.target.innerText, index = 0);
    }
  });

loadMoreBtn.addEventListener('click', () => { getStreams(document.querySelector('.game_name').innerText, index); });

input.addEventListener('keyup',
  (e) => {
    if (input.value.length > 2) {
      const result = search(input.value, gamesName);
      if (result.length === 1) input.value = [...result];
      if (e.keyCode === 13 && checkInputStatus(input.value)) getStreams(input.value, 0);
    }
  });

inputBtn.addEventListener('click',
  () => {
    if (input.value && checkInputStatus(input.value)) getStreams(input.value, 0);
  });

window.addEventListener('scroll', scrollEvent);

load(700, getAllGamesName);
